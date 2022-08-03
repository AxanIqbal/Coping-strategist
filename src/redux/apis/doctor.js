import { backEndApi as api, providesList } from './base';

export const doctorApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllDoctor: build.query({
      query: (params) => ({
        url: 'doctor',
        params,
      }),
      providesTags: (result) => providesList(result, 'Doctor'),
    }),
    getAllUnverifiedDoctor: build.query({
      query: (params) => ({
        url: 'doctor/unverified',
        params,
      }),
      providesTags: (result) => providesList(result, 'Doctor'),
    }),
    getDoctor: build.query({
      query: (id) => ({
        url: `doctor/${id}`,
      }),
      providesTags: (result, error, id) => [{ type: 'Doctor', id }],
    }),
    subscribeDoctor: build.mutation({
      query: (body) => ({
        url: 'patient/subscribe',
        body,
        method: 'POST',
      }),
      invalidatesTags: (result, error, { id }) => [{ type: 'Doctor', id }],
    }),
    getAllSubscribe: build.query({
      query: () => 'doctor/subscribed',
    }),
    verifyDoctor: build.mutation({
      query: (arg) => ({
        url: 'doctor/verify',
        method: 'POST',
        body: arg,
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Doctor', id: id.id }],
    }),
  }),
});

export const {
  useGetDoctorQuery,
  useGetAllDoctorQuery,
  useSubscribeDoctorMutation,
  useGetAllSubscribeQuery,
  useGetAllUnverifiedDoctorQuery,
  useVerifyDoctorMutation,
} = doctorApi;
