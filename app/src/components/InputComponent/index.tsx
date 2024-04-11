import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

interface InputProps {
  placeholder?: string;
}
const InputComponent: React.FC<InputProps> = ({ placeholder }) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 43,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#83BDFF',
    marginBottom: 10,
    backgroundColor: '#F0EBEB',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#014BA0',
  },
});

export default InputComponent;
