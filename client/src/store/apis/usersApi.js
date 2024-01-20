import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const usersApi = createApi({
  reducerPath: 'users',
  baseQuery: fetchBaseQuery({
    // baseUrl: 'http://localhost:3000',
  }),
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



      //     removeUser:  builder.mutation({
      //         invalidatesTags: [{type:'users'}],
      //         query: (user) => {
      //             return {
      //                 url: `/users/${user.id}`,
      //                 method: 'DELETE',
      //             };
      //         }
      //     }),
    };
  },
});

export const { useFetchUsersQuery } = usersApi;
export { usersApi };
