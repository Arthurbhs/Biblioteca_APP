import { useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity, Dimensions, ActivityIndicator } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Modal, TouchableWithoutFeedback } from 'react-native';
import Header from '../../src/components/Header';
import AvaliacaoEstrelas from '../../src/components/Avaliation';
import Comentario from '../../src/components/Comment'
import ReservaButton from "../../src/components/ReserveButton"
import { useRef } from 'react';
import { findNodeHandle, UIManager } from 'react-native';


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
const [showMenu, setShowMenu] = useState(false);
const menuButtonRef = useRef(null);
const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });




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
     <View style={styles.imageWrapper}>
  <Image source={{ uri: livro.mostruario }} style={styles.mostruario} />
 <TouchableOpacity
  ref={menuButtonRef}
  style={styles.menuButton}
  onPress={() => {
    if (menuButtonRef.current) {
      const handle = findNodeHandle(menuButtonRef.current);
      if (handle) {
        UIManager.measure(handle, (_x, _y, _width, _height, pageX, pageY) => {
          setMenuPosition({ x: pageX - 220, y: pageY + 24 }); // +24 para posicionar abaixo do botão
          setShowMenu(true);
        });
      }
    }
  }}
>
  <Entypo name="dots-three-vertical" size={24} color="#fff" />
</TouchableOpacity>

</View>

        {/* TÍTULO */}
        <View style={styles.titleBox}>
          <Text style={styles.titulo}>{livro.titulo}</Text>
           <Text style={styles.tema}>{livro.tema}</Text>
        </View>

        {/* INFO + RESUMO */}
        <View style={styles.row}>
          {/* INFO */}
         

          {/* RESUMO */}
          <View style={styles.resumoBox}>
            <Text style={styles.sectionTitle}>Resumo</Text>
            <Text style={styles.resumo}>{livro.resumo}</Text>
          </View>
        </View>

        {/* CAPA */}
        <Image source={{ uri: livro.capa }} style={styles.capa} />
        <View style={styles.bookDetailsBelowImage}>
  <Text style={styles.bookTitle}>{livro.titulo}</Text>
  <Text style={styles.bookAuthor}>Autor: {livro.autor}</Text>
  <Text style={styles.bookDate}>
    Publicado em: {new Date(livro.dataPublicacao).toLocaleDateString()}
  </Text>
</View>

    <ReservaButton livroId={livro.id} titulo={livro.titulo} />

   <View style={styles.feedbackBox}>
  <AvaliacaoEstrelas livroId={livro.id} />
  <Comentario livroId={String(livro.id)} />
</View>

           
      </ScrollView>
 <Modal transparent visible={showMenu} animationType="fade">
  <TouchableWithoutFeedback onPress={() => setShowMenu(false)}>
    <View style={styles.overlay}>
      <View
        style={[
          styles.menuContainer,
          { position: 'absolute', top: menuPosition.y, left: menuPosition.x }
        ]}
      >
        <Text style={styles.menuItem}><Text style={styles.bold}>Editora:</Text> {livro.editora}</Text>
        <Text style={styles.menuItem}><Text style={styles.bold}>Gênero:</Text> {livro.genero}</Text>
        <Text style={styles.menuItem}><Text style={styles.bold}>Classificação:</Text> {livro.classificacaoLiteraria}</Text>
        <Text style={styles.menuItem}><Text style={styles.bold}>Páginas:</Text> {livro.numeroPaginas}</Text>
      </View>
    </View>
  </TouchableWithoutFeedback>
</Modal>



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
   tema: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  resumoBox: {
  width: '100%',
  backgroundColor: '#fff',
  borderRadius: 12,
  borderWidth: 2,
  borderColor: '#4CAF50',
  padding: 16,
  marginBottom: 20,
  alignSelf: 'center',
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.1,
  shadowRadius: 4,
  elevation: 3,
},

mostruario: {
  width: screenWidth * 0.9,
  height: screenWidth * 0.5,
  borderRadius: 12,
  marginBottom: 20,
  resizeMode: 'cover', // cobre a área proporcionalmente
},

feedbackBox: {
  width: '100%',
  backgroundColor: '#f5f5f5',
  padding: 16,
  borderRadius: 12,
  marginBottom: 20,
  alignSelf: 'flex-start',
  alignItems: 'center', 
  gap: 3, // espaço entre os componentes (React Native 0.71+)
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

 imageWrapper: {
  position: 'relative',
  marginBottom: 20,
},
menuButton: {
  position: 'absolute',
  top: 8,
  right: 8,
  backgroundColor: 'rgba(0,0,0,0.6)',
  padding: 8,
  borderRadius: 20,
  zIndex: 10,              // ⬅ garante que fique por cima
  minWidth: 36,
  minHeight: 36,
  justifyContent: 'center',
  alignItems: 'center',
},

overlay: {
  flex: 1,
  backgroundColor: 'rgba(0,0,0,0.2)',
  justifyContent: 'flex-start',
  alignItems: 'flex-end',
  paddingTop: 60,
  paddingRight: 20,
},
menuContainer: {
  backgroundColor: '#fff',
  borderRadius: 8,
  padding: 12,
  width: 250,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.2,
  shadowRadius: 4,
  elevation: 5,
},
menuItem: {
  fontSize: 14,
  color: '#333',
  marginBottom: 8,
},
bold: {
  fontWeight: 'bold',
},
bookDetailsBelowImage: {
  alignItems: 'center',
  marginBottom: 20,
},
bookTitle: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#333',
  marginTop: 8,
  textAlign: 'center',
},
bookAuthor: {
  fontSize: 16,
  color: '#555',
  marginTop: 4,
},
bookDate: {
  fontSize: 14,
  color: '#777',
  marginTop: 2,
},



});
