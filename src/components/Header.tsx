import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { DrawerActions } from '@react-navigation/native';

const CustomHeader = () => {
  const navigation = useNavigation();

  const abrirDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <View style={styles.header}>
      <View style={styles.leftContainer}>
        {/* Ícone de menu */}
        <TouchableOpacity onPress={abrirDrawer} style={styles.menuIcon}>
          <Ionicons name="menu" size={28} color="#2e7d32" />
        </TouchableOpacity>

        {/* Logo à esquerda */}
        <Image
          source={require('../../assets/images/textLogo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Placeholder para manter altura */}
      <View style={{ width: 32 }} />
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
    justifyContent: 'space-between',
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
