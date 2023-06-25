import React, {MouseEvent} from 'react';
import styles from './styles.module.css';
import Button from '@/components/Unit/Button/Button';
import Modal from '@/components/Unit/Modals/Modal';

export default function ConfirmModal({title, text, onClose, onConfirm}: { title: string, text: string, onClose: (e: MouseEvent) => void, onConfirm: (e: MouseEvent) => void }) {
  return (
    <Modal onClose={onClose}>
      <div className={styles.confirmModal__container}>
        <div className={styles.confirmModal__top}>
          <h2 className={styles.confirmModal__title}>
            {title}
          </h2>
          <p>
            {text}
          </p>
        </div>

        <div className={styles.confirmModal__buttons}>
          <Button onClick={onConfirm}>
            Да
          </Button>
          <Button onClick={onClose} outline>
            Нет
          </Button>
        </div>
      </div>
    </Modal>
  );
}
