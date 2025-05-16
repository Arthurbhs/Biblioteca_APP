// app/(drawer)/_layout.tsx
import React from 'react';
import { Drawer } from 'expo-router/drawer';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { View } from 'react-native';
import { auth } from '../../firebase'; // ajuste o caminho se necessário

export default function Layout() {
  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#2e7d32',
        },
        drawerContentContainerStyle: {
          padding: 0,
        },
        drawerActiveTintColor: '#000000',
        drawerInactiveTintColor: '#ffffff',
        drawerActiveBackgroundColor: '#ffeb3b',
        drawerItemStyle: {
          borderRadius: 0,
          margin: 0,
        },
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    />
  );
}

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />

      <View style={{ marginTop: 10, borderTopWidth: 1, borderTopColor: '#ccc' }} />

      <DrawerItem
        label="Sair"
        labelStyle={{ color: '#ffffff', fontWeight: 'bold' }}
        onPress={async () => {
          try {
            await auth.signOut();
            props.navigation.reset({
              index: 0,
             routes: [{ name: 'autentificacao/loginScreen' }],
            });
          } catch (error) {
            console.error('Erro ao deslogar:', error);
          }
        }}
      />
    </DrawerContentScrollView>
  );
}
