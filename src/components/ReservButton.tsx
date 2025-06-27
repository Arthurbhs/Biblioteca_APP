import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { collection, query, where, onSnapshot, addDoc, deleteDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

interface ReservaProps {
  livroId: number;
}

const ReservaButton: React.FC<ReservaProps> = ({ livroId }) => {
  const [user, setUser] = useState<any>(null);
  const [reserva, setReserva] = useState<any>(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, 'reservas'),
      where('livroId', '==', livroId)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setReserva(data.length > 0 ? data[0] : null);
    });

    return () => unsubscribe();
  }, [livroId]);

  const handleReserva = async () => {
    if (!user) {
      alert('Você precisa estar logado para reservar');
      return;
    }

    if (reserva) {
      if (reserva.userId === user.uid) {
        await deleteDoc(doc(db, 'reservas', reserva.id));
      } else {
        alert(`Livro já reservado por ${reserva.nome}`);
      }
    } else {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      const nome = userSnap.exists() ? userSnap.data().nome : 'Anônimo';

      await addDoc(collection(db, 'reservas'), {
        livroId,
        userId: user.uid,
        nome: nome,
        createdAt: new Date(),
      });
    }
  };

  const isReservadoPorOutro = reserva && reserva.userId !== user?.uid;
  const textoBotao = reserva
    ? reserva.userId === user?.uid
      ? 'Deixar de reservar'
      : `Reservado por ${reserva.nome}`
    : 'Reservar';

  const corBotao = reserva
    ? reserva.userId === user?.uid
      ? '#d32f2f' // verde escuro para cancelar reserva própria
      : 'white' // vermelho se reservado por outro
    : '#388e3c'; // verde para reservar

  const botaoDesabilitado = isReservadoPorOutro;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handleReserva}
        disabled={botaoDesabilitado}
        style={[styles.botao, { backgroundColor: corBotao }]}
      >
        <Text style={styles.textoBotao}>{textoBotao}</Text>
      </TouchableOpacity>

      {isReservadoPorOutro && (
        <Text style={styles.reservado}>
          Este livro está reservado por {reserva.nome}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
  },
  botao: {
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold',
  },
  reservado: {
    marginTop: 4,
    color: 'red',
    fontWeight: 'bold',
  },
});

export default ReservaButton;
