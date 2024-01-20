import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './apis/usersApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(usersApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchUsersQuery } from './apis/usersApi';
