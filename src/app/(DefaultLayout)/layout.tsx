'use client';
import { useTheme } from '@mui/material';
import { ReactNode, useState } from 'react';

import Header from '@/components/Header';
import { MainContentStyled } from '@/components/Header/styled';
import User from '@/components/User';

const DefaultLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => {
  const [open, setOpen] = useState<boolean>(false);
  const theme = useTheme();
  return (
    <main style={{ position: 'relative' }}>
      <Header
        open={open}
        setOpen={setOpen}
      />
      <MainContentStyled
        theme={theme}
        open={open}
      >
        <User />
        {children}
      </MainContentStyled>
    </main>
  );
};

export default DefaultLayout;
