'use client';
import { Chip } from '@mui/material';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import { AppointmentItemInterface } from '@/app/(DefaultLayout)/appointments/page';
import { HeaderInterface } from '@/components/Constructor/Table/headerInterface';
require('dayjs/locale/ru');
dayjs.extend(relativeTime);
dayjs.locale('ru');

const headers: HeaderInterface<AppointmentItemInterface>[] = [
  {
    fieldName: 'id',
    label: 'ИД'
  },
  {
    fieldName: 'day',
    label: 'День',
    format: ({ value }) => (
      `${dayjs(value).format('DD/MM/YYYY')} (${dayjs().to(value)})`
    )
  },
  {
    fieldName: 'start_time',
    label: 'Время',
    format: ({ value, item }) => (
      `${dayjs(`${item.day} ${value}`).format('HH:mm')} - ${dayjs(`${item.day} ${item.end_time}`).format('HH:mm')}`
    )
  },
  {
    fieldName: 'status',
    label: 'Статус',
    format: ({ value }) => {
      const statuses: any = {
        'NEW': 'НОВЫЙ',
        'CONFIRMED': 'ПОДТВЕРЖДЕНО',
        'REJECTED': 'ОТКЛОНЕНО'
      };
      const colors: any = {
        'NEW': 'info',
        'CONFIRMED': 'secondary',
        'REJECTED': 'error'
      };
      return <Chip
        sx={{
          width: '100%'
        }}
        color={colors[value]}
        label={statuses[value]}
             />;
    }
  },
  {
    fieldName: 'comment',
    label: 'Комментарий'
  },
  {
    fieldName: 'created_at',
    label: 'Создан в',
    format: ({ value }) => (
      dayjs(value).format('DD/MM/YYYY HH:mm')
    )
  },
  {
    fieldName: 'updated_at',
    label: 'Обновлено в',
    format: ({ value }) => (
      dayjs(value).format('DD/MM/YYYY HH:mm')
    )
  },
];

export default headers;
