import React from 'react'
import { SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import InputComponent from '../../../components/InputComponent/index'
import ButtonComponent from '../../../components/ButtonComponent/index'
import ImageComponent from '../../../components/LogoComponent'
import { useNavigation } from '@react-navigation/native'; 
import {
  Container,
  ContentHeader,
  ContentBody,
  Title,
  Description
} from './styles';

export default function Login() {
  const navigation = useNavigation(); // Inicialize o hook useNavigation
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

          <ButtonComponent onPress={() => navigation.navigate('/(tabs)')} title='Entrar'></ButtonComponent>
        </ContentBody>

        {/* <Link href={'/(tabs)'} style={{ color: '#ffffff',  fontSize: 17}}>Não tem uma conta?</Link> */}

          {/* Link para a tela de registro */}
          <TouchableOpacity onPress={() => navigation.navigate('pages/register/register')}>
            <Description style={{ textDecorationLine: 'underline' }}>Não tem uma conta? Crie uma agora!</Description>
          </TouchableOpacity>

      </Container>
    </SafeAreaView>
  );
}
