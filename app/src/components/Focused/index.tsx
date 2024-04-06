import { Text } from 'react-native';
import { Container, Wrap } from './styles';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export function Focused() {
  return (
    <Container>
      <Wrap>
        <Text>Em foco</Text>
        <Text>|</Text>
        <FontAwesome size={26} color="#014BA0" name="play" />
      </Wrap>

      <Wrap>
        <Text style={{ fontSize: 22 }}>Tarefa 2</Text>
        <Text style={{ fontSize: 26 }}>00:00</Text>
      </Wrap>
    </Container>
  );
}
