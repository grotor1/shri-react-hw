import styles from './styles.module.css';
import FilmListCard from '@/components/FilmList/FilmListCard/FilmListCard';
import {ReactNode} from 'react';
import {Movie} from '@/types/types';

export default function FilmList(
  {
    children,
    movies
  }:
    {
      children: ReactNode
      movies: Movie[],
    }
) {
  return (
    <div className={styles.filmList__container}>
      {movies.map(({title, genre, id, posterUrl}) =>
        <FilmListCard key={id} id={id} title={title} posterUrl={posterUrl} genre={genre}>
          {children}
        </FilmListCard>
      )}
    </div>
  );
}
