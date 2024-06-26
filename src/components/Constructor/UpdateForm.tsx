'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/system';
import { useMutation, useQuery } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import FormConstructor from '@/components/Constructor/Form';
import { FormElement } from '@/components/Constructor/Form/interface';
import FormWrapper from '@/components/Form/FormWrapper';
import http from '@/service';
import getData from '@/service/getData';

interface UpdateFormProps {
    validation: any,
    formElements: FormElement[],
    module: string,
    setSelectedItem?: (value: null) => void,
    refetch?: () => void,
    selectedItem?: any
}

const UpdateForm: FC<UpdateFormProps> = ({ validation, formElements, module, setSelectedItem, refetch, selectedItem }) => {
  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validation)
  });
  useQuery({
    queryKey: ['update'],
    queryFn: async () => {
      try {
        const response = await getData(`${module}/${selectedItem.id}`);
        form.reset(response);
      } catch (e: any) {
        enqueueSnackbar(e.data.message, { variant: 'error' });
      }
    },
  });
  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => {
      return http.put(`${module}/${selectedItem.id}`, data);
    },
    onSuccess: () => {
      enqueueSnackbar('Успешно отредактировано');
      if (setSelectedItem) {
        setSelectedItem(null);
      }
      if (refetch) {
        refetch();
      }
    }
  });

  return (
    <FormWrapper
      form={form}
      onSubmit={mutate}
    >
      <FormConstructor
        formElements={formElements}
        loading={isPending}
      />
      <Stack
        mt={'20px'}
        alignItems={'center'}
      >
        <Button type={'submit'}>Редактировать</Button>
      </Stack>
    </FormWrapper>
  );
};
export default UpdateForm;
