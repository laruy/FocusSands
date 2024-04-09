import { Text } from 'react-native';
import { LayoutPage } from '../../components/global/Layout';

export default function Explication() {
  return (
    <LayoutPage>
      <Text
        style={{
          color: '#FFF',
          fontSize: 24,
          fontWeight: '700',
          marginBottom: 10,
        }}
      >
        O que é o FocusSands?
      </Text>
      <Text style={{ color: '#FFF', lineHeight: 22 }}>
        Ao utilizar o Focussands, os usuários são guiados por ciclos de trabalho
        e descanso cuidadosamente estruturados, que equilibram períodos
        concentrados de atividade com pausas revitalizantes.
      </Text>
      <Text style={{ color: '#FFF', lineHeight: 22 }}>
        A interface intuitiva e as funcionalidades flexíveis permitem adaptar o
        aplicativo às suas necessidades individuais, seja você um estudante
        enfrentando uma maratona de estudos, um profissional buscando melhorar
        sua produtividade no trabalho, ou qualquer pessoa em busca de um método
        eficaz para gerenciar seu tempo.
      </Text>
    </LayoutPage>
  );
}
