import { Slot } from 'expo-router';
import { SessionProvider } from '../shared/providers/ctx';
import { PaperProvider } from 'react-native-paper';

export default function Root() {
  return (
    <PaperProvider>
      <SessionProvider>
        <Slot />
      </SessionProvider>
    </PaperProvider>
  );
}
