import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {Movie} from '@/types/types';

export const movieApi = createApi({
  reducerPath: 'movie',
  baseQuery: fetchBaseQuery(
    {baseUrl: 'http://localhost:3001/api/'}),
  endpoints: (build) => ({
    getMovies: build.query<Movie[], string | void>({
      query(cinemaId?: string) {
        return cinemaId ? `movies?cinemaId=${cinemaId}` : "movies";
      }
    }),
    getMovie: build.query<Movie, string>({
      query(movieId: string){
        return `movie?movieId=${movieId}`;
      }
    })
  })
});

export const {useGetMoviesQuery, useGetMovieQuery} = movieApi;
