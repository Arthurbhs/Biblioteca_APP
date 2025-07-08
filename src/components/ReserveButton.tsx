import React, { useEffect, useState } from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { doc, collection, getDocs, addDoc, updateDoc, query, where, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Toast from 'react-native-toast-message';
import { getAuth } from 'firebase/auth';
import { getDoc } from 'firebase/firestore';
 import { Timestamp } from 'firebase/firestore';


interface Props {
  livroId: number;
  titulo: string;
  aoReservar?: () => void;
}

export default function BotaoReserva({ livroId, titulo, aoReservar }: Props) {
  const auth = getAuth();
  const usuario = auth.currentUser;
const [jaReservadoPorOutro, setJaReservadoPorOutro] = useState(false);
const [fila, setFila] = useState<{ uid: string; nome: string }[]>([]);
  const [reservaId, setReservaId] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);

  // 1. Verifica se o usuário já reservou o livro
  const verificarReserva = async () => {
  if (!usuario) {
    setCarregando(false);
    return;
  }

  try {
    const q = query(collection(db, 'reservas'), where('livroId', '==', livroId));
    const snap = await getDocs(q);

    if (!snap.empty) {
      const docAtual = snap.docs[0];
      const data = docAtual.data();
      const reservadoPorOutro = data.reservadoPor !== usuario.uid;

      setReservaId(reservadoPorOutro ? null : docAtual.id);
      setJaReservadoPorOutro(reservadoPorOutro);
      setFila(data.fila || []);
    } else {
      // Nenhuma reserva ainda
      setReservaId(null);
      setJaReservadoPorOutro(false);
      setFila([]);
    }
  } catch (error) {
    console.error('Erro ao verificar reserva:', error);
  } finally {
    setCarregando(false);
  }
};


  // 2. Executa ao montar
 useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((user) => {
    if (user) {
      verificarReserva();
    } else {
      setReservaId(null);
      setCarregando(false);
    }
  });

  return unsubscribe;
}, []);


  // 3. Reserva livro
  const reservarLivro = async () => {
  if (!usuario) {
    Toast.show({ type: 'error', text1: 'Você precisa estar logado' });
    return;
  }

  try {
    const q = query(collection(db, 'reservas'), where('livroId', '==', livroId));
    const snap = await getDocs(q);

    if (!snap.empty) {
      const docAtual = snap.docs[0];
      const data = docAtual.data();

      // Já está reservado por outro
      if (data.reservadoPor !== usuario.uid) {
        const filaAtual = data.fila || [];

        const jaNaFila = filaAtual.some((p: any) => p.uid === usuario.uid);
        if (jaNaFila) {
          Toast.show({ type: 'info', text1: 'Você já está na fila de espera.' });
          return;
        }

        const novaFila = [...filaAtual, {
          uid: usuario.uid,
          nome: usuario.displayName || 'Sem nome',
        }];

        await updateDoc(doc(db, 'reservas', docAtual.id), {
          fila: novaFila,
        });

        Toast.show({ type: 'success', text1: 'Adicionado à fila de espera!' });
        setFila(novaFila);
        return;
      }

      // Se chegou aqui, é o próprio usuário, não precisa fazer nada
      return;
    }

    // Se não existe nenhuma reserva, cria
    const docRef = await addDoc(collection(db, 'reservas'), {
      livroId,
      usuario: {
        uid: usuario.uid,
        nome: usuario.displayName || '',
      },
      reservadoPor: usuario.uid,
      dataReserva: new Date().toISOString(),
      fila: [],
    });

    Toast.show({ type: 'success', text1: `Livro reservado: ${titulo}` });
    setReservaId(docRef.id);
    aoReservar?.();
  } catch (error) {
    console.error("Erro ao reservar:", error);
    Toast.show({ type: 'error', text1: 'Erro ao reservar livro' });
  }
};

const cancelarReserva = async () => {
  if (!reservaId || !usuario) return;

  try {
    const reservaRef = doc(db, 'reservas', reservaId);
    const docSnap = await getDoc(reservaRef);

    if (!docSnap.exists()) {
      Toast.show({ type: 'error', text1: 'Reserva não encontrada' });
      return;
    }

    const data = docSnap.data();
    const filaAtual = data.fila || [];

    // Verifica se é o usuário dono da reserva
    if (!data.usuario || data.usuario.uid !== usuario.uid) {
      Toast.show({ type: 'error', text1: 'Permissão negada' });
      return;
    }

    if (filaAtual.length > 0) {
      // Transfere a reserva para o primeiro da fila
      const proximo = filaAtual[0];
      const novaFila = filaAtual.slice(1); // Remove o primeiro da fila

      await updateDoc(reservaRef, {
        usuario: {
          uid: proximo.uid,
          nome: proximo.nome,
        },
        reservadoPor: proximo.uid,
        dataReserva: new Date().toISOString(),
        fila: novaFila,
      });

      Toast.show({
        type: 'success',
        text1: 'Reserva transferida para o próximo da fila!',
      });
    } else {
      // Ninguém na fila, pode deletar a reserva
      await deleteDoc(reservaRef);
      Toast.show({ type: 'success', text1: 'Reserva cancelada' });
    }

    setReservaId(null);
    aoReservar?.();
  } catch (error) {
    console.error('Erro ao cancelar reserva:', error);
    Toast.show({ type: 'error', text1: 'Erro ao cancelar reserva' });
  }
};




  const handlePress = () => {
    if (reservaId) {
      cancelarReserva();
    } else {
      reservarLivro();
    }
  };

  return (
    <>
  <TouchableOpacity
  onPress={handlePress}
  style={[
    styles.botao,
    reservaId ? styles.botaoCancelar : null,
    carregando && styles.botaoDesabilitado
  ]}
  disabled={carregando}
>

      <Text style={styles.texto}>
        {carregando ? '...' : reservaId ? 'Cancelar Reserva' : 'Reservar'}
      </Text>
    </TouchableOpacity>

    <Text style={{ textAlign: 'center', marginTop: 8 }}>
  {carregando ? '' :
    reservaId ? 'Você reservou este livro' :
    jaReservadoPorOutro ? `Livro já reservado. Fila de espera: ${fila.length}` :
    ''}
</Text>
</>

  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#4caf50',
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  botaoCancelar: {
    backgroundColor: '#f44336',
  },
  texto: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  botaoDesabilitado: {
  opacity: 0.6,
}

});
