import { Stack } from 'expo-router/stack';
import { Header } from '../components/Header';
import { BG_DEFAULT } from '../shared/colors';
import { StatusBar } from 'expo-status-bar';

export default function AppLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Header />
      <Stack
        screenOptions={(prop) => ({
          headerStyle: {
            backgroundColor: BG_DEFAULT,
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          title: prop.route.name.split('/')[0].toLocaleUpperCase(),
          animation: 'fade',
        })}
      >
        <Stack.Screen
          name="(tabs)"
          options={{ headerShown: false, title: '', header: () => <Header /> }}
        />
        {/* <Stack.Screen name="pages/login/login" options={{ headerShown: false }} />
        <Stack.Screen name="pages/register/register" options={{ headerShown: false }} /> */}
      </Stack>
    </>
  );
}
