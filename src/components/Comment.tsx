import React, { useState, useEffect } from 'react';
import { Keyboard } from 'react-native';

import {
  Text, TextInput, Button, View, FlatList,
  StyleSheet, Image, TouchableOpacity,
  KeyboardAvoidingView, Platform
} from 'react-native';
import {
  collection, query, where, orderBy,
  onSnapshot, addDoc, serverTimestamp, doc,
  getDoc, Timestamp, updateDoc, deleteDoc
} from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Modal from 'react-native-modal';


interface Comentario {
  id: string;
  texto: string;
  userId: string;
  userEmail: string;
  nome: string;
  avatar: string;
  createdAt: Timestamp | null;
  hidden?: boolean;
}

type ComentariosProps = {
  comentario: {
    id: string;
          livroId: string;
    texto: string;
    usuarioId: string;
    usuarioNome: string;
    avatar?: string;
    criadoEm: any; // Timestamp do Firestore
    editadoEm?: any;
    retido?: boolean;
  };
  usuarioAtualId: string;
  usuarioAtualAdmin: boolean;
  onExcluir: (id: string) => void;
  onEditar: (id: string, novoTexto: string) => void;
  onReter: (id: string, reter: boolean) => void;
};


const Comentarios: React.FC<ComentariosProps> = ({ livroId }) => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [comentario, setComentario] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [editandoId, setEditandoId] = useState<string | null>(null);
  const [novoTexto, setNovoTexto] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [modalComentarioId, setModalComentarioId] = useState<string | null>(null);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  const router = useRouter();

  // Carregar usuário e verificar se é admin
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (usuario) => {
      setUser(usuario);
      if (usuario) {
        const userRef = doc(db, 'users', usuario.uid);
        const userSnap = await getDoc(userRef);
        setIsAdmin(userSnap.exists() && userSnap.data().administrator === true);
      }
    });
    return () => unsubscribe();
  }, []);

  const republicarComentario = async (comentarioId: string) => {
  try {
    await updateDoc(doc(db, 'comentarios', comentarioId), { hidden: false });
  } catch (error) {
    console.error('Erro ao republicar comentário:', error);
  }
};
  // Buscar comentários (filtrando se necessário)
  useEffect(() => {
  const q = query(
    collection(db, 'comentarios'),
    where('livroId', '==', livroId),
    orderBy('createdAt', 'desc')
  );

  const unsubscribe = onSnapshot(q, async (snapshot) => {
    const lista: Comentario[] = await Promise.all(
      snapshot.docs.map(async (docSnap) => {
        const data = docSnap.data();
        
        // Busca informações do usuário
        const userRef = doc(db, 'users', data.userId);
        const userSnap = await getDoc(userRef);
        const nome = userSnap.exists() ? userSnap.data().nome : 'Anônimo';
        const avatar = userSnap.exists() ? userSnap.data().avatarBase64 || '' : '';

        return {
          id: docSnap.id,
          texto: data.texto,
          userId: data.userId,
          userEmail: data.userEmail,
          nome,
          avatar,
          createdAt: data.createdAt ?? null,
          hidden: data.hidden || false // 🔹 Adiciona status de retenção
        };
      })
    );

    // 🔹 Se for admin, mostra todos (incluindo retidos)
    // 🔹 Se não for admin, remove retidos
    const filtrados = isAdmin ? lista : lista.filter(c => !c.hidden);
    setComentarios(filtrados);
  });

  return () => unsubscribe();
}, [livroId, isAdmin]);

  // Funções
  const enviarComentario = async () => {
    if (!comentario.trim() || !user) return;

    try {
      const userRef = doc(db, 'users', user.uid);
      const userSnap = await getDoc(userRef);
      const nome = userSnap.exists() ? userSnap.data().nome : 'Anônimo';
      const avatar = userSnap.exists() ? userSnap.data().avatarBase64 : '';

      await addDoc(collection(db, 'comentarios'), {
        livroId,
        texto: comentario,
        userId: user.uid,
        userEmail: user.email,
        nome,
        avatar: user?.photoURL || "https://i.imgur.com/placeholder.png", // valor padrão
        hidden: false,
        createdAt: serverTimestamp()
      });

      setComentario('');
    } catch (error) {
      console.error('Erro ao enviar comentário: ', error);
    }
  };

  const deletarComentario = async (comentarioId: string) => {
    try {
      await deleteDoc(doc(db, 'comentarios', comentarioId));
    } catch (error) {
      console.error('Erro ao deletar comentário:', error);
    }
  };

  const editarComentario = async (comentarioId: string, novoTexto: string) => {
    try {
      await updateDoc(doc(db, 'comentarios', comentarioId), { texto: novoTexto });
      setEditandoId(null);
      setNovoTexto('');
    } catch (error) {
      console.error('Erro ao editar comentário:', error);
    }
  };

  const reterComentario = async (comentarioId: string) => {
    try {
      await updateDoc(doc(db, 'comentarios', comentarioId), { hidden: true });
    } catch (error) {
      console.error('Erro ao reter comentário:', error);
    }
  };

  const podeEditar = (createdAt: Timestamp | null) => {
    if (!createdAt) return false;
    const agora = new Date();
    const dataCriacao = createdAt.toDate();
    const diffDias = (agora.getTime() - dataCriacao.getTime()) / (1000 * 60 * 60 * 24);
    return diffDias <= 2;
  };

  const navegarParaPerfil = (userId: string) => {
    if (!user) return;
    if (user.uid === userId) {
      router.push('/perfil/profileScreen');
    } else {
      router.push(`/perfil/${userId}`);
    }
  };

  const formatarData = (data: Timestamp | null) => {
    if (!data) return '';
    const date = data.toDate();
    return `${date.toLocaleDateString()} - ${date.getHours()}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  const renderItem = ({ item }: { item: Comentario }) => {
    const isAuthor = user?.uid === item.userId;
    const podeAlterar = isAuthor && podeEditar(item.createdAt);

    return (
      <View style={styles.comentario}>
        <View style={styles.userInfo}>
          <TouchableOpacity onPress={() => navegarParaPerfil(item.userId)}>
            {item.avatar ? (
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder} />
            )}
          </TouchableOpacity>
          <View style={styles.nomeData}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <TouchableOpacity onPress={() => navegarParaPerfil(item.userId)}>
                <Text style={styles.nome}>{item.nome}</Text>
              </TouchableOpacity>
              {(isAuthor || isAdmin) && (
                <TouchableOpacity
                  onPress={(event) => {
                    const { pageX, pageY } = event.nativeEvent;
                    setModalComentarioId(item.id);
                    setModalPosition({ x: pageX, y: pageY });
                    setModalVisible(true);
                  }}
                  style={{ marginLeft: 8 }}
                >
                  <Ionicons name="ellipsis-vertical" size={18} color="gray" />
                </TouchableOpacity>
              )}
            </View>
            <Text style={styles.data}>{formatarData(item.createdAt)}</Text>
          </View>
        </View>

       {editandoId === item.id ? (
  <>
    <TextInput
      value={novoTexto}
      onChangeText={setNovoTexto}
      style={[styles.input, { marginTop: 8 }]}
      multiline
    />
    <View style={{ flexDirection: 'row', marginTop: 4 }}>
      <Button title="Salvar" onPress={() => editarComentario(item.id, novoTexto)} />
      <View style={{ width: 8 }} />
      <Button title="Cancelar" color="gray" onPress={() => setEditandoId(null)} />
    </View>
  </>
) : (
  <Text
    style={{
      opacity: item.hidden ? 0.6 : 1,
      color: isAdmin && item.hidden ? 'red' : 'black'
    }}
  >
    {item.texto}
  </Text>
)}

      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Text style={styles.titulo}>Comentarios</Text>
      <TouchableOpacity style={{ flex: 1 }} activeOpacity={1} onPress={() => Keyboard.dismiss()}>
        <View style={styles.container}>
          <FlatList
            data={comentarios}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: 120 }}
            keyboardShouldPersistTaps="handled"
          />

          <View style={{ paddingBottom: 16, paddingHorizontal: 16, width: '100%' }}>
            <TextInput
              placeholder="Escreva um comentário"
              value={comentario}
              onChangeText={setComentario}
              style={styles.input}
              multiline
            />
            <Button title="Enviar" onPress={enviarComentario} />
          </View>
        </View>

        {/* Menu */}
        <Modal
          isVisible={modalVisible}
          onBackdropPress={() => setModalVisible(false)}
          backdropColor="transparent"
          style={{
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            margin: 0,
            paddingTop: modalPosition.y,
            paddingLeft: modalPosition.x + 20,
          }}
        >
          <View style={styles.menuContainer}>
            {modalComentarioId && (
              <>
                {/* Editar - apenas autor dentro do prazo */}
                {comentarios.find(c => c.id === modalComentarioId)?.userId === user?.uid &&
                  podeEditar(comentarios.find(c => c.id === modalComentarioId)?.createdAt || null) && (
                    <TouchableOpacity
                      style={styles.menuButton}
                      onPress={() => {
                        const texto = comentarios.find(c => c.id === modalComentarioId)?.texto || '';
                        setEditandoId(modalComentarioId);
                        setNovoTexto(texto);
                        setModalVisible(false);
                      }}
                    >
                      <Text style={styles.menuText}>Editar</Text>
                    </TouchableOpacity>
                  )}

                {/* Reter - apenas admin */}
              {isAdmin && !comentarios.find(c => c.id === modalComentarioId)?.hidden && (
  <TouchableOpacity
    style={styles.menuButton}
    onPress={() => {
      reterComentario(modalComentarioId);
      setModalVisible(false);
    }}
  >
    <Text style={styles.menuText}>Reter</Text>
  </TouchableOpacity>
)}

                {isAdmin && comentarios.find(c => c.id === modalComentarioId)?.hidden && (
  <TouchableOpacity
    style={styles.menuButton}
    onPress={() => {
      republicarComentario(modalComentarioId);
      setModalVisible(false);
    }}
  >
    <Text style={styles.menuText}>Republicar</Text>
  </TouchableOpacity>
)}

                {/* Excluir - autor ou admin */}
                {(comentarios.find(c => c.id === modalComentarioId)?.userId === user?.uid || isAdmin) && (
                  <TouchableOpacity
                    style={styles.menuButton}
                    onPress={() => {
                      deletarComentario(modalComentarioId);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={[styles.menuText, { color: 'red' }]}>Excluir</Text>
                  </TouchableOpacity>
                )}
              </>
            )}
          </View>
        </Modal>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16
  },
 titulo: {
  fontSize: 18,
  fontWeight: 'bold',
  marginTop: 16,
  marginBottom: 8,
  textAlign: 'center', // ✅ centraliza o texto
},

  comentario: {
    marginBottom: 12,
    backgroundColor: '#f1f1f1',
    padding: 10,
    borderRadius: 8
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4
  },
  nomeData: {
    marginLeft: 8,
    flexDirection: 'column'
  },
  nome: {
    fontWeight: 'bold',
    color: 'green'
  },
  data: {
    fontSize: 10,
    color: '#888'
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ddd'
  },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#ccc'
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 4,
    padding: 8,
    backgroundColor: '#fff',
    marginBottom: 8
  },
  menuContainer: {
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 1,
    minWidth: 120,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  menuButton: {
    paddingVertical: 6,
  },
  menuText: {
    fontSize: 14,
    color: '#333',
  }
});

export default Comentarios;