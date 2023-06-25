import React, {MouseEvent, ReactNode} from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

export default function Modal({children, onClose}: {children: ReactNode, onClose: (e: MouseEvent) => void}) {
  return (
    <div className={styles.modal__wrapper} onClick={onClose}>
      <div className={styles.modal__container} onClick={(e) => e.stopPropagation()}>
        <button className={styles.modal__close} onClick={onClose}>
          <Image src={'/close.svg'} alt={'close'} width={16} height={16}/>
        </button>

        {children}
      </div>
    </div>
  )
}
