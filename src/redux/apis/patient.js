import {backEndApi as api} from './base';

export const patientApi = api.injectEndpoints({
  endpoints: build => ({
    getPatient: build.query({
      query: id => `patient/${id}`,
    }),
  }),
});

export const {useGetPatientQuery} = patientApi;
