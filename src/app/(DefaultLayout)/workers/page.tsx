import TableConstructor from '@/components/Constructor/Table';
import headers from '@/features/Workers/headers';
import { DefaultInterface } from '@/static/DefaultInterface';

export interface WorkerItemInterface extends DefaultInterface {
    first_name: string;
    last_name: string;
    start_work_year: number
}

const WorkersPage = () => {
  return (
    <TableConstructor<WorkerItemInterface>
      module={'workers'}
      moduleTitle={'Работники'}
      headers={headers}
    />
  );
};

export default WorkersPage;
