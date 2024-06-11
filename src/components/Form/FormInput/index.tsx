import { FormControl, FormControlLabel, TextField } from '@mui/material';
import { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import ErrorMessage from '@/components/Form/ErrorMessage';

interface FormInputProps {
    name: string;
    label: string;
    type?: string;
    disabled?: boolean;
    className?: string
}
const FormInput: FC<FormInputProps> = ({
  label = '',
  name = '',
  type = 'text',
  disabled = false,
  className = '',
}) => {
  const { control, formState, getFieldState } = useFormContext();

  return (
    <FormControl
      error={Boolean(getFieldState(name, formState)?.error)}
    >
      <FormControlLabel
        color={getFieldState(name, formState)?.error ? 'error' : 'inherit'}
        label={label}
        control={
          <Controller
            name={name}
            control={control}
            defaultValue={''}
            render={({ field: { ref, ...fields }, fieldState: { error } }) => (
              <div style={{ position: 'relative' }}>
                <TextField
                  value={fields.value}
                  ref={ref}
                  inputRef={ref}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: '#ffffff',
                      },
                    },
                  }}
                  name={name}
                  onChange={fields.onChange}
                  type={type}
                  disabled={disabled}
                  error={Boolean(error?.message)}
                  className={className}
                />
                <ErrorMessage
                  error={error}
                />
              </div>

            )}
          />
        }
      />
    </FormControl>);
};
export default FormInput;
