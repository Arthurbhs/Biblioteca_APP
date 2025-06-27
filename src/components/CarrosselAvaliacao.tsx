import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Image, StyleSheet, Dimensions, Text } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const { width } = Dimensions.get('window');

interface LivroAPI {
  id: number;
  titulo: string;
  mostruario	: string; // URL da imagem
}

interface LivroComNota extends LivroAPI {
  media: number;
  totalAvaliacoes: number;
}

const ImageCarouselTopRated: React.FC = () => {
  const [topLivros, setTopLivros] = useState<LivroComNota[]>([]);
  const flatListRef = useRef<FlatList>(null);

  useEffect(() => {
    const fetchData = async () => {
      // 1. Buscar livros da API externa
      const response = await fetch('https://bookapi.apimateriallistcalculator.workers.dev/livros');
      const livrosAPI: LivroAPI[] = await response.json();

      // 2. Buscar avaliações do Firestore
      const avaliacoesSnap = await getDocs(collection(db, 'avaliacoes'));
      const mapaNotas: { [livroId: number]: number[] } = {};

      avaliacoesSnap.forEach(doc => {
        const { livroId, nota } = doc.data();
        if (!mapaNotas[livroId]) mapaNotas[livroId] = [];
        mapaNotas[livroId].push(nota);
      });

      // 3. Calcular médias e unir com os dados da API
      const livrosComNota: LivroComNota[] = livrosAPI.map((livro) => {
        const notas = mapaNotas[livro.id] || [];
        const media = notas.length > 0 ? notas.reduce((a, b) => a + b, 0) / notas.length : 0;
        return {
          ...livro,
          media,
          totalAvaliacoes: notas.length
        };
      });

      // 4. Ordenar e pegar os top 5
      const top5 = livrosComNota
        .filter(l => l.totalAvaliacoes > 0)
        .sort((a, b) => b.media - a.media)
        .slice(0, 5);

      setTopLivros(top5);
    };

    fetchData();
  }, []);

  return (
    <FlatList
      ref={flatListRef}
      data={topLivros}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.carouselItem}>
          <Image
            source={{ uri: item.mostruario	 }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>{item.titulo}</Text>
          <Text style={styles.rating}>⭐ {item.media.toFixed(1)} ({item.totalAvaliacoes})</Text>
        </View>
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
    padding: 16
  },
  image: {
    width: width * 0.3,
    height: 250,
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  rating: {
    fontSize: 16,
    color: '#666',
    marginTop: 4
  }
});

export default ImageCarouselTopRated;
