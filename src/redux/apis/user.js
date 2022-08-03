import { backEndApi as api, providesList } from './base';

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    myProfile: build.query({
      query: () => ({
        url: 'auth/me',
      }),
      providesTags: ['User'],
    }),
    updateProfile: build.mutation({
      query: (arg) => ({
        url: 'user',
        method: 'PATCH',
        body: arg,
      }),
      invalidatesTags: ['User'],
    }),
    getAllUsers: build.query({
      query: () => ({
        url: 'user',
      }),
      providesTags: (result) => providesList(result, 'user'),
    }),
    getAllMerchants: build.query({
      query: () => ({
        url: 'user/merchants',
      }),
      providesTags: (result) => providesList(result, 'user'),
    }),
  }),
});

export const {
  useMyProfileQuery, useUpdateProfileMutation, useGetAllUsersQuery, useGetAllMerchantsQuery,
} = userApi;
