import { CircularProgress, debounce, FormControlLabel, TextField, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { HTMLAttributes, useEffect, useState } from 'react';
import { useFormContext, Controller } from 'react-hook-form';

import ErrorMessage from '@/components/Form/ErrorMessage/index';
import SelectDefaultHeight from '@/components/Form/FormSelect/config';
import { FormSelectProps } from '@/components/Form/FormSelect/interface';
import StyledInputAutoComplete from '@/components/Form/FormSelect/styled';
import http from '@/service';
const FormSelect = ({
  label = '',
  options = [],
  name = '',
  autoFocus = false,
  returnObj = false,
  moduleName = '',
  groupedField = 'group',
  handleChange,
  listboxProps = SelectDefaultHeight,
  defaultValue,
  disabled = false,
  grouped = false,
  disableClearable = false,
  filterSelectedOptions = false,
}: FormSelectProps) => {
  const { control, getValues  } = useFormContext();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [defaultOptions, setDefaultOptions] = useState(typeof options === 'string' ? [] : options);

  const getLabel = (option: any) => {
    const optionsItem = defaultOptions?.find((item) => {
      return item.id === option;
    });

    return option?.name || optionsItem?.name || '';
  };

  const handleFetch = debounce(async (e) => {
    try {
      setLoading(true);
      const value = getValues(name);
      if(e && e?.target?.value !== 0 || value && moduleName) {
        const response = await http.get(`${moduleName}/list`,{
          // ['filter[name]']: e?.target?.value || '',
          // ['filter[id]']: value
        });
        setDefaultOptions(response.data);
      }
    } catch (e) {
      //TODO: error handler
      // new ErrorHandler().checkError(e);
    } finally {
      setLoading(false);
    }
  }, 300);

  useEffect(() => {
    handleFetch(null);
  }, []);

  return (
    <FormControlLabel
      sx={{ width: '100%' }}
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue || null}
          render={({ field: { ref, onChange, ...fields }, fieldState: { error } }) => (
            <Stack
              position={'relative'}
              width={'100%'}
              display={'block'}
            >
              <Stack
                direction={'row'}
                gap={'2px'}
                width={'100%'}
                alignItems={'center'}
              >
                <StyledInputAutoComplete
                  {...fields}
                  theme={theme}
                  onInputChange={moduleName ? handleFetch : () => {}}
                  disabled={disabled}
                  noOptionsText={'Нет вариантов'}
                  loading={loading}
                  ListboxProps={
                    listboxProps
                  }
                  filterSelectedOptions={filterSelectedOptions}
                  isOptionEqualToValue={(option: any, value: any): boolean => {
                    return option?.name === value?.name || option?.id === value || value === '';
                  }}
                  getOptionLabel={(option: unknown): string => getLabel(option)}
                  onChange={(e, value: any) => {
                    if (value) {
                      onChange(returnObj ? value : value.id);
                      if (handleChange) {
                        handleChange(value);
                      }
                    } else {
                      onChange(null);
                      if (handleChange) {
                        handleChange(null);
                      }
                    }
                  }}
                  options={defaultOptions}
                  renderOption={(props: HTMLAttributes<HTMLLIElement>, option: any) => (
                    <li
                      {...props}
                      key={option?.id || option}
                    >
                      { option?.name }
                    </li>
                  )}
                  disableClearable={disableClearable}
                  groupBy={(option: any) => grouped && option?.[groupedField]}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      inputRef={ref}
                      fullWidth
                      autoFocus={autoFocus}
                      error={Boolean(error?.message)}
                      variant={'outlined'}
                      InputProps={{
                        ...params.InputProps,
                        endAdornment: (
                          <>
                            {loading ? (
                              <CircularProgress
                                size={20}
                              />) : null}
                            {params.InputProps.endAdornment}
                          </>
                        ),
                      }}
                    />
                  )}
                />
              </Stack>
              <ErrorMessage error={error} />
            </Stack>
          )}
        />
      }
    />
  );
};

export default FormSelect;
