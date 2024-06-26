'use client';
import { FormElement, FormElementTypes } from '@/components/Constructor/Form/interface';

const formElements: FormElement[] = [
  {
    type: FormElementTypes.TEXT,
    label: 'Имя',
    name: 'client_name',
    xs: 6,
  },
  {
    type: FormElementTypes.TEXT,
    label: 'Телефон',
    inputType: 'number',
    name: 'client_phone',
    xs: 6,
  },
  {
    type: FormElementTypes.SELECT,
    label: 'Работник',
    options: 'workers',
    name: 'worker_id',
    xs: 12,
  },
  {
    type: FormElementTypes.SELECT,
    label: 'Процедура',
    condition: (form) => form.watch('worker_id'),
    options: 'procedures',
    name: 'procedure_id',
    xs: 6,
  },
  {
    type: FormElementTypes.SELECT,
    label: 'Время',
    condition: (form) => form.watch('procedure_id') && form.watch('worker_id'),
    options: 'time',
    name: 'start_time',
    xs: 6,
  },
];
export default formElements;
