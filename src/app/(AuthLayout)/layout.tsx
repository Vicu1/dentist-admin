'use client';

import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/system';
import Image from 'next/image';
import { ReactNode } from 'react';

import logo from '@/assets/logo.png';

const AuthLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <main className={'auth-layout'}>
      <Image
        src={logo}
        width={isMobile ? 250 : 500}
        height={200}
        alt={'Logo'}
      />
      {children}
    </main>
  );
};

export default AuthLayout;
