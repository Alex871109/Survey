import { configureStore } from '@reduxjs/toolkit';
import { usersApi } from './apis/usersApi';
import { surveysApi } from './apis/surveysApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [surveysApi.reducerPath]: surveysApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(usersApi.middleware)
      .concat(surveysApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchUsersQuery, useAddUserCreditsMutation, useLogoutUsersMutation } from './apis/usersApi';
export {
  useFetchSurveysQuery,
  useAddSurveyMutation,
  useDeleteSurveyMutation,
} from './apis/surveysApi';
