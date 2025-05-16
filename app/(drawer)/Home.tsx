// app/(drawer)/profile.tsx
import React from 'react';
import { View } from 'react-native';
import Home from '../conteudo/HomeScreen';
import Header from '../../src/components/Header'; // ajuste o caminho conforme sua estrutura
import { useNavigation } from 'expo-router';

export const screenOptions = {
  drawerLabel: 'Home',
};

export default function WrappedHomeScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Home />
    </View>
  );
}
