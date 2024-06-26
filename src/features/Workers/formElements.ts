
import { FormElement, FormElementTypes } from '@/components/Constructor/Form/interface';

const formElements: FormElement[] = [
  {
    type: FormElementTypes.TEXT,
    label: 'Имя',
    name: 'first_name',
    xs: 6,
  },
  {
    type: FormElementTypes.TEXT,
    label: 'Фамилия',
    name: 'last_name',
    xs: 6,
  },
  {
    type: FormElementTypes.TEXT,
    label: 'Год начала работы',
    inputType: 'number',
    name: 'start_work_year',
    xs: 12,
  },
  {
    type: FormElementTypes.SELECT,
    label: 'Офис',
    options: 'offices',
    name: 'office_id',
    xs: 6,
  },
  {
    type: FormElementTypes.SELECT_MULTIPLE,
    label: 'Процедуры',
    options: 'procedures',
    name: 'procedures',
    xs: 6,
  },
];
export default formElements;
