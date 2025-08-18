import React, { useEffect, useState } from 'react';
import { useLocalSearchParams, useRouter } from 'expo-router';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import Header  from '../../src/components/Header';
import LivroButton  from '../../src/components/LivroButton';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

type Livro = {
  id: string;
  titulo: string;
  capa: string;
  mostruario: string;
  dataCatalogo: string;
  tema: string;
  genero: string;
};

const SearchPage = () => {
  const { termo } = useLocalSearchParams<{ termo?: string }>();
  const [livros, setLivros] = useState<Livro[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      if (!termo) return;

      try {
        const snapshot = await getDocs(collection(db, "livros"));
        const todosLivros: Livro[] = snapshot.docs.map(doc => ({
          id: doc.id,
          ...(doc.data() as Omit<Livro, "id">)
        }));

        const termoNormalizado = termo
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '');

        const livrosFiltrados = todosLivros.filter((livro) => {
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
        console.error('Erro ao buscar livros no Firestore:', error);
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
      <>
        <Header/>
        <View style={styles.container}>
          <Text style={styles.header}>Nenhum livro encontrado para "{termo}".</Text>
        </View>
      </>
    );
  }

  return (
    <>
      <Header/>
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
    </>
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
