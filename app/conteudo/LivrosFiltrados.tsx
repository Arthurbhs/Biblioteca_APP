import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import LivroButton from '../../src/components/LivroButton';
import Header  from '../../src/components/Header';

type Livro = {
  id: number;
  titulo: string;
  resumo: string;
  autor: string;
  editora: string;
  tema: string;
  genero: string;
  classificacaoLiteraria: string;
  numeroPaginas: number;
  dataPublicacao: string;
  capa: string;
  mostruario: string;
  dataCatalogo: string;
};

type RootStackParamList = {
  Filtro: { filtros: string[] };
};

type FiltroRouteProp = RouteProp<RootStackParamList, 'Filtro'>;

export default function LivrosFiltrados() {
  const route = useRoute<FiltroRouteProp>();
  const router = useRouter();

  const filtros = Array.isArray(route.params?.filtros)
    ? route.params.filtros
    : route.params?.filtros
    ? [route.params.filtros]
    : [];

  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        const res = await fetch('https://bookapi.apimateriallistcalculator.workers.dev/livros');
        const todosLivros: Livro[] = await res.json();

        const filtrados = todosLivros.filter((livro) =>
          filtros.some((filtro) =>
            livro.genero?.toLowerCase().includes(filtro.toLowerCase()) ||
            livro.tema?.toLowerCase().includes(filtro.toLowerCase())
          )
        );

        setLivros(filtrados);
      } catch (error) {
        console.error('Erro ao buscar livros:', error);
      } finally {
        setCarregando(false);
      }
    };

    buscarLivros();
  }, [filtros]);

  if (carregando) {
    return <Text style={{ padding: 16 }}>Carregando...</Text>;
  }

  return (
    <> <Header/>
    <View style={{ padding: 16, flex: 1 }}>
     
      <Text style={styles.titulo}>Livros por filtro: {filtros.join(', ')}</Text>

      <ScrollView>
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
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
});
