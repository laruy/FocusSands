import { Image, SafeAreaView, Text } from 'react-native';
import { Link } from 'expo-router';
import { Container } from './styles';
import { Avatar } from '../Avatar';
import { BG_DEFAULT } from '../../shared/colors';

export function Header() {
  return (
    <SafeAreaView style={{ backgroundColor: BG_DEFAULT }}>
      <Container>
        <Text style={{ fontSize: 24 }}>
          <Image src="../../../assets/logo-img.png" />
        </Text>

        <Link href="/profile">
          <Avatar name="Joao da Silva" />
        </Link>
      </Container>
    </SafeAreaView>
  );
}
