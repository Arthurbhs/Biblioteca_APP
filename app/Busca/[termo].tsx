import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import LivroButton  from '../../src/components/LivroButton';

type Livro = {
  id: number;
  titulo: string;
  capa: string;
  mostruario: string;
  dataCatalogo: string;
  tema: string;
  genero: string;
};

const gerarSlug = (titulo: string) =>
  titulo
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

const SearchPage = () => {
  const { termo } = useLocalSearchParams<{ termo?: string }>();
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (!termo) return;

      try {
        const response = await fetch('https://bookapi.apimateriallistcalculator.workers.dev/livros');
        const data: Livro[] = await response.json();

        const termoNormalizado = termo
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');

        const livrosFiltrados = data.filter((livro) => {
          const titulo = livro.titulo?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') || '';
          const tema = livro.tema?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') || '';
          const genero = livro.genero?.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '') || '';

          return (
            titulo.includes(termoNormalizado) ||
            tema.includes(termoNormalizado) ||
            genero.includes(termoNormalizado)
          );
        });

        setLivros(livrosFiltrados);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [termo]);

  if (loading) {
    return <ActivityIndicator size="large" color="#4CAF50" style={{ marginTop: 32 }} />;
  }

  if (!termo || livros.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Nenhum livro encontrado para "{termo}".</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Resultados para "{termo}"</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {livros.map((livro) => (
          <LivroButton
            key={livro.id}
            livro={livro}
            onPress={() => router.push(`/livros/${livro.id}`)}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default SearchPage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
});
