import { View } from 'react-native';
import CalendarComponent from '../../components/Calendar';
import { TaskReport } from '../../components/TaskReport';
import tasks_report from '../../mocks/tasks-report.json';

export default function Report() {
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        paddingVertical: 12,
        gap: 16,
      }}
    >
      <CalendarComponent />

      {tasks_report.map((task_report) => (
        <TaskReport
          name={task_report.name}
          time={task_report.time}
          key={task_report.id}
        />
      ))}
    </View>
  );
}
