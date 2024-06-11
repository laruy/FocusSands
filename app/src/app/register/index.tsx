import React, { useState } from 'react';
import { Link } from 'expo-router';
import ImageComponent from '../../components/LogoComponent';
import { ContentHeader, ContentFooter, Title } from '../login/styles';
import { LayoutPageExternal } from '../../components/global/LayoutExternal';
import { Button, TextInput } from 'react-native-paper';
import { Form } from '../../components/Form';
import StyledButton from '../../components/Button';
import { useSession } from '../../shared/providers/ctx';

export default function Register() {
  const { signUp } = useSession();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleRegister() {
    signUp({
      name,
      email,
      password,
    });
  }

  return (
    <LayoutPageExternal>
      <ContentHeader>
        <ImageComponent />
        <Title>FocusSands</Title>
      </ContentHeader>

      <Form>
        <TextInput
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          inputMode="email"
          autoCapitalize="none"
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          label="Senha"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <StyledButton icon="check" onPress={handleRegister}>
          Cadastrar
        </StyledButton>
      </Form>

      <ContentFooter>
        <Link href="/login" style={{ alignSelf: 'flex-end' }}>
          <Button
            mode="text"
            textColor="#FFF"
            labelStyle={{ textDecorationLine: 'underline' }}
          >
            Já possui uma conta?
          </Button>
        </Link>
      </ContentFooter>
    </LayoutPageExternal>
  );
}
