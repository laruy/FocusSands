import { Text } from 'react-native';

interface Props {
  name: string;
  time: string;
}

export function TaskReport({ name, time }: Props) {
  return (
    <Text
      style={{
        color: '#FFF',
        fontSize: 16,
        lineHeight: 22,
      }}
    >
      {name} - {time}
    </Text>
  );
}
