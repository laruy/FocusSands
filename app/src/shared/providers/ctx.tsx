import React from 'react';
import { useRouter } from 'expo-router';
import { useStorageState } from './useStorageState';
import { signin, signup } from '../../services/AuthService';
import { msgError } from '../utils/error';
import { AxiosErrorException } from '../interfaces/responses/Global.config';
import { Dialog, Portal, Text } from 'react-native-paper';
import { PayloadSignin, PayloadSignup } from '../interfaces/Auth';

interface AuthContextInterface {
  signIn: (payload: PayloadSignin) => void;
  signUp: (payload: PayloadSignup) => void;
  signOut: () => void;
  visibleDialog: (content: {
    title: string;
    message: string;
    icon: string;
  }) => void;
  session?: string | null;
  isLoading: boolean;
}

const AuthContext = React.createContext<AuthContextInterface>({
  signIn: () => null,
  signUp: () => null,
  signOut: () => null,
  visibleDialog: () => null,
  session: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== 'production' && !value)
    throw new Error('useSession must be wrapped in a <SessionProvider />');

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');
  const router = useRouter();

  const [contentDialog, setContentDialog] = React.useState({
    dialog: false,
    title: '',
    message: '',
    icon: '',
  });
  const hideDialog = () =>
    setContentDialog({
      dialog: false,
      title: '',
      message: '',
      icon: '',
    });
  const visibleDialog = ({
    title,
    message,
    icon,
  }: {
    title: string;
    message: string;
    icon: string;
  }) =>
    setContentDialog({
      dialog: true,
      title,
      message,
      icon,
    });

  async function callSignIn(payload: PayloadSignin) {
    await signin(payload)
      .then(({ data }) => {
        visibleDialog({
          title: 'Sucesso!',
          message: 'Logado com sucesso!',
          icon: 'check-circle',
        });
        setSession(data.accessToken);
        router.push({ pathname: '/(tabs)' });
      })
      .catch((err: AxiosErrorException) => {
        const error = msgError(err.response!.data);
        visibleDialog({
          title: error.error,
          message: error.message,
          icon: 'alert',
        });
      });
  }

  async function callSignUp(payload: PayloadSignup) {
    await signup(payload)
      .then(({ data }) => {
        visibleDialog({
          title: 'Sucesso!',
          message: 'Cadastrado com sucesso!',
          icon: 'check-circle',
        });
        setSession(data.accessToken);
        router.push({ pathname: '/(tabs)' });
      })
      .catch((err: AxiosErrorException) => {
        const error = msgError(err.response!.data);
        visibleDialog({
          title: error.error,
          message: error.message,
          icon: 'alert',
        });
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signIn: (payload: PayloadSignin) => {
          callSignIn(payload);
        },
        signUp: (payload: PayloadSignup) => {
          callSignUp(payload);
        },
        signOut: () => {
          setSession(null);
        },
        visibleDialog: ({ title, message, icon }) => {
          visibleDialog({ title, message, icon });
        },
        session,
        isLoading,
      }}
    >
      <Portal>
        <Dialog visible={contentDialog.dialog} onDismiss={hideDialog}>
          <Dialog.Icon icon={contentDialog.icon} />
          <Dialog.Title style={{ textAlign: 'center' }}>
            {contentDialog.title}
          </Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium" style={{ textAlign: 'center' }}>
              {contentDialog.message}
            </Text>
          </Dialog.Content>
        </Dialog>
      </Portal>
      {props.children}
    </AuthContext.Provider>
  );
}
