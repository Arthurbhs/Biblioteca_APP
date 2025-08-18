import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import LivroButton from '../../src/components/LivroButton';
import Header from "../../src/components/Header";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // ajuste o caminho se necessário

type Livro = {
  id: number;
  titulo: string;
  capa: string;
  tema: string;
  genero: string;
  classificacaoLiteraria: string;
  resumo: string;
  mostruario: string;
  dataCatalogo: string;
};

const CategoriaScreen = () => {
  const { palavraChave, titulo } = useLocalSearchParams();

  const palavra = String(palavraChave || '');
  const tituloCategoria = String(titulo || '');

  const [livros, setLivros] = useState<Livro[]>([]);

  useEffect(() => {
    console.log('Palavra-chave recebida:', palavra);

    const buscarLivros = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'livros'));
        const dados = snapshot.docs.map(doc => doc.data() as Livro);

        const livrosFiltrados = dados.filter((livro) =>
          livro.tema?.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
            .includes(palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase())
        );

        setLivros(livrosFiltrados);
      } catch (erro) {
        console.error('Erro ao buscar livros no Firestore:', erro);
      }
    };

    buscarLivros();
  }, [palavra]);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.header}>{tituloCategoria}</Text>

        <FlatList
          data={livros}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
          contentContainerStyle={styles.listContent}
          renderItem={({ item }) => (
            <LivroButton livro={item} onPress={() => {}} />
          )}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  row: { justifyContent: 'space-between' },
  listContent: {
    paddingBottom: 24,
  },
});

export default CategoriaScreen;
