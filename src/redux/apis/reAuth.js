import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout } from '../slicers/userSlicer';

// https://coping-strategist.herokuapp.com/
// http://192.168.0.182:3000/

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/',
  credentials: 'include',
  refetchOnReconnect: true,
  // prepareHeaders: (headers, {getState}) => {
  //   const {
  //     user: {accessToken},
  //   } = getState();
  //   if (accessToken) {
  //     headers.set('authorization', `Bearer ${accessToken}`);
  //   }
  //   return headers;
  // },
});

export const baseQueryWithReAuth = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    // checking whether the mutex is locked

    console.log('Logging out');

    api.dispatch(logout());
  }

  return result;
};
