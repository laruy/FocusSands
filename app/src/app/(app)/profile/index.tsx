import { useEffect, useState } from 'react';
import { Button, TextInput, Card, Text } from 'react-native-paper';
import { Link } from 'expo-router';
import { LayoutPage } from '../../../components/global/Layout';
import { useSession } from '../../../shared/providers/ctx';
import { Container, ContainerFooter } from './styles';
import { Form } from '../../../components/Form';
import StyledButton from '../../../components/Button';
import { me, update } from '../../../services/UserService';
import { AxiosErrorException } from '../../../shared/interfaces/responses/Global.config';
import { msgError } from '../../../shared/utils/error';

export default function Profile() {
  const { signOut } = useSession();
  const { visibleDialog } = useSession();
  const [name, setName] = useState('');

  const findMe = async () => {
    await me()
      .then(({ data }) => {
        setName(data.name);
      })
      .catch((err: AxiosErrorException) => {
        const error = msgError(err.response!.data);
        visibleDialog({
          title: error.error,
          message: error.message,
          icon: 'alert',
        });
      });
  };

  const updateUser = async () => {
    await update({
      name,
    })
      .then(({ data }) => {
        setName(data.name);
        visibleDialog({
          title: 'Successo!',
          message: 'Usuário editado com sucesso.',
          icon: 'check-circle',
        });
      })
      .catch((err: AxiosErrorException) => {
        const error = msgError(err.response!.data);
        visibleDialog({
          title: error.error,
          message: error.message,
          icon: 'alert',
        });
      });
  };

  useEffect(() => {
    findMe();
  }, []);

  function handleEditProfile() {
    updateUser();
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

          <StyledButton icon="pencil" onPress={() => handleEditProfile()}>
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
          <Link href="/explanation">
            <Button mode="contained" style={{ backgroundColor: '#014BA0' }}>
              O que é o FocusSands?
            </Button>
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
