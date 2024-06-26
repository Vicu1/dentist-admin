'use client';
import { CircularProgress, Grid, useMediaQuery, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import { FC, useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { When } from 'react-if';

import getFormElement from '@/components/Constructor/Form/Elements';
import { FormConstructorProps, FormElement, IOption } from '@/components/Constructor/Form/interface';
import http from '@/service';

const FormConstructor: FC<FormConstructorProps> = ({ formElements, loading }) => {
  const [options, setOptions] = useState<unknown>({});
  const [pending, setPending] = useState(true);
  const form = useFormContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const checkType = (data: IOption[] | string | undefined) => {
    return typeof data === 'string' ? data : '';
  };
  const fetchData = async (select: FormElement) => {
    try {
      if(typeof select.options === 'string') {
        const { data } = await http.get(`${select?.options}/list`);
        return data;
      }
    } catch (e) {
      // new ErrorHandler().checkError(e);
      return [];
    }
  };
  const fetchOptions = async (selects: FormElement[]): Promise<void> => {
    const data: any[] = [];
    for (const select of selects) {
      const response = await fetchData(select);
      if (response) {
        data.push(response);
      }
    }

    const refactoredData = data.reduce((result, item, index) => {
      result[checkType(selects[index]?.options)] = item;

      return result;
    }, {});

    setOptions(refactoredData);
    setPending(false);
  };

  useEffect(() => {
    const formSelects: FormElement[] = formElements.filter((element) => element.options && typeof element.options === 'string');
    if (formSelects.length) {
      fetchOptions(formSelects);
    } else {
      setPending(false);
    }
  }, []);

  if(pending) {
    return (
      <Stack alignItems={'center'}>
        <CircularProgress size={'20px'} />
      </Stack>
    );
  }

  return (
    <Grid
      container
      className={'FormInner'}
      spacing={2}
    >
      {!pending && formElements.map((el: FormElement, index: number) => (
        <When
          key={index}
          condition={el.condition ? el.condition(form) : true}
        >
          <Grid
            item
            key={index}
            xs={isMobile ? 12 : el.xs}
          >
            {getFormElement(el, options, loading)}
          </Grid>
        </When>
      ))}
    </Grid>
  );
};

export default FormConstructor;
