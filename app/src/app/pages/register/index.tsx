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
  ContentFooter,
  Title,
  Description,
} from '../login/styles';

export default function Register() {
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

          <Description>Confirmar senha</Description>
          <InputComponent placeholder=""></InputComponent>

          <Link href="/(tabs)">
            <ButtonComponent title="Cadastrar" />
          </Link>

          <Link href="/login">
            <Description style={{ textDecorationLine: 'underline' }}>
              Já possui uma conta?
            </Description>
          </Link>
        </ContentBody>
        <ContentFooter></ContentFooter>
      </Container>
    </SafeAreaView>
  );
}
