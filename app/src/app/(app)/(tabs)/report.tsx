import { List, MD3Colors } from 'react-native-paper';
import CalendarComponent from '../../../components/Calendar';
import tasks_report from '../../../mocks/tasks-report.json';
import { LayoutPage } from '../../../components/global/Layout';

export default function Report() {
  return (
    <LayoutPage>
      <CalendarComponent />

      <List.Section
        style={{ backgroundColor: '#ededed', width: '100%', borderRadius: 4 }}
      >
        <List.Subheader style={{ color: '#000' }}>
          Tarefas de acordo com a data selecionada
        </List.Subheader>

        {tasks_report.map((task_report) => (
          <List.Item
            key={task_report.id}
            title={`${task_report.name} - ${task_report.time}`}
            left={() => (
              <List.Icon
                style={{ paddingLeft: 16 }}
                color={MD3Colors.secondary0}
                icon={task_report.concluded ? 'check' : 'minus'}
              />
            )}
          />
        ))}
      </List.Section>
    </LayoutPage>
  );
}
