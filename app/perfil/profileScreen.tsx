import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, Alert, ScrollView, Image } from 'react-native';
import { Button } from 'react-native-elements';
import { auth, db } from '../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { Platform } from 'react-native'; // já que vamos precisar
import * as ImagePicker from 'expo-image-picker';
import * as FileSystem from 'expo-file-system';
import CustomHeader from '@/src/components/Header';
import LivrosReservados from "../../src/components/ReserveBook"
import { User } from 'firebase/auth';
import ButtonExel from "../../src/components/ButtonExel"
import Table from "../../src/components/ReservaTable"
import { useRouter } from "expo-router"; // 👈 importar





export default function ProfileScreen() {
  const [editando, setEditando] = useState(false);
  const [carregando, setCarregando] = useState(false);
  const [usuario, setUsuario] = useState<User | null>(null);
  const [nome, setNome] = useState('');
  const [profissao, setProfissao] = useState('');
  const [email, setEmail] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [estado, setEstado] = useState('');
  const [avatar, setAvatar] = useState<string>('');
  const [isAdmin, setIsAdmin] = useState(false); // <-- novo estado
const [mostrar, setMostrar] = useState<"reservas" | "tabela">("reservas");
  const router = useRouter(); // 👈 inicializar



  useEffect(() => {
    const carregarDados = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const docRef = doc(db, 'users', user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUsuario(user);
          setNome(data.nome || '');
          setProfissao(data.profissao || '');
          setEmail(data.email || '');
          setRua(data.endereco?.rua || '');
          setNumero(data.endereco?.numero || '');
          setBairro(data.endereco?.bairro || '');
          setCidade(data.endereco?.cidade || '');
          setEstado(data.endereco?.estado || '');
          setAvatar(data.avatarBase64 || '');
          setIsAdmin(data.administrator === true); // <-- pega se é admin
        }
      } catch (error) {
        Alert.alert('Erro ao carregar dados', error instanceof Error ? error.message : String(error));
      }
    };
  
    carregarDados();
  }, []);



 const pickImage = async () => {
  const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
  if (!permission.granted) {
    Alert.alert('Permissão necessária', 'Precisamos de acesso à galeria.');
    return;
  }

    const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    allowsEditing: true,
    aspect: [1, 1],
    quality: 0.7,
    base64: true, // necessário para salvar no Firestore
  });

    if (!result.canceled) {
    const selected = result.assets[0];

    if (Platform.OS !== 'web') {
      const fileInfo = await FileSystem.getInfoAsync(selected.uri);
      if (!fileInfo.exists) {
        Alert.alert('Erro', 'Arquivo não encontrado.');
        return;
      }

      const sizeMB = fileInfo.size / (1024 * 1024);
      if (sizeMB > 5) {
        Alert.alert('Imagem muito grande', 'Escolha uma imagem com até 5MB.');
        return;
      }
    } else {
      console.log('Rodando no web — pulando verificação de FileSystem.');
    }

    // salvar imagem em base64
    if (selected.base64) {
      const base64Uri = `data:image/jpeg;base64,${selected.base64}`;
      setAvatar(base64Uri);
    }
  }
};

  const salvarAlteracoes = async () => {
  if (!usuario) return;

  try {
    setCarregando(true);

    await setDoc(
      doc(db, 'users', usuario.uid),
      {
        uid: usuario.uid,
        nome: nome.trim(),
        profissao: profissao.trim(),
        email: email.trim(),
        avatarBase64: avatar || null,
        endereco: {
          rua: rua.trim(),
          numero: numero.trim(),
          bairro: bairro.trim(),
          cidade: cidade.trim(),
          estado: estado.trim(),
        },
        administrator: isAdmin, // 🔑 mantém o valor
        updatedAt: new Date(),
      },
      { merge: true } // 🔑 não sobrescreve campos que não estiverem aqui
    );

    Alert.alert('Sucesso', 'Dados atualizados com sucesso!');
    setEditando(false);
  } catch (error) {
    Alert.alert('Erro ao salvar', error instanceof Error ? error.message : String(error));
  } finally {
    setCarregando(false);
  }
};


return (
   <><CustomHeader/>
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
    editando
      ? { borderWidth: 1, textAlign: 'left', fontSize: 16, fontWeight: 'normal' }
      : styles.nomeInput,
  ]}
  placeholder="Nome"
  value={nome}
  onChangeText={setNome}
  editable={editando}
/>

<TextInput
  style={[
    styles.input,
    editando
      ? { borderWidth: 1, textAlign: 'left', fontSize: 16, fontStyle: 'normal' }
      : styles.profissaoInput,
  ]}
  placeholder="Profissão"
  value={profissao}
  onChangeText={setProfissao}
  editable={editando}
/>

<TextInput
  style={[
    styles.input,
    editando
      ? { borderWidth: 1, textAlign: 'left', fontSize: 16, color: '#000' }
      : styles.emailInput,
  ]}
  placeholder="Email"
  value={email}
  editable={false}
/>

{editando && (
  <>
      <TextInput  style={[styles.input, editando && { borderWidth: 1 }]} placeholder="Rua" value={rua} onChangeText={setRua} editable={editando} />
      <TextInput  style={[styles.input, editando && { borderWidth: 1 }]} placeholder="Número" value={numero} onChangeText={setNumero} editable={editando} keyboardType="numeric" />
      <TextInput  style={[styles.input, editando && { borderWidth: 1 }]} placeholder="Bairro" value={bairro} onChangeText={setBairro} editable={editando} />
      <TextInput  style={[styles.input, editando && { borderWidth: 1 }]} placeholder="Cidade" value={cidade} onChangeText={setCidade} editable={editando} />
      <TextInput  style={[styles.input, editando && { borderWidth: 1 }]} placeholder="Estado" value={estado} onChangeText={setEstado} editable={editando} />
 </> )} 
      {editando ? (
        <Button title={carregando ? 'Salvando...' : 'Salvar'} onPress={salvarAlteracoes} buttonStyle={styles.botao} disabled={carregando} />
      ) : (
        <Button title="Editar" onPress={() => setEditando(true)} buttonStyle={styles.botao} />
        
      )}
    
        {isAdmin && (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              marginTop: 15,
            }}
          >
            <Button
              title="📚 Ver Reservas"
              onPress={() => setMostrar("reservas")}
              buttonStyle={{ backgroundColor: "#4CAF50", flex: 1, marginRight: 5 }}
            />
            <Button
              title="📊 Ver Tabela"
              onPress={() => setMostrar("tabela")}
              buttonStyle={{ backgroundColor: "#2196F3", flex: 1, marginHorizontal: 5 }}
            />
            <Button
              title="📖 Gerenciar Livros"
              onPress={() => router.push("../livros/Gerenciador")} // 👈 navega para nova página
              buttonStyle={{ backgroundColor: "#FF9800", flex: 1, marginLeft: 5 }}
            />
          </View>
        )}

        {/* Renderização condicional */}
        {isAdmin && mostrar === "reservas" && usuario && (
          <LivrosReservados uid={usuario.uid} mostrarCancelar />
        )}

        {isAdmin && mostrar === "tabela" && (
          <>
            <Table />
            <ButtonExel />
          </>
        )}

        {!isAdmin && usuario && (
          <LivrosReservados uid={usuario.uid} mostrarCancelar />
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
 container: {
  backgroundColor: '#fff',
},

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
  nomeInput: {
  fontSize: 22,
  color: "#0f1869",
  fontWeight: 'bold',
  textAlign: 'center',
   marginBottom: -17,
},

profissaoInput: {
  fontSize: 18,
  textAlign: 'center',
  fontStyle: 'italic',
  marginBottom: -17,
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