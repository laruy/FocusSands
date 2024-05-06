import { ListTasks } from '../../../components/ListTasks';
import { Focused } from '../../../components/Focused/index';
import { LayoutPage } from '../../../components/global/Layout';

export default function Tasks() {
  return (
    <LayoutPage>
      <ListTasks />

      {/* <Focused /> */}
    </LayoutPage>
  );
}
