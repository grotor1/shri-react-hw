import styles from './styles.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <div className={`${styles.footer}`}>
      <Link className={`${styles.text}`} href={'/faq'}>Вопросы-ответы</Link>

      <Link className={`${styles.text}`} href={'/about-us'}>О нас</Link>
    </div>
  );
}
