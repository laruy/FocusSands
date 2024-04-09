import InputComponent from "../../components/InputComponent";
import Button from "../../components/ButtonComponent"
import { TextInputMask } from 'react-native-masked-text';
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { Container } from "../pages/login/styles";

const Index = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');

  const handleSave = () => {
    // Logic to save data goes here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Time:', time);
  };

  return (
    <View style={styles.container}>
      <InputComponent 
        placeholder="No que está trabalhando?" 
        value={title} 
        onChangeText={setTitle} 
      />
      <TextInput 
        style={styles.descriptionInput} 
        placeholder="Descrição" 
        multiline 
        value={description} 
        onChangeText={setDescription} 
      />
      <View style={styles.timeContainer}>
        <Text>Tempo</Text>
        <TextInputMask
          style={styles.timeInput}
          placeholder="00:00"
          type={'datetime'}
          options={{
            format: 'mm:ss'
          }}
          value={time}
          onChangeText={setTime}
        />
        <Text>Minutos</Text>
      </View>
      <Button title="Adicionar Tarefa" onPress={handleSave} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  descriptionInput: {
    width: '90%',
    height: 150,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#83BDFF',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingTop: 10,
    backgroundColor: '#F0EBEB',
    color: '#014BA0',
  },
  timeContainer: {
    flexDirection: 'row', // Display items horizontally
    justifyContent: 'space-between', // Create space between items
    alignItems: 'center', // Center items vertically
  },
  timeInput: {
    width: '30%',
    height: 43,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#83BDFF',
    margin: 10,
    backgroundColor: '#F0EBEB',
    color: '#014BA0',
    textAlign: 'center', // Center text horizontally
  }

});

export default Index;
