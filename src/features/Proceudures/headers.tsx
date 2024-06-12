'use client';

import { Typography } from '@mui/material';
import dayjs from 'dayjs';

import { ProcedureItemInterface } from '@/app/(DefaultLayout)/procedures/page';
import { HeaderInterface } from '@/components/Constructor/Table/headerInterface';


const headers: HeaderInterface<ProcedureItemInterface>[] = [
  {
    fieldName: 'id',
    label: 'ИД'
  },
  {
    fieldName: 'name',
    label: 'Название'
  },
  {
    fieldName: 'duration',
    label: 'Длительность (мин)'
  },
  {
    fieldName: 'price',
    label: 'Цена (лей)',
    format: ({ value }) => (
      <Typography>
        {(value as number).toFixed(2)}
      </Typography>
    )
  },
  {
    fieldName: 'descriptions',
    label: 'Описания'
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
