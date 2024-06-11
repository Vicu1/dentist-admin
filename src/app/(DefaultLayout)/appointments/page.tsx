import TableConstructor from '@/components/Constructor/Table';
import headers from '@/features/Appointments/headers';
import { statusEnum } from '@/features/Appointments/statuses';
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
      actions={['create']}
    />
  );
};

export default AppointmentsPage;
