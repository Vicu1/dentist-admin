
import { FormElement, FormElementTypes } from '@/components/Constructor/Form/interface';

const formElements: FormElement[] = [
  {
    type: FormElementTypes.TEXT,
    label: 'Название',
    name: 'name',
    xs: 12,
  },
  {
    type: FormElementTypes.TEXT,
    label: 'Длительность (мин)',
    inputType: 'number',
    name: 'duration',
    xs: 6,
  },
  {
    type: FormElementTypes.TEXT,
    label: 'Цена (лей)',
    inputType: 'number',
    name: 'price',
    xs: 6,
  },
  {
    type: FormElementTypes.TEXT,
    label: 'Описания',
    name: 'descriptions',
    rows: 3,
    xs: 12,
  },
];
export default formElements;
