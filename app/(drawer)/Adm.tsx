// app/(drawer)/profile.tsx
import React from 'react';
import { View } from 'react-native';
import ProfileAdm from '../Adm/PerfilAdm';

import { useNavigation } from 'expo-router';

export const screenOptions = {
  drawerLabel: 'Perfil',
};

export default function WrappedProfileAdmScreen() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <ProfileAdm />
    </View>
  );
}