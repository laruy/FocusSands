import { Redirect, Stack } from 'expo-router';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useSession } from '../../shared/providers/ctx';
import { BG_DEFAULT } from '../../shared/colors';
import { Header } from '../../components/Header';

export default function AppLayout() {
  const { session, isLoading } = useSession();

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!session) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }

  // This layout can be deferred because it's not the root layout.
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
