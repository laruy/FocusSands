import React, { useState } from 'react';
import { Link } from 'expo-router';
import ImageComponent from '../../components/LogoComponent';
import { ContentHeader, Title, ContentFooter } from './styles';
import { useSession } from '../../shared/providers/ctx';
import { LayoutPageExternal } from '../../components/global/LayoutExternal';
import { Form } from '../../components/Form';
import { Button, TextInput } from 'react-native-paper';
import StyledButton from '../../components/Button';

export default function Login() {
  const { signIn } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    signIn({ email, password });
  }

  return (
    <LayoutPageExternal>
      <ContentHeader>
        <ImageComponent />
        <Title>FocusSands</Title>
      </ContentHeader>

      <Form>
        <TextInput
          label="E-mail"
          value={email}
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          secureTextEntry
          label="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <StyledButton icon="login" onPress={handleLogin}>
          Entrar
        </StyledButton>
      </Form>

      <ContentFooter>
        <Link href="/register" style={{ alignSelf: 'flex-end' }}>
          <Button
            mode="text"
            textColor="#FFF"
            labelStyle={{ textDecorationLine: 'underline' }}
          >
            Não tem uma conta? Crie uma agora!
          </Button>
        </Link>
      </ContentFooter>
    </LayoutPageExternal>
  );
}
