import React from 'react';
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
          <InputComponent></InputComponent>

          <Description>Senha</Description>
          <InputComponent></InputComponent>

          <ButtonComponent title="Entrar"></ButtonComponent>
        </ContentBody>

        {/* Link para a tela de registro */}
        <Link href="/register">
          <Description
            style={{
              textDecorationLine: 'underline',
              color: '#ffffff',
              fontSize: 17,
            }}
          >
            Não tem uma conta? Crie uma agora!
          </Description>
        </Link>
      </Container>
    </SafeAreaView>
  );
}
