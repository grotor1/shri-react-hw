import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Review} from '@/types/types';

export const reviewApi = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery(
    {baseUrl: 'http://localhost:3001/api/'}),
  endpoints: (build) => ({
    getReviews: build.query<Review[], void>({
      query() {
        return 'reviews';
      }
    }),
  })
});

export const {useGetReviewsQuery} = reviewApi;
