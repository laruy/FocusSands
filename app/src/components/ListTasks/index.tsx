import { FlatList, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';

import tasks from '../../mocks/tasks.json';
import { Task, Wrap } from './styles';

export function ListTasks() {
  return (
    <FlatList
      data={tasks}
      style={{ marginTop: 28 }}
      contentContainerStyle={{ paddingHorizontal: 24, gap: 16 }}
      keyExtractor={(task) => task.id}
      renderItem={({ item: task }) => (
        <Task>
          <Wrap>
            <FontAwesome
              size={26}
              color={task.concluded ? '#000000' : '#6d6d6d'}
              name={task.concluded ? 'check-square-o' : 'minus-square-o'}
            />
            <Text>{task.name}</Text>
          </Wrap>

          <Wrap>
            <FontAwesome size={22} name="edit" />
            <FontAwesome size={22} name="trash" />
          </Wrap>
        </Task>
      )}
    />
  );
}
