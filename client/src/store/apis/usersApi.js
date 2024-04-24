import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({}),
  endpoints(builder) {
    return {
      fetchUsers: builder.query({
        providesTags: ['users'],
        query: () => {
          return {
            url: '/api/current_user',
            method: 'GET',
          };
        },
      }),

      addUserCredits: builder.mutation({
        invalidatesTags: [{ type: 'users' },{ type: 'surveys' }],
        query: (credits) => {
          return {
            url: '/api/add_credits',
            body: { credits: credits },
            method: 'POST',
          };
        },
      }),
    };
  },
});

export const { useFetchUsersQuery, useAddUserCreditsMutation } = usersApi;
export { usersApi };
