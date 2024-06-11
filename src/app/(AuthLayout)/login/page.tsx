'use client';
import { yupResolver } from '@hookform/resolvers/yup';
import { Card, Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useMutation } from '@tanstack/react-query';
import { setCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import { useForm } from 'react-hook-form';

import Button from '@/components/Button';
import FormInput from '@/components/Form/FormInput';
import FormWrapper from '@/components/Form/FormWrapper';
import LoginFormStyled from '@/features/Login/styled';
import validation from '@/features/Login/validation';
import http from '@/service';
import { login } from '@/store/features/userSlice';
import { useAppDispatch } from '@/store/hooks';

interface LoginInterface {
  email: string;
  password: string
}

const LoginPage = () => {
  const router = useRouter();
  const form = useForm<LoginInterface>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver: yupResolver(validation),
  });
  const dispatch = useAppDispatch();
  const { mutate, isPending } = useMutation({
    mutationFn: (login: LoginInterface) => {
      return http.post('auth/login', login);
    },
    onSuccess: ({ data }) => {
      dispatch(login(data));
      setCookie('user', data);
      enqueueSnackbar('Успешный вход');
      router.push('/');
    }
  });
  const onSubmit = async (loginInterface: LoginInterface) => {
    mutate(loginInterface);
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
                label={'Электронная почта'}
                disabled={isPending}
                name={'email'}
              />
            </Grid>
            <Grid
              item
              xs={12}
            >
              <FormInput
                type={'password'}
                label={'Пароль'}
                disabled={isPending}
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
              loading={isPending}
              disabled={isPending}
              color={'primary'}
            >
              Войти
            </Button>
          </Stack>
        </FormWrapper>
      </Card>
    </LoginFormStyled>
  );
};

export default LoginPage;
