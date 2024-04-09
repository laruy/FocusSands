import { Image, SafeAreaView, Text } from 'react-native';
import { Link } from 'expo-router';
import { Container } from './styles';
import { Avatar } from '../Avatar';

export function Header() {
  return (
    <SafeAreaView style={{ backgroundColor: '#030e24' }}>
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
