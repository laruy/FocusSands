import CalendarComponent from '../../../components/Calendar';
import { TaskReport } from '../../../components/TaskReport';
import tasks_report from '../../../mocks/tasks-report.json';
import { LayoutPage } from '../../../components/global/Layout';

export default function Report() {
  return (
    <LayoutPage>
      <CalendarComponent />

      {tasks_report.map((task_report) => (
        <TaskReport
          name={task_report.name}
          time={task_report.time}
          key={task_report.id}
        />
      ))}
    </LayoutPage>
  );
}
