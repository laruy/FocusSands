import { PropsWithChildren } from 'react';
import { View, ViewStyle } from 'react-native';

type Props = PropsWithChildren & {
  style?: ViewStyle;
};

export function LayoutPage({ style, children }: Props) {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#041548',
        padding: 16,
        ...style,
      }}
    >
      {children}
    </View>
  );
}
