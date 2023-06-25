'use client';

import Image from 'next/image';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';
import {selectTotalAmount} from '@/store/features/cart/selectors';
import {RootState} from '@/store/store';

export default function BasketCounter() {
  const totalAmount = useSelector((state: RootState) => selectTotalAmount(state));
  return (
    <div className={styles.basketCounter__wrapper}>
      <div className={styles.basketCounter__counter}>
        {totalAmount}
      </div>

      <Image src={'/basket.svg'} alt={'basket'} width={32} height={32}/>
    </div>
  );
}
