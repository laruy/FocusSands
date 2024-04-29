import { useState } from 'react';
import { Button, Text, TextInput } from 'react-native-paper';
import { TextInputMask } from 'react-native-masked-text';
import { View, StyleSheet } from 'react-native';
import { LayoutPage } from '../../../components/global/Layout';
import { Form } from '../../../components/Form';
import StyledButton from '../../../components/Button';

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
    <LayoutPage>
      <Form>
        <TextInput
          label="No que está trabalhando?"
          value={title}
          onChangeText={(text) => setTitle(text)}
        />

        <TextInput
          label="Descrição"
          value={description}
          multiline
          onChangeText={(text) => setDescription(text)}
        />
      </Form>

      <View style={styles.timeContainer}>
        <Text variant="labelLarge" style={{ color: '#FFF' }}>
          Tempo:
        </Text>
        <TextInputMask
          style={styles.timeInput}
          placeholder="00:00"
          type="datetime"
          options={{
            format: 'mm:ss',
          }}
          value={time}
          onChangeText={(text) => setTime(text)}
        />
        <Text variant="labelLarge" style={{ color: '#FFF' }}>
          Minutos
        </Text>
      </View>

      <View style={{ paddingTop: 22 }}>
        <StyledButton
          icon="clock-plus-outline"
          onPress={() => handleSave()}
        >
          Adicionar Tarefa
        </StyledButton>
      </View>
    </LayoutPage>
  );
};

const styles = StyleSheet.create({
  timeContainer: {
    flexDirection: 'row', // Display items horizontally
    justifyContent: 'space-between', // Create space between items
    alignItems: 'center', // Center items vertically
  },
  timeInput: {
    width: 80,
    height: 43,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#83BDFF',
    margin: 10,
    backgroundColor: '#F0EBEB',
    color: '#014BA0',
    textAlign: 'center', // Center text horizontally
  },
});

export default Index;
