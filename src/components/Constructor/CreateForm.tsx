'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/system';
import { useMutation } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import FormConstructor from '@/components/Constructor/Form';
import { FormElement } from '@/components/Constructor/Form/interface';
import FormWrapper from '@/components/Form/FormWrapper';
import http from '@/service';

interface CreateFormProps {
    validation: any,
    formElements: FormElement[],
    module: string,
    setCreateMode?: (value: boolean) => void,
    refetch?: () => void
}

const CreateForm: FC<CreateFormProps> = ({ validation, formElements, module, setCreateMode, refetch }) => {
  const form = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validation)
  });
  const { mutate, isPending } = useMutation({
    mutationFn: (data: any) => {
      return http.post(module, data);
    },
    onSuccess: () => {
      enqueueSnackbar('Успешно создано');
      if (setCreateMode) {
        setCreateMode(false);
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
        <Button type={'submit'}>Создавать</Button>
      </Stack>
    </FormWrapper>
  );
};
export default CreateForm;
