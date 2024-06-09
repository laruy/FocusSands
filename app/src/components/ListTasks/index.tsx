import React, { useEffect, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Focused } from '../Focused';
import { findAllTasksCurrentDate } from '../../services/TaskService';

import { Task, Wrap } from './styles';
import { AxiosErrorException } from '../../shared/interfaces/responses/Global.config';
import { useSession } from '../../shared/providers/ctx';
import { msgError } from '../../shared/utils/error';
import { TaskResponse } from '../../shared/interfaces/responses/Task';

export function ListTasks() {
  const [focusedTaskId, setFocusedTaskId] = useState('');
  const [tasks, setTasks] = useState<TaskResponse[]>([]);
  const { visibleDialog } = useSession();

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
      {tasks?.length ? (
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
                <TouchableOpacity onPress={() => handleDeleteTask(task.id)}>
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
