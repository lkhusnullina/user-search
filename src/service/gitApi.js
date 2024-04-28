import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const GitApi = createApi({
  reducerPath: 'gitApi',
  tagTypes: ['Users'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.github.com/',
  }),
})
export const {} = GitApi
export default GitApi.reducer

