import { Text } from 'react-native';

interface Props {
  name: string;
  time: string;
}

export function TaskReport({ name, time }: Props) {
  return (
    <Text>
      {name} - {time}
    </Text>
  );
}
