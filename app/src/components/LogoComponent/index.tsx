import React from 'react';
import { Image, StyleSheet } from 'react-native';

const MyImageComponent = () => {
  return (
    <Image
      source={require('../../../assets/logo-img.png')} // Importa a imagem localmente
      style={styles.image}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // Deixa a imagem circular
  },
});

export default MyImageComponent;
