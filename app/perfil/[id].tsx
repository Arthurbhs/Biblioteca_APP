import { useLocalSearchParams } from 'expo-router';
import { View, Text, Image, StyleSheet, Modal, Pressable } from 'react-native';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { doc, getDoc } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import CustomHeader from '@/src/components/Header';

export default function PerfilUsuario() {
  const { id } = useLocalSearchParams();
  const [dados, setDados] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (usuarioLogado) => {
      if (usuarioLogado) {
        const snap = await getDoc(doc(db, 'users', String(id)));
        if (snap.exists()) setDados(snap.data());

        const snapLogado = await getDoc(doc(db, 'users', usuarioLogado.uid));
        if (snapLogado.exists()) {
          const dadosLogado = snapLogado.data();
          setIsAdmin(dadosLogado.administrator === true);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [id]);

  if (loading) return <Text>Carregando...</Text>;
  if (!dados) return <Text>Usuário não encontrado</Text>;

  return (
    <>
      <CustomHeader />
      <View style={styles.container}>
        {dados.avatarBase64 && (
          <Image source={{ uri: dados.avatarBase64 }} style={styles.avatar} />
        )}
        <Text style={styles.nome}>{dados.nome}</Text>
        <Text style={styles.email}>{dados.email}</Text>

        {/* Botão para abrir modal se for admin */}
        {isAdmin && (
          <Pressable
            style={styles.botao}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.botaoTexto}>Ver dados sensíveis</Text>
          </Pressable>
        )}

        {/* Modal */}
        <Modal
          transparent={true}
          visible={modalVisible}
          animationType="fade"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitulo}>Dados Sensíveis</Text>
              {dados.endereco && (
                <>
                  <Text>Rua: {dados.endereco.rua}</Text>
                  <Text>Número: {dados.endereco.numero}</Text>
                  <Text>Bairro: {dados.endereco.bairro}</Text>
                  <Text>Cidade: {dados.endereco.cidade}</Text>
                  <Text>Estado: {dados.endereco.estado}</Text>
                </>
              )}
              {dados.profissao && <Text>Profissão: {dados.profissao}</Text>}
              {dados.escola && <Text>Escola: {dados.escola}</Text>}
              <Text>Estudante: {dados.isEstudante ? 'Sim' : 'Não'}</Text>

              <Pressable
                style={[styles.botao, { marginTop: 15, backgroundColor: '#c0392b' }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.botaoTexto}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 12 },
  nome: { fontSize: 20, fontWeight: 'bold' },
  email: { fontSize: 16, color: '#666' },

  botao: {
    backgroundColor: '#2c3e50',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 15,
  },
  botaoTexto: { color: '#fff', fontWeight: 'bold' },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center'
  },
  modalTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15
  }
});
