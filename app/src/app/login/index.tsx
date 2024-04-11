import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { Link } from 'expo-router';
import ImageComponent from '../../components/LogoComponent';
import { ContentHeader, Title, ContentFooter } from './styles';
import { useSession } from '../../shared/providers/ctx';
import { LayoutPageExternal } from '../../components/global/LayoutExternal';
import { Form } from '../../components/Form';
import { Button, TextInput } from 'react-native-paper';

export default function Login() {
  const router = useRouter();
  const { signIn } = useSession();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleLogin() {
    signIn();
    router.push({ pathname: '/(tabs)' });
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
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          label="Senha"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <Button
          icon="login"
          mode="contained"
          textColor="#FFF"
          onPress={() => handleLogin()}
        >
          Entrar
        </Button>
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
