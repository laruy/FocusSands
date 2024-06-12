import { SafeAreaView } from 'react-native';
import { Link } from 'expo-router';
import { Container } from './styles';
import { BG_DEFAULT } from '../../shared/colors';
import { Avatar } from 'react-native-paper';

export function Header({ name }: { name?: string }) {
  const separarNome = (name || '')?.split(' ') || [];
  const primeiraLetra = separarNome[0].at(0)?.toUpperCase() || '';
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
