import TableConstructor from '@/components/Constructor/Table';
import { customActions } from '@/features/Clients/CustomActions';
import headers from '@/features/Clients/headers';
import { DefaultInterface } from '@/static/DefaultInterface';

export interface ClientItemInterface extends DefaultInterface {
    name: string;
    phone: number;
    is_blocked: boolean
}

const ClientsPage = () => {
  return (
    <TableConstructor<ClientItemInterface>
      module={'clients'}
      moduleTitle={'Клиенты'}
      actions={[]}
      headers={headers}
      customActions={customActions}
    />
  );
};

export default ClientsPage;
