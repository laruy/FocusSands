import { useState } from 'react';
import { List, MD3Colors } from 'react-native-paper';
import { isBefore } from 'date-fns';
import CalendarComponent from '../../../components/Calendar';
import { LayoutPage } from '../../../components/global/Layout';
import { CalendarDates } from '../../../shared/interfaces/Calendar';
import { TaskResponse } from '../../../shared/interfaces/responses/Task';
import { findAllTasks } from '../../../services/TaskService';
import { AxiosErrorException } from '../../../shared/interfaces/responses/Global.config';
import { msgError } from '../../../shared/utils/error';
import { useSession } from '../../../shared/providers/ctx';
import { TaskType } from '../../../shared/types/TaskType';

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

  return (
    <LayoutPage>
      <CalendarComponent onFilter={handleFindTasksByFilterDate} />

      <List.Section
        style={{ backgroundColor: '#ededed', width: '100%', borderRadius: 4 }}
      >
        <List.Subheader style={{ color: '#000' }}>
          Tarefas de acordo com a data selecionada
        </List.Subheader>

        {tasks.map((task) => (
          <List.Item
            key={task.id}
            title={`${task.title} - ${task.timer}`}
            left={() => (
              <List.Icon
                style={{ paddingLeft: 16 }}
                color={MD3Colors.secondary0}
                icon={task.concluded === TaskType.FINISHED ? 'check' : 'minus'}
              />
            )}
          />
        ))}
      </List.Section>
    </LayoutPage>
  );
}
