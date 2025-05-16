// app/(drawer)/profile.tsx
import React from 'react';
import { View } from 'react-native';
import Profile from '../perfil/profileScreen';
import Header from '../../src/components/Header'; // ajuste o caminho conforme sua estrutura
import { useNavigation } from 'expo-router';

export const screenOptions = {
  drawerLabel: 'Perfil',
};

export default function WrappedProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <Header navigation={navigation} />
      <Profile />
    </View>
  );
}