import { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { LayoutPage } from '../../../components/global/Layout';
import { useSession } from '../../../shared/providers/ctx';
import { ContainerFooter, Form } from './styles';

export default function Profile() {
  const { signOut } = useSession();

  const [name, setName] = useState('');
  const [dateNasc, setDateNasc] = useState('');
  const [sex, setSex] = useState('');

  function handleEditProfile() {
    console.log('Editar perfil');
  }

  function handleLogout() {
    signOut();
  }

  return (
    <LayoutPage>
      <Form>
        <TextInput
          label="Nome completo"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          label="Data de Nascimento"
          value={dateNasc}
          onChangeText={(text) => setDateNasc(text)}
        />

        <TextInput
          label="Sexo"
          value={sex}
          onChangeText={(text) => setSex(text)}
        />

        <Button
          icon="pencil"
          mode="contained"
          onPress={() => handleEditProfile()}
        >
          Editar
        </Button>
      </Form>

      <ContainerFooter>
        <Button
          icon="logout"
          mode="text"
          textColor="#FFF"
          onPress={() => handleLogout()}
        >
          Sair da conta
        </Button>
      </ContainerFooter>
    </LayoutPage>
  );
}
