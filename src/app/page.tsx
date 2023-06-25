'use client';

import styles from './page.module.css';
import FilterColumn from '@/components/FilterColumn/FilterColumn';
import FilmList from '@/components/FilmList/FilmList';
import TicketCounter from '@/components/TicketCounter/TicketCounter';
import {useGetMoviesQuery} from '@/store/services/movieApi';
import {useSelector} from 'react-redux';
import {selectCinemaFilter, selectGenreFilter, selectNameFilter} from '@/store/features/filters/selectors';
import {RootState} from '@/store/store';

export default function Home() {
  const cinema = useSelector((state: RootState) => selectCinemaFilter(state));

  const movies = useGetMoviesQuery(cinema).data ?? [];

  const genre =  useSelector((state: RootState) => selectGenreFilter(state));
  const name =  useSelector((state: RootState) => selectNameFilter(state));

  const localFilteredMovies = movies
    .filter((item) => !genre || item.genre === genre)
    .filter((item) => !name || item.title.includes(name));

  return (
    <div className={styles.mainPage__wrapper}>
      <FilterColumn/>

      <FilmList movies={localFilteredMovies}>
        <TicketCounter/>
      </FilmList>
    </div>
  );
}
