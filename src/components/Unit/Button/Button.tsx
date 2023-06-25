import React, {ReactNode} from 'react';
import styles from './styles.module.css';

export default function Button({outline, onClick, children}: {outline?: boolean, onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void, children: ReactNode}) {
  return (
    <button className={`${styles.button} ${outline ? styles.button_outline : styles.button_filled}`} onClick={onClick}>
      {children}
    </button>
  )
}
