'use client';
import CreateForm from '@/components/Constructor/CreateForm';
import TableConstructor from '@/components/Constructor/Table';
import UpdateForm from '@/components/Constructor/UpdateForm';
import formElements from '@/features/Proceudures/formElements';
import headers from '@/features/Proceudures/headers';
import validation from '@/features/Proceudures/validation';
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
      createForm={(
        <CreateForm
          module={'procedures'}
          formElements={formElements}
          validation={validation}
        />
      )}
      updateForm={(
        <UpdateForm
          module={'procedures'}
          formElements={formElements}
          validation={validation}
        />
      )}
    />
  );
};

export default ProceduresPage;
