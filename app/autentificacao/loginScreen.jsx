import React, { useState } from 'react';
import { View, StyleSheet, Alert, Image } from 'react-native';
import { Input, Button} from 'react-native-elements';
import { Text } from 'react-native'; 
import { auth } from '../../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'expo-router';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async () => {
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      Alert.alert('Login realizado com sucesso!');
      router.push('../(drawer)/Home');
    } catch (error) {
      Alert.alert('Erro no login', error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/loginImage.png')} style={styles.image} />
      <Text h3 style={styles.title}>Bem-vindo à Biblioteca</Text>

      <Input
        placeholder="E-mail"
        leftIcon={{ type: 'material', name: 'email', color: 'green' }}
        inputStyle={{ color: 'green' }}
        placeholderTextColor="green"
        autoCapitalize="none"
        onChangeText={setEmail}
        value={email}
      />

      <Input
        placeholder="Senha"
        leftIcon={{ type: 'material', name: 'lock', color: 'green' }}
        inputStyle={{ color: 'green' }}
        placeholderTextColor="green"
        secureTextEntry
        onChangeText={setSenha}
        value={senha}
      />

      <Button
        title="Entrar"
        loading={loading}
        onPress={handleLogin}
        containerStyle={styles.button}
        buttonStyle={{ backgroundColor: 'green' }}
      />

      <Button
        title="Criar conta"
        type="clear"
        titleStyle={{ color: 'green' }}
        onPress={() => router.push('./registersScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    marginTop: 20,
  },
});
