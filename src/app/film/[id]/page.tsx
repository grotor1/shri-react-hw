'use client'

import styles from './page.module.css';
import FilmPageCard from '@/components/FilmPageCard/FilmPageCard';
import ReviewCard from '@/components/ReviewCard/ReviewCard';
import {useGetMovieQuery} from '@/store/services/movieApi';
import {useGetReviewsQuery} from '@/store/services/reviewsApi';

export default function FilmPage({params}: {params: {id: string}}) {
  const movie = useGetMovieQuery(params.id).data;
  const reviews = (useGetReviewsQuery().data ?? []).filter(({id}) => movie?.reviewIds.includes(id));

  return (
    <div className={styles.filmPage__container}>
      {
        movie && <FilmPageCard title={movie.title} posterUrl={movie.posterUrl} releaseYear={movie.releaseYear}
                               description={movie.description} genre={movie.genre} id={movie.id} rating={movie.rating}
                               director={movie.director} reviewIds={movie.reviewIds}/>

      }
      {
        reviews.map((review) =>
          <ReviewCard key={review.id} id={review.id} name={review.name} text={review.text} rating={review.rating}/>
        )
      }
    </div>
  );
}
