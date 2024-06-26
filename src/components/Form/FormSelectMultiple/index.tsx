import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { Checkbox, CircularProgress, debounce, FormControlLabel, TextField, useTheme } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';
import { Controller, useFormContext } from 'react-hook-form';

import ErrorMessage from '@/components/Form/ErrorMessage';
import SelectDefaultHeight from '@/components/Form/FormSelect/config';
import { FormSelectMultipleProps } from '@/components/Form/FormSelectMultiple/interface';
import StyledAutoCompleteMultiple from '@/components/Form/FormSelectMultiple/styled';
import http from '@/service';

const icon = <CheckBoxOutlineBlankIcon fontSize={'small'} />;
const checkedIcon = <CheckBoxIcon fontSize={'small'} />;

const FormSelectMultiple = ({
  label = '',
  options = [],
  name = '',
  grouped = false,
  groupedField = 'group',
  listboxProps = SelectDefaultHeight,
  disableDefault = false,
  limitTags = 1,
  disableClearable = false,
  handleChange,
  returnObject = false,
  defaultValue = [],
  disabled = false,
  moduleName = '',
}: FormSelectMultipleProps) => {
  const { control, getValues } = useFormContext();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [defaultOptions, setDefaultOptions] = useState(options);
  const getOptionDisabled = (option: any) => disableDefault
      && defaultValue.map((item: any) => item.id).includes(option.id);

  const handleFetch = debounce(async (e) => {
    try {
      setLoading(true);
      const value = getValues(name);
      if(e && e?.target?.value !== 0 && value?.length) {
        const response = await http.get(`${moduleName}/list`);
        setDefaultOptions((prevState) => {
          const set: any = new Set([
            ...response.data,
            ...value.map((item: any) => prevState.find(prev => prev.id === Number(item)))
          ]);
          return [...set];
        } );
      }
    } catch (e) {
      //TODO: Error handler
      // new ErrorHandler().checkError(e);
    } finally {
      setLoading(false);
    }
  }, 300);

  return (
    <FormControlLabel
      sx={{ width: '100%' }}
      control={
        <Stack
          direction={'row'}
          width={'100%'}
        >
          <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({
              field: { ref, onChange, ...fields },
              fieldState: { error },
            }) => (
              <Stack
                position={'relative'}
                width={'100%'}
                display={'block'}
              >
                <StyledAutoCompleteMultiple
                  {...fields}
                  size={'small'}
                  multiple
                  theme={theme}
                  onInputChange={moduleName ? handleFetch : () => {}}
                  loading={loading}
                  ListboxProps={
                    listboxProps
                  }
                  limitTags={limitTags}
                  noOptionsText={'Нет вариантов'}
                  getOptionDisabled={getOptionDisabled}
                  disableClearable={disableClearable}
                  disableCloseOnSelect
                  disabled={disabled}
                  options={
                    grouped
                      ? defaultOptions.sort((a: any, b: any) => (a[groupedField] < b[groupedField] ? -1 : 1))
                      : defaultOptions
                  }
                  onChange={(e, value: any) => {
                    if (value) {
                      const filteredValue = value?.filter(
                        (option: any) => !defaultValue.some((item: any) => item.id === option.id),
                      );
                      if (returnObject) {
                        disableDefault ? onChange([...defaultValue, ...filteredValue]) : onChange(value);
                      } else if (disableDefault) {
                        onChange([
                          ...defaultValue.map((element: any) => element.id),
                          ...filteredValue.map((element: any) => element.id),
                        ]);
                      } else {
                        onChange(value.map((element: any) => element?.id || element));
                      }
                    } else {
                      onChange(null);
                    }
                    if (handleChange) {
                      handleChange(value);
                    }
                  }}
                  isOptionEqualToValue={(option: any, value: any) => option?.name === value?.name || option?.id == value}
                  getOptionLabel={(option: any) => option?.name || defaultOptions.find((item) => item.id == option)?.name}
                  groupBy={(option: any) => grouped && option?.[groupedField]}
                  renderOption={(props, option: any, { selected }) => {
                    if (option.id === 'none') {
                      return (
                        <li
                          {...props}
                          key={`${option.id}_${name}`}
                          onClick={() => onChange([])}
                        >
                          {option.name}
                        </li>
                      );
                    }
                    return (
                      <li
                        {...props}
                        key={option.id}
                      >
                        <Checkbox
                          icon={icon}
                          checkedIcon={checkedIcon}
                          className={'CheckboxItem'}
                          checked={selected}
                        />
                        {option.name}
                      </li>
                    );
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      error={Boolean(error?.message)}
                      inputRef={ref}
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
                      variant={'outlined'}
                    />
                  )}
                />
                <ErrorMessage error={error} />
              </Stack>
            )}
          />
        </Stack>
      }
      label={label}
    />
  );
};

export default FormSelectMultiple;
