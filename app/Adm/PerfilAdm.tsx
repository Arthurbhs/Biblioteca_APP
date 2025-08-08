import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, Image, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { auth, db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import CustomHeader from '@/src/components/Header';


export default function AdminProfileScreen() {
  const [editando, setEditando] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [usuario, setUsuario] = useState(null);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [avatar, setAvatar] = useState<string>('');

  useEffect(() => {
    const carregarDados = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const docRef = doc(db, 'admins', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUsuario(user);
          setNome(data.nomeCompleto || '');
          setEmail(data.email || '');
          setRua(data.endereco?.rua || '');
          setNumero(data.endereco?.numero || '');
          setBairro(data.endereco?.bairro || '');
          setCidade(data.endereco?.cidade || '');
          setAvatar(data.avatarBase64 || '');
        }
      } catch (error) {
        Alert.alert('Erro ao carregar dados', error instanceof Error ? error.message : String(error));
      }
    };

    carregarDados();
  }, []);


const pickImage = async () => {
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 1,
    allowsEditing: true,
  });

  if (!result.canceled) {
    const selected = result.assets[0];

    if (Platform.OS !== 'web') {
      const fileInfo = await FileSystem.getInfoAsync(selected.uri);
      const sizeMB = fileInfo.size / (1024 * 1024);

      if (sizeMB > 5) {
        Alert.alert('Imagem muito grande', 'Escolha uma imagem com até 5MB.');
        return;
      }
    }

    // Se estiver na web, ignoramos a verificação do tamanho
    setAvatar(selected.uri);

  }
};


  const salvarAlteracoes = async () => {
    if (!usuario) return;

    try {
      setCarregando(true);
      await setDoc(doc(db, 'admins', usuario.uid), {
        uid: usuario.uid,
        nomeCompleto: nome.trim(),
        email: email.trim(),
        avatarBase64: avatar || null,
        endereco: {
          rua: rua.trim(),
          numero: numero.trim(),
          bairro: bairro.trim(),
          cidade: cidade.trim(),
        },
        updatedAt: new Date(),
      });

      Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
      setEditando(false);
    } catch (error) {
      Alert.alert('Erro ao salvar', error instanceof Error ? error.message : String(error));
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <CustomHeader />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.avatarContainer}>
          {avatar ? (
            <Image source={{ uri: avatar }} style={styles.avatar} />
          ) : (
            <View style={styles.placeholderAvatar} />
          )}
          {editando && (
            <Button
              title="Escolher Avatar"
              type="outline"
              onPress={pickImage}
              buttonStyle={styles.botaoAvatar}
              titleStyle={{ color: '#4CAF50' }}
            />
          )}
        </View>

        <TextInput
          style={[
            styles.input,
            editando ? { borderWidth: 1 } : styles.nomeInput,
          ]}
          placeholder="Nome"
          value={nome}
          onChangeText={setNome}
          editable={editando}
        />

        <TextInput
          style={[styles.input, editando ? { borderWidth: 1 } : styles.emailInput]}
          placeholder="Email"
          value={email}
          editable={false}
        />

        {editando && (
          <>
            <TextInput style={styles.input} placeholder="Rua" value={rua} onChangeText={setRua} />
            <TextInput style={styles.input} placeholder="Número" value={numero} onChangeText={setNumero} keyboardType="numeric" />
            <TextInput style={styles.input} placeholder="Bairro" value={bairro} onChangeText={setBairro} />
            <TextInput style={styles.input} placeholder="Cidade" value={cidade} onChangeText={setCidade} />
          </>
        )}

        {editando ? (
          <Button title={carregando ? 'Salvando...' : 'Salvar'} onPress={salvarAlteracoes} buttonStyle={styles.botao} disabled={carregando} />
        ) : (
          <Button title="Editar" onPress={() => setEditando(true)} buttonStyle={styles.botao} />
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  input: {
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
  nomeInput: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  emailInput: {
    fontSize: 14,
    color: '#777',
    textAlign: 'center',
    marginBottom: 20,
  },
  botao: {
    backgroundColor: '#4CAF50',
    marginTop: 10,
  },
  avatarContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  placeholderAvatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: '#ccc',
  },
  botaoAvatar: {
    marginTop: 10,
    borderColor: '#4CAF50',
  },
});
