import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const surveysApi = createApi({
  reducerPath: 'surveys',
  baseQuery: fetchBaseQuery({}),
  endpoints(builder) {
    return {
      fetchSurveys: builder.query({
        providesTags: ['surveys'],

        query: () => {
          return {
            url: '/api/surveys',
            method: 'GET',
          };
        },
      }),

      addSurvey: builder.mutation({
        invalidatesTags: [{ type: 'surveys' }],
        query: (survey) => {
          return {
            url: '/api/surveys/new',
            body: survey,
            method: 'POST',
          };
        },
      }),
    };
  },
});

export const { useFetchSurveysQuery, useAddSurveyMutation } = surveysApi;
export { surveysApi };
