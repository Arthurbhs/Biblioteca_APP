import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

interface Livro {
  id: number;
  titulo: string;
  mostruario: string;
  dataCatalogo: string;
}

const RecentBooksCarousel: React.FC = () => {
  const [livrosRecentes, setLivrosRecentes] = useState<Livro[]>([]);
  const flatListRef = useRef<FlatList>(null);
  const currentIndex = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://bookapi.apimateriallistcalculator.workers.dev/livros');
        const dados = await response.json();

        if (!Array.isArray(dados)) {
          console.error('A resposta da API não é um array:', dados);
          return;
        }

        const livrosOrdenados = dados
          .filter(l => l.dataCatalogo)
          .sort((a, b) => new Date(b.dataCatalogo).getTime() - new Date(a.dataCatalogo).getTime())
          .slice(0, 5);

        setLivrosRecentes(livrosOrdenados);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (livrosRecentes.length > 0) {
      intervalRef.current = setInterval(() => {
        currentIndex.current = (currentIndex.current + 1) % livrosRecentes.length;
        flatListRef.current?.scrollToIndex({ index: currentIndex.current, animated: true });
      }, 3000); // 3 segundos

      return () => clearInterval(intervalRef.current as NodeJS.Timeout);
    }
  }, [livrosRecentes]);

  const formatarData = (dataISO: string): string => {
    const data = new Date(dataISO);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <FlatList
      ref={flatListRef}
      data={livrosRecentes}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => router.push(`/livros/${item.id}`)}>
          <View style={styles.carouselItem}>
            <Image
              source={{ uri: item.mostruario }}
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.title}>{item.titulo}</Text>
            <Text style={styles.date}>📅 {formatarData(item.dataCatalogo)}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

const styles = StyleSheet.create({
  carouselItem: {
    width,
    padding: 16,
    alignItems: 'center',
  },
 image: {
  width: width * 0.9,         // 90% da largura da tela
  aspectRatio: 16 / 9,        // mantém a proporção widescreen
  borderRadius: 12,
},

  title: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  date: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default RecentBooksCarousel;
