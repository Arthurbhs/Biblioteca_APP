import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Button, Dimensions, ActivityIndicator } from 'react-native';
import { router } from 'expo-router';
import Header from '../../src/components/Header';
import AvaliacaoEstrelas from '../../src/components/Avaliation';
import Comentario from '../../src/components/Comment'
import ReservaButton from "../../src/components/ReserveButton"

const screenWidth = Dimensions.get('window').width;

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
};

export default function LivroDetalhes() {
  const { id } = useLocalSearchParams();
  const [livro, setLivro] = useState<Livro | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchLivro = async () => {
      try {
        const response = await fetch(`https://bookapi.apimateriallistcalculator.workers.dev/livros/${id}`);
        const data = await response.json();
        setLivro(data);
      } catch (error) {
        console.error('Erro ao buscar o livro:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLivro();
  }, [id]);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#4CAF50" />
      </View>
    );
  }

  if (!livro) {
    return (
      <View style={styles.center}>
        <Text>Livro não encontrado.</Text>
      </View>
    );
  }

  return (
    <>
      <Header />
      <ScrollView contentContainerStyle={styles.container}>
        {/* IMAGEM MOSTRUÁRIO */}
        <Image source={{ uri: livro.mostruario }} style={styles.mostruario} />

        {/* TÍTULO */}
        <View style={styles.titleBox}>
          <Text style={styles.titulo}>{livro.titulo}</Text>
        </View>

        {/* INFO + RESUMO */}
        <View style={styles.row}>
          {/* INFO */}
          <View style={styles.infoBox}>
            <Text style={styles.label}>Autor: <Text style={styles.valor}>{livro.autor}</Text></Text>
            <Text style={styles.label}>Editora: <Text style={styles.valor}>{livro.editora}</Text></Text>
            <Text style={styles.label}>Tema: <Text style={styles.valor}>{livro.tema}</Text></Text>
            <Text style={styles.label}>Gênero: <Text style={styles.valor}>{livro.genero}</Text></Text>
            <Text style={styles.label}>Classificação Literária: <Text style={styles.valor}>{livro.classificacaoLiteraria}</Text></Text>
            <Text style={styles.label}>Número de Páginas: <Text style={styles.valor}>{livro.numeroPaginas}</Text></Text>
            <Text style={styles.label}>Data de Publicação: <Text style={styles.valor}>{new Date(livro.dataPublicacao).toLocaleDateString()}</Text></Text>
          </View>

          {/* RESUMO */}
          <View style={styles.resumoBox}>
            <Text style={styles.sectionTitle}>Resumo</Text>
            <Text style={styles.resumo}>{livro.resumo}</Text>
          </View>
        </View>

        {/* CAPA */}
        <Image source={{ uri: livro.capa }} style={styles.capa} />
   
   <AvaliacaoEstrelas livroId={livro.id}/>

        {/* BOTÕES */}
     <ReservaButton livroId={livro.id} titulo={livro.titulo} />


     


           <Comentario livroId={String(livro.id)} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleBox: {
    width: '100%',
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  infoBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4CAF50',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  resumoBox: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#4CAF50',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  mostruario: {
    width: screenWidth * 0.5,
    height: screenWidth * 0.3,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#555',
    marginBottom: 4,
  },
  valor: {
    fontWeight: 'normal',
    color: '#444',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  resumo: {
    fontSize: 14,
    color: '#444',
    textAlign: 'justify',
  },
  capa: {
    width: screenWidth * 0.6,
    height: screenWidth * 0.8,
    borderRadius: 12,
    marginBottom: 16,
  },
  botao: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginBottom: 16,
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
