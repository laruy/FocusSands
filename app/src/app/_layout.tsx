import { Stack } from 'expo-router/stack';
import { Header } from '../components/Header';

export default function AppLayout() {
  return (
    <>
      <Header />
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
