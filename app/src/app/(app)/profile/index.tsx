import { Text } from 'react-native';
import { LayoutPage } from '../../../components/global/Layout';
import { useSession } from '../../../shared/providers/ctx';

export default function Profile() {
  const { signOut } = useSession();

  function handleLogout() {
    signOut();
  }
  return (
    <LayoutPage>
      <Text
        style={{ fontSize: 26, color: '#FFF' }}
        onPress={() => handleLogout()}
      >
        Sair da conta
      </Text>
    </LayoutPage>
  );
}
