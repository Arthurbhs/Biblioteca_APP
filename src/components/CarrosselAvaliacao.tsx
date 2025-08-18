import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, Text, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

interface LivroAPI {
  id: string; // agora é string pois vem do Firestore
  titulo: string;
  mostruario: string;
}

interface LivroComNota extends LivroAPI {
  media: number;
  totalAvaliacoes: number;
}

const ImageCarouselTopRated: React.FC = () => {
  const [topLivros, setTopLivros] = useState<LivroComNota[]>([]);
  const flatListRef = useRef<FlatList>(null);
  const currentIndexRef = useRef(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 🔹 Busca livros do Firestore
        const livrosSnap = await getDocs(collection(db, 'livros'));
        const livrosAPI: LivroAPI[] = livrosSnap.docs.map(doc => ({
          id: doc.id,
          titulo: doc.data().titulo,
          mostruario: doc.data().mostruario,
        }));

        // 🔹 Busca avaliações do Firestore
        const avaliacoesSnap = await getDocs(collection(db, 'avaliacoes'));
        const mapaNotas: { [livroId: string]: number[] } = {};

        avaliacoesSnap.forEach(doc => {
          const { livroId, nota } = doc.data();
          if (!mapaNotas[livroId]) mapaNotas[livroId] = [];
          mapaNotas[livroId].push(nota);
        });

        // 🔹 Calcula média e total de avaliações
        const livrosComNota: LivroComNota[] = livrosAPI.map((livro) => {
          const notas = mapaNotas[livro.id] || [];
          const media = notas.length > 0 ? notas.reduce((a, b) => a + b, 0) / notas.length : 0;
          return {
            ...livro,
            media,
            totalAvaliacoes: notas.length
          };
        });

        // 🔹 Seleciona top 5
        const top5 = livrosComNota
          .filter(l => l.totalAvaliacoes > 0)
          .sort((a, b) => b.media - a.media)
          .slice(0, 5);

        setTopLivros(top5);
      } catch (err) {
        console.error('Erro ao buscar livros ou avaliações no Firestore:', err);
      }
    };

    fetchData();
  }, []);

  // 🔄 Scroll automático
  useEffect(() => {
    const interval = setInterval(() => {
      if (flatListRef.current && topLivros.length > 0) {
        currentIndexRef.current = (currentIndexRef.current + 1) % topLivros.length;
        flatListRef.current.scrollToIndex({
          index: currentIndexRef.current,
          animated: true,
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [topLivros]);

  return (
    <FlatList
      ref={flatListRef}
      data={topLivros}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/livros/${item.id}`)}>
          <View style={styles.carouselItem}>
            <Image
              source={{ uri: item.mostruario }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.rating}>⭐ {item.media.toFixed(1)} ({item.totalAvaliacoes})</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: width * 0.9,
    aspectRatio: 16 / 9,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  rating: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
});

export default ImageCarouselTopRated;
