import { enqueueSnackbar } from 'notistack';

const queryConfig = {
  defaultOptions: {
    mutations: {
      onSuccess: (data: any) => {
        return data.data;
      },
      onError: (error: any) => {
        enqueueSnackbar(Array.isArray(error.data.message) ?
          error.data.message?.join('') : error.data.message, { variant: 'error' });
      },
    },
  }
};
export default queryConfig;
