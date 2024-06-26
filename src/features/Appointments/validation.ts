'use client';
import * as yup from 'yup';

import validationLabels from '@/static/validationLabels';

const validationSchema = yup.object().shape({
  client_name: yup.string()
    .min(2, validationLabels.minLength(2))
    .max(255, validationLabels.maxLength(255))
    .required(validationLabels.required)
    .test('Invalid', validationLabels.invalid, (value) => {
      return value.trim().length > 1;
    }),
  client_phone: yup.string()
    .min(2, validationLabels.minLength(2))
    .max(255, validationLabels.maxLength(255))
    .required(validationLabels.required)
    .test('Invalid', validationLabels.invalid, (value) => {
      return value.trim().length > 1;
    }),
  worker_id: yup.string()
    .required(validationLabels.required),
  procedure_id: yup.string()
    .required(validationLabels.required),
  start_time: yup.string()
    .required(validationLabels.required)

});

export default validationSchema;
