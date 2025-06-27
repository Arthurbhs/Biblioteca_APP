import React, { useEffect, useState, useRef } from 'react';
import { View, FlatList, Image, Text, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

interface Livro {
  id: number;
  titulo: string;
  capa: string;
  dataCatalogo: string; // formato esperado: "2025-06-19T00:00:00Z" ou similar
}

const RecentBooksCarousel: React.FC = () => {
  const [livrosRecentes, setLivrosRecentes] = useState<Livro[]>([]);
  const flatListRef = useRef<FlatList>(null);

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
        <View style={styles.carouselItem}>
          <Image
            source={{ uri: item.capa }}
            style={styles.image}
            resizeMode="cover"
          />
          <Text style={styles.title}>{item.titulo}</Text>
          <Text style={styles.date}>📅 {formatarData(item.dataCatalogo)}</Text>
        </View>
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
    width: width * 0.3,
    height: 250,
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
