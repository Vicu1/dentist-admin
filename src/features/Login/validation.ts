import * as yup from 'yup';

import validationLabels from '@/static/validationLabels';


const validation = yup.object().shape({
  email: yup.string().email(validationLabels.email).required(validationLabels.required),
  password: yup.string().required(validationLabels.required),
});

export default validation;
