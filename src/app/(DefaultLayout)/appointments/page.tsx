import CreateForm from '@/components/Constructor/CreateForm';
import TableConstructor from '@/components/Constructor/Table';
import { customActions } from '@/features/Appointments/CustomActions';
import formElements from '@/features/Appointments/formElements';
import headers from '@/features/Appointments/headers';
import { statusEnum } from '@/features/Appointments/statuses';
import validation from '@/features/Appointments/validation';
import { DefaultInterface } from '@/static/DefaultInterface';

export interface AppointmentItemInterface extends DefaultInterface {
   comment: string;
   day: string;
   start_time: string;
   end_time: string;
   status: statusEnum
}

const AppointmentsPage = () => {
  return (
    <TableConstructor<AppointmentItemInterface>
      module={'appointments'}
      moduleTitle={'Приемы'}
      headers={headers}
      actions={['create', 'update']}
      customActions={customActions}
      createForm={(
        <CreateForm
          module={'appointments'}
          formElements={formElements}
          validation={validation}
        />
      )}
    />
  );
};

export default AppointmentsPage;
