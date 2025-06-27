import React from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import  ImageCarousel from '../../src/components/CarrosselAvaliacao';
import  CarouselDate from '../../src/components/CarrosselData';
import { useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import Historia from "../../src/components/Sessoes"

const images = [
  require('../../assets/images/1.png'),
  require('../../assets/images/2.png'),
  require('../../assets/images/3.png'),
];


export default function HomeScreen() {


const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/heroImg.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>Melhor Avaliados</Text>
      <ImageCarousel />
        <Text style={styles.title}>Recentemente adicionados</Text>
      <CarouselDate/>
      <Historia/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  imageContainer: {
    width: '100%',
    height: 300,
    backgroundColor: '#ffffff',
  },
  image: {
    width: '100%',
    height: '100%',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 16,
    color: '#333',
  },
  
});