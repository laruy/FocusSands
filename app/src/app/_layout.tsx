import { Stack } from 'expo-router/stack';
import { Header } from '../components/Header';

export default function AppLayout() {
  return (
    <>
      <Header />
      <Stack
        screenOptions={(prop) => ({
          headerStyle: {
            backgroundColor: '#030e24',
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
