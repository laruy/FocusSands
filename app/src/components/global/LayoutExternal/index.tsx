import { PropsWithChildren } from 'react';
import { SafeAreaView, ViewStyle } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { BG_DEFAULT } from '../../../shared/colors';

type Props = PropsWithChildren & {
  style?: ViewStyle;
};

export function LayoutPageExternal({ style, children }: Props) {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView
        style={{
          backgroundColor: BG_DEFAULT,
          height: '100%',
          ...style,
        }}
      >
        {children}
      </SafeAreaView>
    </>
  );
}
