import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { View, Text, TouchableOpacity, Image, StyleSheet, ActivityIndicator, ScrollView } from 'react-native';

type Livro = {
  id: number;
  titulo: string;
  capa: string;
  mostruario: string;
  dataCatalogo: string;
 tema: string;
  genero: string;
};


type LivroButtonProps = {
  livro: Livro;
  onPress: () => void;
};



 const LivroButton = ({ livro }: LivroButtonProps) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={() => router.push(`/livros/${livro.id}`)}
    >
     <Image source={{ uri: livro.capa }}   style={styles.image} resizeMode="cover" />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{livro.titulo}</Text>
      </View>
    </TouchableOpacity>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    marginBottom: 8,
    color: '#333',
  },
  button: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    width: 160, // largura do card
    margin: 8,
  },
  image: {
    width: '100%',
    aspectRatio: 0.8, // largura > altura
    borderRadius: 8,
  },
  titleContainer: {
    width: '100%',
    marginTop: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    flexWrap: 'wrap',
  },

});
export default LivroButton;