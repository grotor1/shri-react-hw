'use client';

import styles from './styles.module.css';
import LabeledField from '@/components/Unit/LabeledField/LabeledField';
import Input from '@/components/Unit/Input/Input';
import Dropdown from '@/components/Unit/Dropdown/Dropdown';
import getGenre from '@/utils/getGenre';
import {Genre} from '@/types/types';
import {useGetCinemasQuery} from '@/store/services/cinemasApi';
import {useDispatch, useSelector} from 'react-redux';
import {filterActions} from '@/store/features/filters';
import {RootState} from '@/store/store';
import {selectCinemaFilter, selectGenreFilter, selectNameFilter} from '@/store/features/filters/selectors';

export default function FilterColumn() {
  const genres: Genre[] = ['comedy', 'horror', 'action', 'fantasy'];

  const {data} = useGetCinemasQuery();

  const dispatch = useDispatch();

  const cinemaId = useSelector((state: RootState) => selectCinemaFilter(state));
  const cinemaIndex = data?.findIndex((item) => item.id === cinemaId);
  const genre = useSelector((state: RootState) => selectGenreFilter(state));
  const genreIndex = genres.findIndex((item) => item === genre);
  const name = useSelector((state: RootState) => selectNameFilter(state));

  return (
    <div className={styles.filterColumn__container}>
      <span className={styles.filterColumn__title}>Фильтр поиска</span>

      <div className={styles.filterColumn__filtersContainer}>
        <LabeledField title={'Название'}>
          <Input onChange={(s) =>
            dispatch(filterActions.setNameFilter(s))} type={'text'} placeholder={'Введите название'} value={name}/>
        </LabeledField>

        <LabeledField title={'Жанр'}>
          <Dropdown onChange={(s) =>
            dispatch(filterActions.setGenreFilter(genres[s]))} placeholder={'Выберите жанр'}
                    values={genres.map(item => getGenre(item) ?? '')} defaultIndex={genreIndex}/>
        </LabeledField>

        <LabeledField title={'Кинотеатр'}>
          <Dropdown onChange={(s) =>
            dispatch(filterActions.setCinemaFilter(data?.[s].id))} placeholder={'Выберите кинотеатр'}
                    values={data?.map(item => item.name) ?? []} defaultIndex={cinemaIndex}/>
        </LabeledField>
      </div>
    </div>
  );
}
