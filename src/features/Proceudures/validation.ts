'use client';
import * as yup from 'yup';

import validationLabels from '@/static/validationLabels';

const validationSchema = yup.object().shape({
  name: yup.string()
    .min(2, validationLabels.minLength(2))
    .max(255, validationLabels.maxLength(255))
    .required(validationLabels.required)
    .test('Invalid', validationLabels.invalid, (value) => {
      return value.trim().length > 1;
    }),
  duration: yup.number()
    .transform((value) => Number.isNaN(value) ? null : value )
    .min(5, validationLabels.min(5))
    .max(360, validationLabels.max(360))
    .required(validationLabels.required),
  price: yup.number()
    .transform((value) => Number.isNaN(value) ? null : value )
    .min(10, validationLabels.min(10))
    .max(10000, validationLabels.max(10000))
    .required(validationLabels.required),
  descriptions: yup.string()
    .min(2, validationLabels.minLength(2))
    .max(1000, validationLabels.maxLength(1000))
    .required(validationLabels.required)
    .test('Invalid', validationLabels.invalid, (value) => {
      return value.trim().length > 1;
    }),
});

export default validationSchema;
