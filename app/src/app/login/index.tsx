import React, { useState } from 'react';
import { Link } from 'expo-router';
import ImageComponent from '../../components/LogoComponent';
import { ContentHeader, Title, ContentFooter } from './styles';
import { useSession } from '../../shared/providers/ctx';
import { LayoutPageExternal } from '../../components/global/LayoutExternal';
import { Form } from '../../components/Form';
import { Button, TextInput } from 'react-native-paper';
import StyledButton from '../../components/Button';
import { Keyboard } from 'react-native';

export default function Login() {
  const { signIn } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleBlur = () => {
    Keyboard.dismiss();
  };

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
          inputMode="email"
          value={email}
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          onBlur={handleBlur}
        />

        <TextInput
          secureTextEntry
          label="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onBlur={handleBlur}
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
