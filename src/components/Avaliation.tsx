import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, onSnapshot, addDoc, setDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { FontAwesome } from '@expo/vector-icons';

interface AvaliacaoProps {
  livroId: number;
}

const AvaliacaoEstrelas: React.FC<AvaliacaoProps> = ({ livroId }) => {
  const [user, setUser] = useState<any>(null);
  const [minhaNota, setMinhaNota] = useState<number>(0);
  const [media, setMedia] = useState<number>(0);
  const [totalAvaliacoes, setTotalAvaliacoes] = useState<number>(0);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      setUser(usuario);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const q = query(
      collection(db, 'avaliacoes'),
      where('livroId', '==', livroId)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const avaliacoes = snapshot.docs.map(doc => doc.data().nota as number);
      const soma = avaliacoes.reduce((a, b) => a + b, 0);
      const mediaCalculada = avaliacoes.length > 0 ? soma / avaliacoes.length : 0;
      setMedia(mediaCalculada);
      setTotalAvaliacoes(avaliacoes.length);

      // Verificar se o usuário atual já avaliou
      const minha = snapshot.docs.find(doc => doc.data().userId === user?.uid);
      setMinhaNota(minha ? minha.data().nota : 0);
    });

    return () => unsubscribe();
  }, [livroId, user]);

  const handleAvaliacao = async (nota: number) => {
    if (!user) {
      alert('Você precisa estar logado para avaliar');
      return;
    }

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    const nome = userSnap.exists() ? userSnap.data().nome : 'Anônimo';

    await setDoc(doc(db, 'avaliacoes', `${livroId}_${user.uid}`), {
      livroId,
      userId: user.uid,
      nome,
      nota,
      createdAt: new Date()
    });
  };

  const renderEstrelas = (notaAtual: number, interativa = false) => {
  const estrelas: JSX.Element[] = [];


    for (let i = 1; i <= 5; i++) {
      estrelas.push(
        <TouchableOpacity
          key={i}
          onPress={() => interativa && handleAvaliacao(i)}
          disabled={!interativa}
        >
          <FontAwesome
            name={i <= notaAtual ? 'star' : 'star-o'}
            size={32}
            color={i <= notaAtual ? '#FFD700' : '#ccc'}
          />
        </TouchableOpacity>
      );
    }
    return estrelas;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Avaliação</Text>
      <View style={styles.estrelasContainer}>
        {renderEstrelas(minhaNota, true)}
      </View>
      <Text style={styles.texto}>
        Sua nota: {minhaNota > 0 ? minhaNota : 'Nenhuma'}
      </Text>

      <View style={styles.mediaContainer}>
        <Text style={styles.texto}>
          Média: {media.toFixed(1)} ({totalAvaliacoes} avaliações)
        </Text>
        <View style={styles.estrelasContainer}>
          {renderEstrelas(Math.round(media))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
  },
  estrelasContainer: {
    flexDirection: 'row',
  },
  texto: {
    marginTop: 4,
    fontSize: 14,
  },
  mediaContainer: {
    marginTop: 12,
    alignItems: 'flex-start'
  }
});

export default AvaliacaoEstrelas;
