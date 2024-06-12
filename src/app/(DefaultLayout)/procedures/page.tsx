import TableConstructor from '@/components/Constructor/Table';
import headers from '@/features/Proceudures/headers';
import { DefaultInterface } from '@/static/DefaultInterface';

export interface ProcedureItemInterface extends DefaultInterface {
    name: string;
    price: number;
    duration: number;
    descriptions: string
}

const ProceduresPage = () => {
  return (
    <TableConstructor<ProcedureItemInterface>
      module={'procedures'}
      moduleTitle={'Процедуры'}
      headers={headers}
    />
  );
};

export default ProceduresPage;
