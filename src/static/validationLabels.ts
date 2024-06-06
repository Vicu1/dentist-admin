const validationLabels = {
  required: 'Это поле обязательно',
  min: (value: number): string => `Минимальное значение ${value}`,
  max: (value: number): string => `Макс. значение ${value}`,
  minLength: (value: number): string => `Мин ${value} символы`,
  maxLength: (value: number): string => `Макс ${value} символы`,
  greater: 'Больше, чем предыдущий',
  greaterOrEqual: 'Больше или равно предыдущему',
  oneWord: 'Должно содержать только одно слово',
  invalid: 'Неверное значение',
  email: 'Неверный адрес электронной почты',
  maxFileSize: (size: number): string => `Max file size ${size} MB`,
  invalidType: 'Неверный тип файла',
  validUrl: 'Должен быть действительным URL',
};

export default validationLabels;
