'use client';

import dayjs from 'dayjs';

import { WorkerItemInterface } from '@/app/(DefaultLayout)/workers/page';
import { HeaderInterface } from '@/components/Constructor/Table/headerInterface';


const headers: HeaderInterface<WorkerItemInterface>[] = [
  {
    fieldName: 'id',
    label: 'ИД'
  },
  {
    fieldName: 'first_name',
    label: 'Имя'
  },
  {
    fieldName: 'last_name',
    label: 'Фамилия'
  },
  {
    fieldName: 'start_work_year',
    label: 'Год начала работы'
  },
  {
    fieldName: 'created_at',
    label: 'Создан в',
    format: ({ value }) => (
      dayjs(value as string).format('DD/MM/YYYY HH:mm')
    )
  },
  {
    fieldName: 'updated_at',
    label: 'Обновлено в',
    format: ({ value }) => (
      dayjs(value as string).format('DD/MM/YYYY HH:mm')
    )
  },
];

export default headers;
