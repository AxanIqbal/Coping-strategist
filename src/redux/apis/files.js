import {backEndApi as api, providesList} from './base';

export const filesApi = api.injectEndpoints({
  endpoints: build => ({
    uploadFile: build.mutation({
      query: body => ({
        url: 'patient/file',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'File', id: 'LIST'}],
    }),
    getAllFiles: build.query({
      query: () => ({
        url: 'patient/file',
      }),
      providesTags: result => providesList(result, 'File'),
    }),
    assignFile: build.mutation({
      query: body => ({
        url: 'patient/assign',
        method: 'POST',
        body,
      }),
      // invalidatesTags: [{type: 'File', id: 'LIST'}],
    }),
  }),
});

export const {
  useGetAllFilesQuery,
  useUploadFileMutation,
  useAssignFileMutation,
} = filesApi;
