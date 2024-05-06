import React, { useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Focused } from '../Focused';
import tasks from '../../mocks/tasks.json';

import { Task, Wrap } from './styles';

export function ListTasks() {
  const [focusedTaskId, setFocusedTaskId] = useState(''); 

  const handleEditTask = (taskId: string) => {
    console.log('Edit task with ID:', taskId);
  };

  const handleDeleteTask = (taskId: string) => {
    console.log('Delete task with ID:', taskId);
  };

  const handleClickTask = (taskId: string) => {
    console.log('Clicked task with ID:', taskId);
    setFocusedTaskId(taskId);
  };

  return (
    <>
      <FlatList
        data={tasks}
        style={{ marginTop: 28 }}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={(task) => task.id}
        renderItem={({ item: task }) => (
          <Task>
            <TouchableOpacity onPress={() => handleClickTask(task.id)}>
              <Wrap>
                <FontAwesome
                  size={26}
                  color={task.concluded ? '#000000' : '#6d6d6d'}
                  name={task.concluded ? 'check-square-o' : 'minus-square-o'}
                />
                <Text>{task.title}</Text>
              </Wrap>
            </TouchableOpacity>
            <Wrap>
              <TouchableOpacity onPress={() => handleEditTask(task.id)}> 
                <FontAwesome size={22} name="edit" />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
                <FontAwesome size={22} name="trash" />
              </TouchableOpacity>
            </Wrap>
          </Task>
        )}
      />
      {focusedTaskId && <Focused taskId={focusedTaskId} tasks={tasks} />}
    </>
  );
}
