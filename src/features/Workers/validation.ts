'use client';
import * as yup from 'yup';

import validationLabels from '@/static/validationLabels';

const validationSchema = yup.object().shape({
  first_name: yup.string()
    .min(2, validationLabels.minLength(2))
    .max(255, validationLabels.maxLength(255))
    .required(validationLabels.required)
    .test('Invalid', validationLabels.invalid, (value) => {
      return value.trim().length > 1;
    }),
  last_name: yup.string()
    .min(2, validationLabels.minLength(2))
    .max(255, validationLabels.maxLength(255))
    .required(validationLabels.required)
    .test('Invalid', validationLabels.invalid, (value) => {
      return value.trim().length > 1;
    }),
  start_work_year: yup.number()
    .transform((value) => Number.isNaN(value) ? null : value )
    .min(10, validationLabels.min(10))
    .max(2100, validationLabels.max(2100))
    .required(validationLabels.required),
  office_id: yup.string()
    .required(validationLabels.required),
  procedures: yup.array()
    .required(validationLabels.required)

});

export default validationSchema;
