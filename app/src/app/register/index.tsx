import React, { useState } from 'react';
import { Link, useRouter } from 'expo-router';
import ImageComponent from '../../components/LogoComponent';
import { ContentHeader, ContentFooter, Title } from '../login/styles';
import { LayoutPageExternal } from '../../components/global/LayoutExternal';
import { Button, TextInput } from 'react-native-paper';
import { Form } from '../../components/Form';
import StyledButton from '../../components/Button';

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
          label="E-mail"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          label="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TextInput
          label="Confirmar Senha"
          value={confirmPassword}
          onChangeText={(text) => setConfirmPassword(text)}
        />

        <StyledButton
          icon="check"
          onPress={() => router.back()}
        >
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
