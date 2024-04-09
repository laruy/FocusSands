import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface ButtonProps {
  title: string;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: 52,
    backgroundColor: '#014BA0',
    color: '#FFFFFF',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default function ButtonComponent({ onPress, title }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}
