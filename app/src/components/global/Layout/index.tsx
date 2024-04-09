import { PropsWithChildren } from 'react';
import { View } from 'react-native';

type Props = PropsWithChildren;

export function LayoutPage({ children }: Props) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#041548',
        padding: 16,
      }}
    >
      {children}
    </View>
  );
}
