import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const GitApi = createApi({
  reducerPath: 'gitApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: () => ({
        url: '/search/users?q=lkhusnullina',
      }),
      providesTags: ['Users'],
    }),
  }),
});

export const { useGetAllUsersQuery } = GitApi;
export default GitApi.reducer;
