import { SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { Container } from './styles';
import { BG_DEFAULT } from '../../shared/colors';
import { Avatar } from 'react-native-paper';
import { me } from '../../services/UserService';
import { useSession } from '../../shared/providers/ctx';
import { msgError } from '../../shared/utils/error';
import { AxiosErrorException } from '../../shared/interfaces/responses/Global.config';
import { useEffect, useState } from 'react';

export function Header() {
  const { visibleDialog } = useSession();
  const [name, setName] = useState('');

  const separarNome = (name || '')?.split(' ') || [];
  const primeiraLetra = separarNome[0].at(0)?.toUpperCase() || '';

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

  useEffect(() => {
    console.log('Vem aqui');
    findMe();
  }, []);

  return (
    <SafeAreaView style={{ backgroundColor: BG_DEFAULT }}>
      <Container>
        <Avatar.Image
          style={{ backgroundColor: 'transparent' }}
          source={require('../../../assets/logo-img.png')}
        />

        <Link href="/profile">
          <Avatar.Text
            size={64}
            style={{ backgroundColor: '#FFF' }}
            label={primeiraLetra}
          />
        </Link>
      </Container>
    </SafeAreaView>
  );
}
