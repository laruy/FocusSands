import { Slot } from 'expo-router';
import { SessionProvider } from '../shared/providers/ctx';

export default function Root() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
