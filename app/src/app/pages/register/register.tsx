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
  ContentFooter,
  Title,
  Description
 } from '../login/styles'

export default function Register() {
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
            <InputComponent></InputComponent>

            <Description>Senha</Description>
            <InputComponent></InputComponent>

            <Description>Confirmar senha</Description>
            <InputComponent></InputComponent>

            <ButtonComponent title='Cadastrar'></ButtonComponent>
            {/* Link para a tela de registro */}
            <TouchableOpacity onPress={() => navigation.navigate('pages/login/login')}>
              <Description style={{ textDecorationLine: 'underline' }}>Já possui uma conta?</Description>
            </TouchableOpacity>
          </ContentBody>
          <ContentFooter>
            
          </ContentFooter>
        </Container>
      </SafeAreaView>
  )
}
