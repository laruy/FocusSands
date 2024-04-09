import { Text } from 'react-native';
import { LayoutPage } from '../../components/global/Layout';
import { Link } from 'expo-router';

export default function Profile() {
  return (
    <LayoutPage>
      <Link href="/login">
        <Text style={{ fontSize: 26, color: '#FFF' }}>Sair da conta</Text>
      </Link>
    </LayoutPage>
  );
}
