import { View, Text, StyleProp, TextStyle, ViewStyle } from 'react-native';

interface Props {
  name: string;
  style?: StyleProp<TextStyle>;
  size?: number;
  backgroundColor?: string;
  textColor?: string;
}

export function Avatar(props: Props) {
  const {
    size = 60,
    backgroundColor = '#333',
    textColor = '#fff',
    style,
    name,
  } = props;

  const containerStyle: ViewStyle = {
    width: size,
    height: size,
    backgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  };

  const textStyle: TextStyle = {
    color: textColor,
    fontSize: size / 3.14,
    fontWeight: 'bold',
    letterSpacing: 1,
  };

  const separarNome = name?.split(' ');
  const primeiraLetra = separarNome[0]?.at(0)?.toUpperCase();

  return (
    <View style={[style, containerStyle]}>
      <Text style={textStyle} adjustsFontSizeToFit={true}>
        {primeiraLetra}
      </Text>
    </View>
  );
}
