import { createApi } from '@reduxjs/toolkit/dist/query/react';
import { baseQueryWithReAuth } from './reAuth';

export const backEndApi = createApi({
  reducerPath: 'base',
  baseQuery: baseQueryWithReAuth,
  tagTypes: ['Clinic', 'Doctor', 'Favorite', 'File', 'Post', 'User'],
  endpoints: (build) => ({
    apiTest: build.query({
      query: () => ({
        url: '/',
      }),
    }),
  }),
});

export function providesList(resultsWithIds, tagType) {
  return resultsWithIds
    ? [
      { type: tagType, id: 'LIST' },
      ...resultsWithIds.map(({ id }) => ({ type: tagType, id })),
    ]
    : [{ type: tagType, id: 'LIST' }];
}

export const { useApiTestQuery } = backEndApi;
