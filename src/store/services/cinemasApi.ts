import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Cinema} from '@/types/types';

export const cinemasApi = createApi({
  reducerPath: 'cinemas',
  baseQuery: fetchBaseQuery(
    {baseUrl: 'http://localhost:3001/api/'}),
  endpoints: (build) => ({
    getCinemas: build.query<Cinema[], void>({
      query() {
        return 'cinemas';
      }
    }),
  })
});

export const {useGetCinemasQuery} = cinemasApi;
