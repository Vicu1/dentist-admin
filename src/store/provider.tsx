'use client';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { closeSnackbar, SnackbarProvider } from 'notistack';
import { ReactNode } from 'react';

import StyledSnackbar from '@/components/Snackbar/styles';

const Providers = (
  { children }: { children: ReactNode },
) => {
  return (
    <>
      <SnackbarProvider
        maxSnack={3}
        variant={'success'}
        action={snackbarKey =>  (
          <IconButton
            color={'inherit'}
            onClick={() => closeSnackbar(snackbarKey)}
          >
            <CloseIcon />
          </IconButton>)}
        transitionDuration={{ enter: 500, exit: 500 }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
        Components={{
          success: StyledSnackbar,
          error: StyledSnackbar,
          warning: StyledSnackbar,
          info: StyledSnackbar,
        }}
      />
      {children}
    </>
  );
};
export default Providers;
