import { useState } from 'react';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { isBefore, format } from 'date-fns';
import CalendarComponent from '../../../components/Calendar';
import { LayoutPage } from '../../../components/global/Layout';
import { CalendarDates } from '../../../shared/interfaces/Calendar';
import { TaskResponse } from '../../../shared/interfaces/responses/Task';
import { findAllTasks } from '../../../services/TaskService';
import { AxiosErrorException } from '../../../shared/interfaces/responses/Global.config';
import { msgError } from '../../../shared/utils/error';
import { useSession } from '../../../shared/providers/ctx';
import { TaskType } from '../../../shared/types/TaskType';
import { FlatList } from 'react-native';

export default function Report() {
  const [tasks, setTasks] = useState<TaskResponse[]>([]);
  const { visibleDialog } = useSession();

  const findAllTasksByFilterDate = async ({
    initialDate,
    finalDate,
  }: CalendarDates) => {
    await findAllTasks({
      initialDate,
      finalDate,
    })
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
  };

  const handleFindTasksByFilterDate = ({
    initialDate,
    finalDate,
  }: CalendarDates) => {
    if (isBefore(initialDate, finalDate)) {
      console.log('Data inicial é antes da data final!');
      findAllTasksByFilterDate({
        initialDate,
        finalDate,
      });
    }
  };

  const handleDescriptionTask = (task: TaskResponse) => {
    visibleDialog({
      title: `Descrição da tarefa: ${task.title}`,
      message: task.description,
      icon: '',
    });
  };

  return (
    <LayoutPage style={{ alignItems: 'stretch' }}>
      <CalendarComponent onFilter={handleFindTasksByFilterDate} />

      <FlatList
        data={tasks}
        style={{ marginTop: 28 }}
        contentContainerStyle={{ gap: 16 }}
        keyExtractor={(task) => task.id}
        renderItem={({ item: task }) => (
          <Card.Title
            style={{ backgroundColor: '#FFF' }}
            title={task.title}
            subtitle={`${task.timer} min - ${format(
              task.created_at,
              'dd/MM/yyyy'
            )}`}
            left={(props) => (
              <Avatar.Icon
                {...props}
                color="#FFF"
                style={{
                  backgroundColor:
                    task.concluded === TaskType.FINISHED
                      ? '#00857D'
                      : '#494949',
                }}
                icon={task.concluded === TaskType.FINISHED ? 'check' : 'minus'}
              />
            )}
            right={(props) => (
              <IconButton
                {...props}
                icon="text-box"
                onPress={() => handleDescriptionTask(task)}
              />
            )}
          />
        )}
      />
    </LayoutPage>
  );
}
