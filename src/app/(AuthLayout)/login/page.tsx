'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import FormInput from '@/components/Form/FormInput';
import FormWrapper from '@/components/Form/FormWrapper';
import LoginFormStyled from '@/features/Login/styled';
import validation from '@/features/Login/validation';

interface LoginInterface {
  email: string;
  password: string
}

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<LoginInterface>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validation),
  });

  const onSubmit = async (data: LoginInterface) => {
    try {
      setLoading(true);
      console.log(data);
      enqueueSnackbar('Successfully login');
      router.push('/');
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LoginFormStyled>
      <Typography variant={'h3'}>Добро пожаловать</Typography>
      <Typography variant={'h6'}>Пожалуйста, войдите в панель администратора</Typography>
      <Card
        elevation={0}
      >
        <FormWrapper
          className={'LoginFormInner'}
          form={form}
          onSubmit={onSubmit}
        >
          <Grid
            container
            spacing={2}
          >
            <Grid
              item
              xs={12}
            >
              <FormInput
                label={'Email'}
                disabled={loading}
                name={'email'}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormInput
                type={'password'}
                label={'Password'}
                disabled={loading}
                name={'password'}
              />
            </Grid>
          </Grid>
          <Stack
            alignItems={'center'}
            marginTop={'20px'}
          >
            <Button
              type={'submit'}
              loading={loading}
              disabled={loading}
              color={'primary'}
            >
              Login
            </Button>
          </Stack>
        </FormWrapper>
      </Card>
    </LoginFormStyled>
  );
};

export default LoginPage;
