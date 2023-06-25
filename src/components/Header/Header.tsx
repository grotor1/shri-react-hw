import styles from './styles.module.css';
import Link from 'next/link';
import BasketCounter from '@/components/BasketCounter/BasketCounter';

export default function Header() {
  return (
    <div className={`${styles.header}`}>
      <Link href={'/'} className={`${styles.logo}`}>Билетопоиск</Link>

      <Link href={'/basket'}>
        <BasketCounter/>
      </Link>
    </div>
  );
}
