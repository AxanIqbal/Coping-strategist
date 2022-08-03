import {backEndApi as api, providesList} from './base';

export const favoriteApi = api.injectEndpoints({
  endpoints: build => ({
    getAllFavorites: build.query({
      query: () => ({
        url: 'favorites',
      }),
      providesTags: result => providesList(result, 'Favorite'),
    }),
    addFavorite: build.mutation({
      query: body => ({
        url: 'favorites',
        method: 'POST',
        body,
      }),
      invalidatesTags: [{type: 'Favorite', id: 'LIST'}],
    }),
    removeFavorite: build.mutation({
      query: body => ({
        url: 'favorites',
        method: 'DELETE',
        body,
      }),
      invalidatesTags: result => [{type: 'Favorite', id: result.id}],
    }),
  }),
});

export const {
  useGetAllFavoritesQuery,
  useAddFavoriteMutation,
  useRemoveFavoriteMutation,
} = favoriteApi;
