import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './usersSlice';
import { GitApi } from '../service/gitApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [GitApi.reducerPath]: GitApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(GitApi.middleware),
});
