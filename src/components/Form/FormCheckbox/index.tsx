import { Checkbox, FormControlLabel } from '@mui/material';
import { FC } from 'react';
import { useFormContext, Controller, useController } from 'react-hook-form';

import ErrorMessage from '@/components/Form/ErrorMessage';
import { IFormCheckBoxProps } from '@/components/Form/FormCheckbox/interface';

const FormCheckbox: FC<IFormCheckBoxProps> = ({
  label = '',
  name = '',
  disabled,
  handleChange,
}) => {
  const { control } = useFormContext();
  const { field } = useController({ name, control, defaultValue: undefined });

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={''}
      render={({ fieldState: { error } }) => (
        <>
          <FormControlLabel
            control={(
              <Checkbox
                disabled={disabled}
                {...field}
                onChange={(e) => {
                  field.onChange(e.target.checked);
                  if (handleChange) {
                    handleChange(e.target.checked);
                  }
                }}
                checked={!!field.value}
              />)}
            label={label}
          />
          <ErrorMessage error={error} />
        </>
      )}
    />
  );
};

export default FormCheckbox;
