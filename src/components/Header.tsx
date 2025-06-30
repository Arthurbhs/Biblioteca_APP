import React, { useState, useCallback } from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { DrawerActions, NavigationProp, useNavigation, useFocusEffect } from '@react-navigation/native';
import { usePathname, router } from 'expo-router';
import Busca from './Busca';

const CustomHeader = () => {
  const pathname = usePathname(); // Ex: '/', '/profile', '/livros/12'
  const navigation = useNavigation<NavigationProp<any>>();

  const [mostrarMenu, setMostrarMenu] = useState(true);

  // Atualiza o estado toda vez que a tela é focada
  useFocusEffect(
    useCallback(() => {
      setMostrarMenu(pathname === '/' || pathname === '/profile');
    }, [pathname])
  );

  const abrirDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  const voltar = () => {
    router.back();
  };

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {mostrarMenu ? (
          <TouchableOpacity onPress={abrirDrawer} style={styles.menuIcon}>
            <Ionicons name="menu" size={28} color="#2e7d32" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={voltar} style={styles.menuIcon}>
            <Ionicons name="arrow-back" size={28} color="#2e7d32" />
          </TouchableOpacity>
        )}
        <Image
          source={require('../../assets/images/textLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <View style={styles.rightContainer}>
        <Busca />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#2e7d32',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
    paddingHorizontal: 12,
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  rightContainer: {
    alignItems: 'flex-end',
  },
  menuIcon: {
    marginRight: 12,
  },
  logo: {
    height: 80,
    width: 120,
  },
});

export default CustomHeader;
