import { View } from 'react-native';
import { ListTasks } from '../../components/ListTasks';
import { Focused } from '../../components/Focused/index';

export default function Tasks() {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <ListTasks />

      <Focused />
    </View>
  );
}
