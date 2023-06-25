'use client';

import styles from './page.module.css';
import FilmList from '@/components/FilmList/FilmList';
import TicketCounter from '@/components/TicketCounter/TicketCounter';
import TicketDeleter from '@/components/TicketDeleter/TicketDeleter';
import {useSelector} from 'react-redux';
import {selectCartModule, selectTotalAmount} from '@/store/features/cart/selectors';
import {RootState} from '@/store/store';
import {useGetMoviesQuery} from '@/store/services/movieApi';

export default function Basket() {
  const {data} = useGetMoviesQuery();

  const amount = useSelector((state: RootState) => selectTotalAmount(state));
  const cart = useSelector((state: RootState) => selectCartModule(state));
  console.log(cart);

  const cartMovies = data?.filter((movie) => Object.keys(cart).includes(movie.id)) ?? []

  return (
    <div className={styles.basketPage__container}>
      <div className={styles.basketPage__list}>
        <FilmList movies={cartMovies}>
          <TicketCounter/>
          <TicketDeleter/>
        </FilmList>
      </div>

      <div className={styles.basketPage__total}>
        <span>Итого билетов:</span>
        <span>{amount}</span>
      </div>
    </div>
  );
}
