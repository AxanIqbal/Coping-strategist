import { backEndApi as api } from './base'

export const authApi = api.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation({
      query: (queryArg) => ({
        url: 'auth/login/',
        method: 'POST',
        body: queryArg
      })
    }),
    register: build.mutation({
      query: arg => ({
        url: 'auth/register',
        method: 'POST',
        body: arg
      })
    }),
  })
})

export const {
  useLoginMutation,
  useRegisterMutation
} = authApi
