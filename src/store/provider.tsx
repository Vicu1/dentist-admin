'use client';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { closeSnackbar, SnackbarProvider } from 'notistack';
import { ReactNode } from 'react';
import { Provider } from 'react-redux';

import StyledSnackbar from '@/components/Snackbar/styles';
import queryConfig from '@/service/queryConfig';
import { store } from '@/store/index';

const queryClient = new QueryClient(queryConfig);

const Providers = (
  { children }: { children: ReactNode },
) => {
  return (
    <Provider store={store}>
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
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </Provider>
  );
};
export default Providers;
