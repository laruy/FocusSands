import { useState } from 'react';
import { Button, TextInput, Card, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { LayoutPage } from '../../../components/global/Layout';
import { useSession } from '../../../shared/providers/ctx';
import { Container, ContainerFooter } from './styles';
import { Form } from '../../../components/Form';
import StyledButton from '../../../components/Button';

export default function Profile() {
  const { signOut } = useSession();

  const [name, setName] = useState('');
  const [sex, setSex] = useState('');

  function handleEditProfile() {
    console.log('Editar perfil');
  }

  function handleLogout() {
    signOut();
  }

  return (
    <LayoutPage>
      <Container>
        <Form>
          <TextInput
            label="Nome completo"
            value={name}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            label="Sexo"
            value={sex}
            onChangeText={(text) => setSex(text)}
          />

          <StyledButton
            icon="pencil"
            onPress={() => handleEditProfile()}
          >
            Editar
          </StyledButton>
        </Form>

        <Card>
          <Card.Content>
            <Text variant="bodyMedium">
              Tempo de foco no mês:{' '}
              <Text
                variant="bodyLarge"
                style={{ color: '#335882', fontWeight: '600', lineHeight: 26 }}
              >
                120 minutos
              </Text>
            </Text>

            <Text variant="bodyMedium">
              Mês de maior foco:{' '}
              <Text
                variant="bodyLarge"
                style={{ color: '#335882', fontWeight: '600', lineHeight: 26 }}
              >
                março
              </Text>
            </Text>

            <Text variant="bodyMedium">
              Maior tempo de foco:{' '}
              <Text
                variant="bodyLarge"
                style={{ color: '#335882', fontWeight: '600', lineHeight: 26 }}
              >
                30 minutos
              </Text>
            </Text>
          </Card.Content>
        </Card>

        <ContainerFooter>
          <Link href="/explication">
            <Button mode="contained" style={{ backgroundColor: '#014BA0' }}>O que é o FocusSands?</Button>
          </Link>

          <Button
            icon="logout"
            mode="text"
            textColor="#FFF"
            onPress={() => handleLogout()}
          >
            Sair da conta
          </Button>
        </ContainerFooter>
      </Container>
    </LayoutPage>
  );
}
