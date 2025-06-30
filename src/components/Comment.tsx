import React, { useState, useEffect } from 'react';
import {
  Text, TextInput, Button, View, FlatList,
  StyleSheet, Image, TouchableOpacity
} from 'react-native';
import {
  collection, query, where, orderBy,
  onSnapshot, addDoc, serverTimestamp, doc,
  getDoc, Timestamp
} from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth';
import { useRouter } from 'expo-router';


interface Comentario {
  id: string;
  texto: string;
  userId: string;
  userEmail: string;
  nome: string;
  avatar: string;
  createdAt: Timestamp | null;
}

interface ComentariosProps {
  livroId: string;
}

const Comentarios: React.FC<ComentariosProps> = ({ livroId }) => {
  const [comentarios, setComentarios] = useState<Comentario[]>([]);
  const [comentario, setComentario] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });
    return () => unsubscribe();
  }, []);

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
          const userRef = doc(db, 'users', data.userId);
          const userSnap = await getDoc(userRef);

          const nome = userSnap.exists() ? userSnap.data().nome : 'Anônimo';
          const avatar = userSnap.exists() ? userSnap.data().avatarBase64 : '';

          return {
            id: docSnap.id,
            texto: data.texto,
            userId: data.userId,
            userEmail: data.userEmail,
            nome,
            avatar,
            createdAt: data.createdAt ?? null
          };
        })
      );
      setComentarios(lista);
    });

    return () => unsubscribe();
  }, [livroId]);

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
        avatar,
        createdAt: serverTimestamp()
      });

      setComentario('');
    } catch (error) {
      console.error('Erro ao enviar comentário: ', error);
    }
  };

  const formatarData = (data: Timestamp | null) => {
    if (!data) return '';
    const date = data.toDate();
    const dia = String(date.getDate()).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    const horas = String(date.getHours()).padStart(2, '0');
    const minutos = String(date.getMinutes()).padStart(2, '0');
    return `${dia}/${mes}/${ano} - ${horas}:${minutos}`;
  };

  const navegarParaPerfil = (userId: string) => {
    if (!user) return;
    if (user.uid === userId) {
      router.push('/perfil/profileScreen');
    } else {
      router.push(`/perfil/${userId}`);
    }
  };

  const renderItem = ({ item }: { item: Comentario }) => (
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
          <TouchableOpacity onPress={() => navegarParaPerfil(item.userId)}>
            <Text style={styles.nome}>{item.nome}</Text>
          </TouchableOpacity>
          <Text style={styles.data}>{formatarData(item.createdAt)}</Text>
        </View>
      </View>
      <Text>{item.texto}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Comentários</Text>
      <FlatList
        data={comentarios}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        placeholder="Escreva um comentário"
        value={comentario}
        onChangeText={setComentario}
        style={styles.input}
      />
      <Button title="Enviar" onPress={enviarComentario} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
    paddingHorizontal: 16
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8
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
    marginTop: 8,
    marginBottom: 8
  }
});

export default Comentarios;
