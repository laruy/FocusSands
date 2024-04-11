import { Text } from 'react-native-paper';
import { LayoutPage } from '../../../components/global/Layout';
import { Container } from './styles';

export default function Explication() {
  return (
    <LayoutPage>
      <Container>
        <Text
          variant="headlineLarge"
          style={{ color: '#98c5f8', fontWeight: '700' }}
        >
          O que é o FocusSands?
        </Text>

        <Text variant="labelLarge" style={{ color: '#FFF' }}>
          Ao utilizar o Focussands, os usuários são guiados por ciclos de
          trabalho e descanso cuidadosamente estruturados, que equilibram
          períodos concentrados de atividade com pausas revitalizantes. A
          interface intuitiva e as funcionalidades flexíveis permitem adaptar o
          aplicativo às suas necessidades individuais, seja você um estudante
          enfrentando uma maratona de estudos, um profissional buscando melhorar
          sua produtividade no trabalho, ou qualquer pessoa em busca de um
          método eficaz para gerenciar seu tempo.
        </Text>
      </Container>
    </LayoutPage>
  );
}
