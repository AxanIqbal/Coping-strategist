import { backEndApi as api, providesList } from './base';

export const postApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllPost: build.query({
      query: (params) => ({
        url: 'post',
        params,
      }),
      providesTags: (result) => providesList(result, 'Post'),
    }),
    createPost: build.mutation({
      query: (arg) => ({
        url: 'post',
        method: 'POST',
        body: arg,
      }),
      invalidatesTags: [{ type: 'Post', id: 'LIST' }],
    }),
    deletePost: build.mutation({
      query: (id) => ({
        url: `post/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Post', id }]
      ,
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useCreatePostMutation,
  useDeletePostMutation,
} = postApi;
