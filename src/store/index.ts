import { configureStore } from '@reduxjs/toolkit';

import userSlice from '@/store/features/userSlice';

export const store = configureStore({
  reducer: {
    userSlice,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
