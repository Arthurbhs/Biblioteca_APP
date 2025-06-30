import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet } from 'react-native';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import CustomHeader from '@/src/components/Header';

export default function PerfilUsuario() {
  const { id } = useLocalSearchParams();
  const [dados, setDados] = useState<any>(null);

  useEffect(() => {
    const carregar = async () => {
      const snap = await getDoc(doc(db, 'users', String(id)));
      if (snap.exists()) setDados(snap.data());
    };
    carregar();
  }, [id]);

  if (!dados) return <Text>Carregando...</Text>;

  return (
    <><CustomHeader/>
    <View style={styles.container}>
      {dados.avatarBase64 && (
        <Image source={{ uri: dados.avatarBase64 }} style={styles.avatar} />
      )}
      <Text style={styles.nome}>{dados.nome}</Text>
      <Text style={styles.email}>{dados.email}</Text>
      {/* Adicione outros dados públicos aqui, como bio, cidade, etc. */}
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  nome: { fontSize: 20, fontWeight: 'bold' },
  email: { fontSize: 16, color: '#666' }
});
