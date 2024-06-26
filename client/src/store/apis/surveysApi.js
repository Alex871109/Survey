import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const surveysApi = createApi({
  reducerPath: 'surveys',
  baseQuery: fetchBaseQuery({}),
  endpoints(builder) {
    return {
      fetchSurveys: builder.query({
        providesTags: ['surveys'],
        keepUnusedDataFor: 5,
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

      deleteSurvey: builder.mutation({
        invalidatesTags: [{ type: 'surveys' }],
        query: (id) => {
          return {
            url: `/api/surveys/delete/${id}`,
            method: 'DELETE',
          };
        },
      }),
    };
  },
});

export const { useFetchSurveysQuery, useAddSurveyMutation, useDeleteSurveyMutation } = surveysApi;
export { surveysApi };
