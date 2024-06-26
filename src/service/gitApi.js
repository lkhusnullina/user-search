import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const GitApi = createApi({
  reducerPath: 'gitApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: ({username, page, sort}) => ({
        url: `/search/users?q=${username}&page=${page}${sort === null ? '' : '&sort=repositories&order=' + sort}`,
      }),
      providesTags: ['Users'],
    }),
  }),
});

export const { useLazyGetUsersQuery } = GitApi;
export default GitApi.reducer;
