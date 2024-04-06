import { SafeAreaView, Text } from 'react-native';
import { Container } from './styles';
import { Avatar } from '../Avatar';

export function Header() {
  return (
    <SafeAreaView>
      <Container>
        <Text style={{ fontSize: 24 }}>⏳</Text>

        <Avatar name="Joao da Silva" />
      </Container>
    </SafeAreaView>
  );
}
