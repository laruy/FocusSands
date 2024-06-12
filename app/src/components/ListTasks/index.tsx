import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'expo-router';
import { FlatList, TouchableOpacity } from 'react-native';
import { Button, Text } from 'react-native-paper';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Focused } from '../Focused';
import {
  deleteTask,
  findAllTasksCurrentDate,
  updateConcludedTask,
} from '../../services/TaskService';

import { Task, Wrap } from './styles';
import { AxiosErrorException } from '../../shared/interfaces/responses/Global.config';
import { useSession } from '../../shared/providers/ctx';
import { msgError } from '../../shared/utils/error';
import { TaskResponse } from '../../shared/interfaces/responses/Task';

export function ListTasks() {
  const [focusedTaskId, setFocusedTaskId] = useState('');
  const [tasks, setTasks] = useState<TaskResponse[]>([]);
  const { visibleDialog } = useSession();
  const router = useRouter();

  const findAllTasksCurrentDateFecth = useCallback(async () => {
    await findAllTasksCurrentDate()
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
  }, []);

  useEffect(() => {
    findAllTasksCurrentDateFecth();
  }, [findAllTasksCurrentDateFecth]);

  const handleReloadFindAllTasksCurrentDate = () => {
    findAllTasksCurrentDateFecth();
  };

  const handleResetPage = () => {
    setFocusedTaskId('');
    handleReloadFindAllTasksCurrentDate();
  };

  const handleDeleteTask = async (taskId: string) => {
    await deleteTask(taskId)
      .then(() => {
        visibleDialog({
          title: 'Successo!',
          message: 'Tarefa deletada com sucesso.',
          icon: 'check-circle',
        });
        setTasks((prevState) => prevState.filter((task) => task.id !== taskId));
        setFocusedTaskId('');
      })
      .catch((err: AxiosErrorException) => {
        const error = msgError(err.response!.data);
        visibleDialog({
          title: error.error,
          message: error.message,
          icon: 'alert',
        });
      });
  };

  const handleEditTask = (taskId: string) => {
    router.push({ pathname: '/[taskId]', params: { taskId } });
  };

  const handleClickTask = (taskId: string) => {
    setFocusedTaskId(taskId);
  };

  const handleUpdateConcludedTask = async ({ id, concluded }: TaskResponse) => {
    await updateConcludedTask(id, concluded)
      .then(() => {
        handleReloadFindAllTasksCurrentDate();
      })
      .catch((err: AxiosErrorException) => {
        const error = msgError(err.response!.data);
        visibleDialog({
          title: error.error,
          message: error.message,
          icon: 'alert',
        });
      })
      .finally(() => {
        setFocusedTaskId('');
      });
  };

  return (
    <>
      <Button
        icon="reload"
        mode="elevated"
        onPress={handleReloadFindAllTasksCurrentDate}
      >
        Recarregar
      </Button>
      {tasks?.length ? (
        <FlatList
          data={tasks}
          style={{ marginTop: 28 }}
          contentContainerStyle={{ gap: 16 }}
          keyExtractor={(task) => task.id}
          renderItem={({ item: task }) => (
            <Task
              style={{
                with: '100%',
                backgroundColor:
                  task.concluded === 'FINISHED' ? '#D3D3D3' : '#FFF',
              }}
            >
              <TouchableOpacity
                style={{ flex: 1 }}
                onPress={() => handleClickTask(task.id)}
                disabled={task.concluded === 'FINISHED'}
              >
                <Wrap>
                  <FontAwesome
                    onPress={() => handleUpdateConcludedTask(task)}
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
                  <Text style={{ flexWrap: 'wrap' }}>{task.title}</Text>
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
          Nenhuma tarefa para hoje
        </Text>
      )}
      {focusedTaskId && (
        <Focused
          taskId={focusedTaskId}
          tasks={tasks}
          onConcludedTask={handleResetPage}
        />
      )}
    </>
  );
}
