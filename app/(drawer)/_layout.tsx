// app/(drawer)/_layout.tsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home';
import PerfilScreen from './Profile'; // ou './index' se estiver usando a tela principal como index
import CustomDrawerContent from "../../src/components/CustomDrawerContent"
import FiltroScreen from "../conteudo/LivrosFiltrados"
const Drawer = createDrawerNavigator();

export default function Layout() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: { backgroundColor: '#2e7d32' },
        drawerActiveTintColor: '#000',
        drawerInactiveTintColor: '#fff',
        drawerActiveBackgroundColor: '#ffeb3b',
        drawerItemStyle: { borderRadius: 0, margin: 0 },
        drawerLabelStyle: { fontWeight: 'bold' },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="index" component={HomeScreen} options={{ title: 'Início' }} />
      <Drawer.Screen name="profile" component={PerfilScreen} options={{ title: 'Perfil' }} />
       <Drawer.Screen name="Filtro" component={FiltroScreen} options={{ title: '' }} />
  
      {/* Adicione outras telas se quiser */}
    </Drawer.Navigator>
  );
}