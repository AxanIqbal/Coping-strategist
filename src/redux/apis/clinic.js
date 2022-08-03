import {backEndApi as api, providesList} from './base';

export const clinicApi = api.injectEndpoints({
  endpoints: build => ({
    getAllClinic: build.query({
      query: params => ({
        url: 'clinic',
        params,
      }),
      providesTags: result => providesList(result, 'Clinic'),
    }),
    getClinic: build.query({
      query: id => ({
        url: `clinic/${id}`,
      }),
      providesTags: (result, error, id) => [{type: 'Clinic', id}],
    }),
    createAppointment: build.mutation({
      query: arg => ({
        url: 'clinic/appointment',
        method: 'POST',
        body: arg,
      }),
    }),
  }),
});

export const {
  useGetAllClinicQuery,
  useGetClinicQuery,
  useCreateAppointmentMutation,
} = clinicApi;
