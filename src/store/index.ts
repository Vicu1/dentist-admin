import { configureStore } from '@reduxjs/toolkit';

import confirmDialog from '@/store/features/confirmDialogSlice';
import userSlice from '@/store/features/userSlice';

export const store = configureStore({
  reducer: {
    userSlice,
    confirmDialog,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
