import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Alert, ScrollView } from 'react-native';
import { Input, Button} from 'react-native-elements';
import { Text } from 'react-native'; 
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';
import { Picker } from '@react-native-picker/picker';
import { auth } from '../../firebase';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Image } from 'react-native';
import { Switch } from 'react-native';
import RadioForm from 'react-native-simple-radio-button';
import escolasPG from '../../assets/Data/SchoolsData.json';




export default function RegisterScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [rua, setRua] = useState('');
  const [numero, setNumero] = useState('');
  const [bairro, setBairro] = useState('');
  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [profissao, setProfissao] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const [cidades, setCidades] = useState([]);
  const [errors, setErrors] = useState({});
  const [isEstudante, setIsEstudante] = useState(false);
const [listaEscolas, setListaEscolas] = useState([]);
const [escolaSelecionada, setEscolaSelecionada] = useState('');

  const router = useRouter();

  const cidadesBaixadaSantista = [
    { id: 1, nome: 'Santos' },
    { id: 2, nome: 'São Vicente' },
    { id: 3, nome: 'Guarujá' },
    { id: 4, nome: 'Praia Grande' },
    { id: 5, nome: 'Cubatão' },
    { id: 6, nome: 'Bertioga' },
    { id: 7, nome: 'Itanhaém' },
    { id: 8, nome: 'Mongaguá' },
    { id: 9, nome: 'Peruíbe' },
  ];

  useEffect(() => {
    setEstado('SP'); // Estado fixo
    setCidades(cidadesBaixadaSantista);
  }, []);

  

  const inputStyle = {
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 8,
    paddingHorizontal: 8,
  };


  const handleRegister = async () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const nomeRegex = /^[A-Za-zÀ-ÿ\s]+$/;
    const ruaEBairroRegex = /^[A-Za-zÀ-ÿ0-9\s.,-]+$/;
  
    if (!nome.trim() || nome.trim().split(' ').length < 2 || !nomeRegex.test(nome.trim())) {
      Alert.alert('Informe seu nome completo (somente letras e espaços)');
      return;
    }
  
    if (!profissao.trim() || profissao.trim().length < 3 || !nomeRegex.test(profissao.trim())) {
      Alert.alert('Profissão inválida. Use apenas letras e espaços (mínimo 3 caracteres).');
      return;
    }
  
    if (!email.trim() || !emailRegex.test(email)) {
      Alert.alert('E-mail inválido');
      return;
    }
  
    if (!rua.trim() || !ruaEBairroRegex.test(rua.trim())) {
      Alert.alert('Rua inválida (use apenas letras, números e vírgulas)');
      return;
    }
  
    if (!numero.trim() || !/^\d+$/.test(numero.trim())) {
      Alert.alert('Número da casa deve conter apenas dígitos');
      return;
    }
  
    if (!bairro.trim() || !ruaEBairroRegex.test(bairro.trim())) {
      Alert.alert('Bairro inválido (use apenas letras, números e vírgulas)');
      return;
    }
  
    if (!cidade.trim()) {
      Alert.alert('Selecione uma cidade');
      return;
    }
  
    if (senha.length < 6) {
      Alert.alert('A senha deve ter pelo menos 6 caracteres');
      return;
    }
  
    if (senha !== confirmarSenha) {
      Alert.alert('As senhas não coincidem');
      return;
    }
  
    try {
      setLoading(true);
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;
  
     await setDoc(doc(db, "users", user.uid), {
  uid: user.uid,
  nome: nome.trim(),
  profissao: profissao.trim(),
  email: email.trim(),
  endereco: {
    rua: rua.trim(),
    numero: numero.trim(),
    bairro: bairro.trim(),
    cidade: cidade,
    estado: estado,
  },
  isEstudante: isEstudante,
  escola: isEstudante ? escolaSelecionada : null,
  createdAt: new Date()
});

      Alert.alert('Sucesso', 'Usuário registrado com sucesso!');
      router.replace('../(drawer)/conteudo/HomeScreen'); 
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', error.message);
    } finally {
      setLoading(false);
    }
  };
  
  useEffect(() => {
  if (isEstudante) {
    setListaEscolas(escolasPG);
  }
}, [isEstudante]);



  return (

  

    <ScrollView contentContainerStyle={styles.container}>
      <Text h3 style={styles.title}>Criar Conta</Text>
      <Image
  source={require('../../assets/images/registerImage.png')}
  style={styles.logo}
/>
      <Input
        placeholder="Nome completo"
        value={nome}
        onChangeText={setNome}
        inputContainerStyle={inputStyle}
      />

<Input
  placeholder="Profissão"
  value={profissao}
  onChangeText={setProfissao}
  inputContainerStyle={inputStyle}
/>

<View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
  <Switch
    value={isEstudante}
    onValueChange={setIsEstudante}
    thumbColor={isEstudante ? '#4CAF50' : '#ccc'}
    trackColor={{ false: '#ccc', true: '#A5D6A7' }}
  />
  <Text style={{ marginLeft: 10, fontSize: 16 }}>Sou estudante</Text>
</View>


{isEstudante && (
  <Picker
    selectedValue={escolaSelecionada}
    onValueChange={setEscolaSelecionada}>
    <Picker.Item label="Selecione a escola" value="" />
    {listaEscolas.map(e => (
  <Picker.Item key={e.id} label={e.nome} value={e.nome} />
))}
  </Picker>
)}


      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'material', name: 'email' }}
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
        inputContainerStyle={inputStyle}
      />

      <Text style={styles.sectionTitle}>Endereço</Text>

      <Input
        placeholder="Rua"
        value={rua}
        onChangeText={setRua}
        inputContainerStyle={inputStyle}
      />

      <View style={styles.row}>
        <View style={styles.halfInput}>
          <Input
            placeholder="Número"
            value={numero}
            onChangeText={setNumero}
            keyboardType="numeric"
            inputContainerStyle={inputStyle}
          />
        </View>
        <View style={[styles.halfInput, { marginRight: 0, marginLeft: 8 }]}>
          <Input
            placeholder="Bairro"
            value={bairro}
            onChangeText={setBairro}
            inputContainerStyle={inputStyle}
          />
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.halfInput}>
          <Text style={styles.label}>Estado</Text>
          <Input
            value="São Paulo (SP)"
            disabled
            inputContainerStyle={inputStyle}
          />
        </View>

        <View style={styles.halfInput}>
          <Text style={styles.label}>Cidade</Text>
          <View style={styles.pickerContainer}>
            <Picker
              selectedValue={cidade}
              onValueChange={setCidade}
              enabled={estado !== ''}
              style={styles.picker}
              dropdownIconColor="#4CAF50"
            >
              <Picker.Item label="Selecione uma cidade" value="" />
              {cidades.map((city) => (
                <Picker.Item key={city.id} label={city.nome} value={city.nome} />
              ))}
            </Picker>
          </View>
        </View>
      </View>

      <Input
        placeholder="Senha"
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
        inputContainerStyle={inputStyle}
      />

      <Input
        placeholder="Repetir senha"
        leftIcon={{ type: 'material', name: 'lock' }}
        secureTextEntry
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        inputContainerStyle={inputStyle}
      />

    <Button
  title="Registrar"
  loading={loading}
  onPress={handleRegister}
  containerStyle={styles.button}
  buttonStyle={styles.greenButton}
  titleStyle={styles.buttonTitle}
  activeOpacity={0.7}
/>

<Button
        title="Voltar ao login"
        type="clear"
        onPress={() => router.push('./loginScreen')}
        titleStyle={styles.buttonLogin}
      />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    paddingBottom: 32,
  },
  title: {
    textAlign: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    marginTop: 16,
    fontSize: 16,
    fontWeight: '600',
    color: '#444',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfInput: {
    flex: 1,
    marginRight: 8,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#4CAF50',
    borderRadius: 8,
    marginTop: 2,
    minHeight: 20,         // Altura mínima suficiente
    paddingHorizontal: 8,  // Espaço interno lateral
     backgroundColor: '#F2F2F2',
  },
  picker: {
    color: '#333',
    backgroundColor: '#F2F2F2',
    borderColor: '#4CAF50', // Verde
  },
  label: {
    marginBottom: 4,
    fontSize: 14,
    fontWeight: '500',
  },
  greenButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 12,
  },
  
  buttonTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  
  button: {
    marginTop: 16,
  },
  
  buttonLogin: {
    color: '#4CAF50',
  },
  

  logo:{ width: 300, height: 210, alignSelf: 'center', marginVertical: 20 },




});