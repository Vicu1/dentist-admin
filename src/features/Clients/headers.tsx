'use client';

import dayjs from 'dayjs';

import { ClientItemInterface } from '@/app/(DefaultLayout)/clients/page';
import Button from '@/components/Button';
import { HeaderInterface } from '@/components/Constructor/Table/headerInterface';


const headers: HeaderInterface<ClientItemInterface>[] = [
  {
    fieldName: 'id',
    label: 'ИД'
  },
  {
    fieldName: 'name',
    label: 'Имя'
  },
  {
    fieldName: 'phone',
    label: 'Телефон',
    format: ({ value }) => (
      <Button url={`tel:+373${value}`}>
        {`+373 ${value}`}
      </Button>)
  },
  {
    fieldName: 'is_blocked',
    label: 'Заблокирован',
    format: ({ value }) => value ? 'Да' : 'Нет'
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
