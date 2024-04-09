import React from 'react';
import { SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import InputComponent from '../../../components/InputComponent/index';
import ButtonComponent from '../../../components/ButtonComponent/index';
import ImageComponent from '../../../components/LogoComponent';
import {
  Container,
  ContentHeader,
  ContentBody,
  Title,
  Description,
} from './styles';

export default function Login() {
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

          <Link href="/(tabs)">
            <ButtonComponent title="Entrar" />
          </Link>
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
