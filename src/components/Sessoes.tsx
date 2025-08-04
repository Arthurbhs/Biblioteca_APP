import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
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
  const [limiteSecoes, setLimiteSecoes] = useState(3);


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

  
const renderSecao = (titulo: string, filtrarPor: string) => {
  const data = filtrarPorPalavra(filtrarPor);
  if (data.length === 0) return null;

  return (
    <View style={styles.secao}>
     <TouchableOpacity
  onPress={() => router.push({
    pathname: '/sessao',
    params: {
      palavraChave: filtrarPor,
      titulo: titulo
    }
  })}
>
  <Text style={styles.titulo}>{titulo}</Text>
</TouchableOpacity>

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


 const secoes = [
  { titulo: '🪘 Capoeira', palavra: 'capoeira' },
  { titulo: '✊ Coleção Black Power', palavra: 'coleção black power' },
  { titulo: '♀️ Empoderamento Feminino', palavra: 'empoderamento feminino' },
  { titulo: '⚖️ Questões Sociais', palavra: 'questões sociais' },
  { titulo: '🧒👧 Infanto‑Juvenil', palavra: 'Infanto‑Juvenil' },
  { titulo: '📖 Questões sociais', palavra: 'Questões sociais' },
  { titulo: '👧 Infanto Juvenil', palavra: 'infanto juvenil' },
  { titulo: '🌳♻️ Meio ambiente / Reciclagem', palavra: 'Meio ambiente / Reciclagem' },
  { titulo: '❤️‍🩹🧠 Comportamento / Sentimentos', palavra: 'Comportamento / Sentimentos' },
  { titulo: '👾🤖 Afrofuturismo', palavra: 'Afrofuturismo' },
  { titulo: 'Coleção Literária Itaú ', palavra: 'Coleção Literária Itaú - Leia para uma criança' },
  { titulo: '👾🤖 Famílias Diversas', palavra: 'Famílias Diversas' },
  { titulo: 'maternidade', palavra: 'maternidade' },
  { titulo: 'manifestação cultural', palavra: 'manifestação cultural' },
  { titulo: 'Cultura Indígena', palavra: 'Cultura Indígena' },
];

return (
  <ScrollView>
    <View>
      {secoes.slice(0, limiteSecoes).map((secao, index) =>
        renderSecao(secao.titulo, secao.palavra)
      )}

      {limiteSecoes < secoes.length && (
        <TouchableOpacity
          style={styles.botaoMais}
          onPress={() => setLimiteSecoes((prev) => prev + 3)}
        >
          <Text style={styles.textoBotaoMais}>Mostrar mais</Text>
        </TouchableOpacity>
      )}
    </View>
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

botaoMais: {
  backgroundColor: '#5ebf26',
  padding: 12,
  marginHorizontal: 16,
  marginVertical: 24,
  borderRadius: 8,
  alignItems: 'center',
},
textoBotaoMais: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},


});



export default ListaCategorias;