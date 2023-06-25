import styles from './styles.module.css';
import Image from 'next/image';
import {Review} from '@/types/types';

export default function ReviewCard({name, text, rating}: Review) {
  return (
    <div className={styles.reviewCard__container}>
      <div className={styles.reviewCard__avatar}>
        <Image src={'/photo.svg'} alt={'avatar'} width={32} height={32}/>
      </div>

      <div className={styles.reviewCard__info}>
        <div className={styles.reviewCard__top}>
          <span className={styles.reviewCard__bold}>{name}</span>
          <div >Оценка: <span className={styles.reviewCard__bold}>{rating}</span></div>
        </div>

        <p>
          {text}
        </p>
      </div>
    </div>
  )
}
