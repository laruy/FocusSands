import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity, StyleSheet  } from 'react-native';
import { Text } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Focused } from '../Focused';
import { deleteTask, findAllTasksCurrentDate } from '../../services/TaskService';

import { Task, Wrap } from './styles';
import { AxiosErrorException } from '../../shared/interfaces/responses/Global.config';
import { useSession } from '../../shared/providers/ctx';
import { msgError } from '../../shared/utils/error';
import { TaskResponse } from '../../shared/interfaces/responses/Task';
import { useNavigation } from 'expo-router';

export function ListTasks() {
  const [focusedTaskId, setFocusedTaskId] = useState('');
  const [tasks, setTasks] = useState<TaskResponse[]>([]);
  const { visibleDialog } = useSession();
  const navigation = useNavigation()

  useEffect(() => {
    const findAllTasksCurrentDateFecth = async () =>
      findAllTasksCurrentDate()
        .then(({ data }) => {
          setTasks(data || []);
        })
        .catch((err: AxiosErrorException) => {
          const error = msgError(err.response!.data);
          visibleDialog({
            title: error.error,
            message: error.message,
            icon: 'alert',
          });
        });
    findAllTasksCurrentDateFecth();
  }, []);

  const handleEditTask = (taskId: string) => {
  };

  const handleClickTask = (taskId: string) => {
    setFocusedTaskId(taskId);
  };

  return (
    <>
      {tasks?.length ? (
        <FlatList
          data={tasks}
          style={{ marginTop: 28 }}
          contentContainerStyle={{ gap: 16 }}
          keyExtractor={(task) => task.id}
          renderItem={({ item: task }) => (
            <Task style={{ backgroundColor: task.concluded === 'FINISHED' ? '#D3D3D3' : '#FFF' }}>
              <TouchableOpacity onPress={() => handleClickTask(task.id)} 
              
              disabled={task.concluded === 'FINISHED'}
              >
                <Wrap>
                  <FontAwesome
                    size={26}
                    color={
                      task.concluded === 'FINISHED' ? '#000000' : '#6d6d6d'
                    }
                    name={
                      task.concluded === 'FINISHED'
                        ? 'check-square-o'
                        : 'minus-square-o'
                    }
                  />
                  <Text>{task.title}</Text>
                </Wrap>
              </TouchableOpacity>
              <Wrap>
                <TouchableOpacity onPress={() => handleEditTask(task.id)}>
                  <FontAwesome size={22} name="edit" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => deleteTask(task.id)}>
                  <FontAwesome size={22} name="trash" />
                </TouchableOpacity>
              </Wrap>
            </Task>
          )}
        />
      ) : (
        <Text variant="headlineLarge" style={{ color: '#FFF' }}>
          Nem uma tarefa para hoje
        </Text>
      )}
      {focusedTaskId && <Focused taskId={focusedTaskId} tasks={tasks} />}
    </>
  );
}
