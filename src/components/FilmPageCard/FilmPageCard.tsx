'use client';

import styles from './styles.module.css';
import Image from 'next/image';
import TicketCounter from '@/components/TicketCounter/TicketCounter';
import getGenre from '@/utils/getGenre';
import {Movie} from '@/types/types';
import React from 'react';

export const FilmContext = React.createContext({id: ''});

export default function FilmPageCard(
  {
    title,
    posterUrl,
    releaseYear,
    description,
    genre,
    id,
    rating,
    director
  }: Movie
) {
  return (
    <div className={styles.filmCard__container}>
      <Image className={styles.filmCard__image} src={posterUrl} alt={`${title} poster`} width={400} height={500}/>

      <div className={styles.filmCard__info}>
        <div className={styles.filmCard__infoTop}>
          <div className={styles.filmCard__infoTopTitleContainer}>
            <h1 className={styles.filmCard__infoTopTitle}>{title}</h1>

            <FilmContext.Provider value={{id}}>
              <TicketCounter/>
            </FilmContext.Provider>
          </div>

          <div className={styles.filmCard__fieldsContainer}>
            <div className={styles.filmCard__field}><span
              className={styles.filmCard__fieldName}>Жанр:</span> {getGenre(genre)}</div>

            <div className={styles.filmCard__field}><span
              className={styles.filmCard__fieldName}>Год выпуска:</span> {releaseYear}</div>

            <div className={styles.filmCard__field}><span
              className={styles.filmCard__fieldName}>Рейтинг:</span> {rating}</div>

            <div className={styles.filmCard__field}><span
              className={styles.filmCard__fieldName}>Режиссер:</span> {director}</div>
          </div>
        </div>

        <div className={styles.filmCard__infoDescription}>
          <span className={styles.filmCard__infoDescriptionTitle}>Описание</span>
          <span className={styles.filmCard__infoDescriptionText}>{description}</span>
        </div>
      </div>
    </div>
  );
}
