import CreateForm from '@/components/Constructor/CreateForm';
import TableConstructor from '@/components/Constructor/Table';
import UpdateForm from '@/components/Constructor/UpdateForm';
import formElements from '@/features/Workers/formElements';
import headers from '@/features/Workers/headers';
import validation from '@/features/Workers/validation';
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
      createForm={(
        <CreateForm
          module={'workers'}
          formElements={formElements}
          validation={validation}
        />
      )}
      updateForm={(
        <UpdateForm
          module={'workers'}
          formElements={formElements}
          validation={validation}
        />
      )}
    />
  );
};

export default WorkersPage;
