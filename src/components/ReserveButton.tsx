import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { doc, collection, getDocs, addDoc, updateDoc, query, where, deleteDoc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import Toast from 'react-native-toast-message';
import { getAuth } from 'firebase/auth';
import { getFunctions, httpsCallable } from 'firebase/functions';

interface Props {
  livroId: number;
  titulo: string;
  aoReservar?: () => void;
}

export default function BotaoReserva({ livroId, titulo, aoReservar }: Props) {
  const auth = getAuth();
  const usuario = auth.currentUser;
  const [jaReservadoPorOutro, setJaReservadoPorOutro] = useState(false);
  const [fila, setFila] = useState<{ uid: string; nome: string; email: string }[]>([]);
  const [reservaId, setReservaId] = useState<string | null>(null);
  const [carregando, setCarregando] = useState(true);
  const [usuarioComLivro, setUsuarioComLivro] = useState<{ uid: string; nome: string; email: string } | null>(null);
  const [mostrarFila, setMostrarFila] = useState(false);
  const router = useRouter();

  // 🔹 Função para enviar email chamando Cloud Function
  const enviarEmailAviso = async (email: string, nome: string, tituloLivro: string) => {
    try {
      const functions = getFunctions();
      const enviarAviso = httpsCallable(functions, 'enviarAvisoReserva');
      await enviarAviso({ email, nome, tituloLivro });
      console.log(`Email enviado para ${email}`);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
    }
  };

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
        const reservadoPorOutro = data.usuario?.uid !== usuario.uid;

        setReservaId(reservadoPorOutro ? null : docAtual.id);
        setJaReservadoPorOutro(reservadoPorOutro);
        setFila(data.fila || []);
        setUsuarioComLivro(data.usuario || null);
      } else {
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

  const reservarLivro = async () => {
    if (!usuario) {
      Toast.show({ type: 'error', text1: 'Você precisa estar logado' });
      return;
    }

    const buscarNomeDoUsuario = async (uid: string) => {
      try {
        const userRef = doc(db, 'users', uid);
        const admRef = doc(db, 'admins', uid);

        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          return userSnap.data().nomeCompleto || userSnap.data().nome || 'Usuário';
        }

        const admSnap = await getDoc(admRef);
        if (admSnap.exists()) {
          return admSnap.data().nomeCompleto || admSnap.data().nome || 'Administrador';
        }

        return 'Usuário';
      } catch (error) {
        console.error('Erro ao buscar nome do usuário/admin:', error);
        return 'Usuário';
      }
    };

    const nomeUsuario = await buscarNomeDoUsuario(usuario.uid);
    const emailUsuario = usuario.email || 'sem-email';

    try {
      const q = query(collection(db, 'reservas'), where('livroId', '==', livroId));
      const snap = await getDocs(q);

      if (!snap.empty) {
        const docAtual = snap.docs[0];
        const data = docAtual.data();

        if (data.reservadoPor !== usuario.uid) {
          const filaAtual = data.fila || [];
          const jaNaFila = filaAtual.some((p: any) => p.uid === usuario.uid);

          if (jaNaFila) {
            Toast.show({ type: 'info', text1: 'Você já está na fila de espera.' });
            return;
          }

          const novaFila = [
            ...filaAtual,
            {
              uid: usuario.uid,
              nome: nomeUsuario,
              email: emailUsuario,
            },
          ];

          await updateDoc(doc(db, 'reservas', docAtual.id), {
            fila: novaFila,
          });

          Toast.show({ type: 'success', text1: 'Adicionado à fila de espera!' });
          setFila(novaFila);
          return;
        }
        return;
      }

      const docRef = await addDoc(collection(db, 'reservas'), {
        livroId,
        usuario: {
          uid: usuario.uid,
          nome: nomeUsuario,
          email: emailUsuario,
        },
        reservadoPor: usuario.uid,
        dataReserva: new Date().toISOString(),
        fila: [],
      });

      Toast.show({ type: 'success', text1: `Livro reservado: ${titulo}` });
      setReservaId(docRef.id);
      aoReservar?.();
    } catch (error) {
      console.error('Erro ao reservar:', error);
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

      if (!data.usuario || data.usuario.uid !== usuario.uid) {
        Toast.show({ type: 'error', text1: 'Permissão negada' });
        return;
      }

      if (filaAtual.length > 0) {
        const proximo = filaAtual[0];
        const novaFila = filaAtual.slice(1);

        await updateDoc(reservaRef, {
          usuario: {
            uid: proximo.uid,
            nome: proximo.nome,
            email: proximo.email,
          },
          reservadoPor: proximo.uid,
          dataReserva: new Date().toISOString(),
          fila: novaFila,
        });

        // 🔹 Envia email para o próximo
        await enviarEmailAviso(proximo.email, proximo.nome, titulo);

        Toast.show({ type: 'success', text1: 'Reserva transferida para o próximo da fila!' });
      } else {
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

  const sairDaFila = async () => {
    if (!usuario) return;

    try {
      const q = query(collection(db, 'reservas'), where('livroId', '==', livroId));
      const snap = await getDocs(q);

      if (!snap.empty) {
        const docAtual = snap.docs[0];
        const data = docAtual.data();
        const filaAtual = data.fila || [];

        const novaFila = filaAtual.filter((p: any) => p.uid !== usuario.uid);

        await updateDoc(doc(db, 'reservas', docAtual.id), {
          fila: novaFila,
        });

        Toast.show({ type: 'success', text1: 'Você saiu da fila de espera.' });
        setFila(novaFila);
      }
    } catch (error) {
      console.error('Erro ao sair da fila:', error);
      Toast.show({ type: 'error', text1: 'Erro ao sair da fila' });
    }
  };

  return (
    <>
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.botao,
          reservaId ? styles.botaoCancelar : null,
          carregando && styles.botaoDesabilitado,
        ]}
        disabled={carregando}
      >
        <Text style={styles.texto}>
          {carregando ? '...' : reservaId ? 'Cancelar Reserva' : 'Reservar'}
        </Text>
      </TouchableOpacity>

      {!reservaId && jaReservadoPorOutro && fila.some(p => p.uid === usuario?.uid) && (
        <TouchableOpacity
          onPress={sairDaFila}
          style={[styles.botao, { backgroundColor: '#f44336' }]}
        >
          <Text style={styles.texto}>Sair da Fila</Text>
        </TouchableOpacity>
      )}

      {!carregando && fila.length > 0 && (
        <TouchableOpacity onPress={() => setMostrarFila(!mostrarFila)}>
          <Text style={styles.botaoLink}>
            {mostrarFila ? 'Esconder Fila' : 'Ver Fila'}
          </Text>
        </TouchableOpacity>
      )}

      {mostrarFila && (
        <>
          {usuarioComLivro && (
            <Text style={{ textAlign: 'center', marginTop: 8 }}>
              📚 Com o livro agora: <Text style={{ fontWeight: 'bold' }}>{usuarioComLivro.nome}</Text>
            </Text>
          )}

          <Text style={{ textAlign: 'center', marginTop: 8, fontWeight: 'bold' }}>
            Fila de espera:
          </Text>

          {fila.map((pessoa, index) => (
            <TouchableOpacity
              key={pessoa.uid}
              onPress={() => router.push(`/perfil/${pessoa.uid}`)}
            >
              <Text style={styles.linkNome}>
                {index + 1}º - {pessoa.nome}
              </Text>
            </TouchableOpacity>
          ))}
        </>
      )}
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
  },
  botaoLink: {
    color: '#1aba14',
    textDecorationLine: 'underline',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  linkNome: {
    color: '#126e0f',
    textAlign: 'center',
    marginTop: 4,
  },
});
