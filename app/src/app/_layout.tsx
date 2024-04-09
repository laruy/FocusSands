import { Stack } from 'expo-router/stack';
import { Header } from '../components/Header';

export default function AppLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ header: ()=> <Header /> }} />
        {/* <Stack.Screen name="pages/login/login" options={{ headerShown: false }} />
        <Stack.Screen name="pages/register/register" options={{ headerShown: false }} /> */}
      </Stack>
    </>
  );
}
