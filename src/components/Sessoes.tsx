import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, ScrollView } from 'react-native';
import LivroButton from './LivroButton';
import { useRouter } from 'expo-router';

type Livro = {
  id: number;
  titulo: string;
  capa: string;
  mostruario: string;
  dataCatalogo: string;
  dataPublicacao: string;
  tema: string;
  genero: string;
  classificacaoLiteraria: string;
  resumo: string;
};


const ListaCategorias = () => {
  const router = useRouter();
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    const buscarLivros = async () => {
      try {
        const resposta = await fetch('https://bookapi.apimateriallistcalculator.workers.dev/livros');
        const dados: Livro[] = await resposta.json();
        setLivros(Array.isArray(dados) ? dados : []);
      } catch (erro) {
        console.error('Erro ao buscar livros:', erro);
      } finally {
        setCarregando(false);
      }
    };

    buscarLivros();
  }, []);

  const normalizar = (texto: string) =>
    texto?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();

 const filtrarPorPalavra = (palavra: string) =>
  livros.filter((livro) => {
    const camposParaBuscar = [
      livro.titulo,
      livro.tema,
      livro.genero,
      livro.classificacaoLiteraria,
      livro.resumo,
    ];

    return camposParaBuscar.some((campo) =>
      normalizar(campo || '').includes(normalizar(palavra))
    );
  });


  const filtrarRecentes = () =>
    [...livros]
      .filter((l) => l.dataCatalogo)
      .sort((a, b) => new Date(b.dataCatalogo).getTime() - new Date(a.dataCatalogo).getTime())
      .slice(0, 20);

  const filtrarLancamentosAnoAtual = () => {
    const anoAtual = new Date().getFullYear();
    return livros.filter((livro) => {
      if (!livro.dataPublicacao) return false;
      const anoLivro = new Date(livro.dataPublicacao).getFullYear();
      return anoLivro === anoAtual;
    });
  };

  const renderSecao = (titulo: string, data: Livro[]) => {
    if (data.length === 0) return null;

    return (
      <View style={styles.secao}>
        <Text style={styles.titulo}>{titulo}</Text>
        <FlatList
          data={data}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <LivroButton livro={item} onPress={() => router.push(`/livros/${item.id}`)} />
          )}
        />
      </View>
    );
  };

  if (carregando) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#333" />
        <Text style={styles.loadingText}>Carregando livros...</Text>
      </View>
    );
  }

  return (
    <ScrollView>

    {renderSecao('🪘 Capoeira', filtrarPorPalavra('capoeira'))}
    {renderSecao('♀️ Empoderamento Feminino', filtrarPorPalavra('empoderamento feminino'))}
    {renderSecao('👧 Infanto Juvenil', filtrarPorPalavra('infanto juvenil'))}
    {renderSecao('⚖️ Questões Sociais', filtrarPorPalavra('questões sociais'))}



    </ScrollView>
  );
};

const styles = StyleSheet.create({
  secao: {
    marginBottom: 24,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    marginBottom: 8,
    color: '#333',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  loadingContainer: {
    marginTop: 40,
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#444',
  },
});

export default ListaCategorias;
