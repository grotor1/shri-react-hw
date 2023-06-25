'use client';

import styles from './styles.module.css';
import Image from 'next/image';
import getGenre from '@/utils/getGenre';
import {ReactNode} from 'react';
import {Genre} from '@/types/types';
import {FilmContext} from '@/components/FilmPageCard/FilmPageCard';
import Link from 'next/link';

export default function FilmListCard({title, posterUrl, genre, id, children}: {
  title: string,
  posterUrl: string,
  id: string,
  genre: Genre,
  children: ReactNode
}) {

  return (
    <div className={styles.filmCard__container}>
      <Image src={posterUrl} alt={`${title} poster`} width={100} height={120} className={styles.filmCard__poster}/>

      <div className={styles.filmCard__textInfo}>
        <Link href={`/film/${id}`} className={styles.filmCard__title}>{title}</Link>
        <span className={styles.filmCard__genre}>{getGenre(genre)}</span>
      </div>

      <FilmContext.Provider value={{id}}>
        {children}
      </FilmContext.Provider>
    </div>
  );
}
