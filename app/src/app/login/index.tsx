import React from 'react';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import InputComponent from '../../components/InputComponent/index';
import ButtonComponent from '../../components/ButtonComponent/index';
import ImageComponent from '../../components/LogoComponent';
import {
  Container,
  ContentHeader,
  ContentBody,
  Title,
  Description,
} from '../login/styles';

export default function Login() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <Container>
        <ContentHeader>
          <ImageComponent></ImageComponent>
          <Title>FocusSands</Title>
        </ContentHeader>

        <ContentBody>
          <Description>Login</Description>
          <InputComponent placeholder=""></InputComponent>

          <Description>Senha</Description>
          <InputComponent placeholder=""></InputComponent>

          <ButtonComponent
            onPress={() => router.push({ pathname: '/(tabs)' })}
            title="Entrar"
          />
        </ContentBody>

        {/* Link para a tela de registro */}
        <Link href="/register">
          <Description
            style={{
              color: '#ffffff',
              fontSize: 17,
              textDecorationLine: 'underline',
            }}
          >
            Não tem uma conta? Crie uma agora!
          </Description>
        </Link>
      </Container>
    </SafeAreaView>
  );
}
