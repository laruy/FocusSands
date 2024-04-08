import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputComponent = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="..." />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: 43,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#83BDFF',
    marginBottom: 10,
    backgroundColor: '#F0EBEB'
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
});

export default InputComponent;
