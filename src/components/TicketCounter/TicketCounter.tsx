'use client';

import styles from './styles.module.css';
import Image from 'next/image';
import {MouseEvent, useContext, useState} from 'react';
import {FilmContext} from '@/components/FilmPageCard/FilmPageCard';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '@/store/store';
import {selectProductAmount} from '@/store/features/cart/selectors';
import {cartActions} from '@/store/features/cart';
import Portal from '@/components/Util/Portal';
import ConfirmModal from '@/components/Unit/Modals/ConfirmModal/ConfirmModal';

export default function TicketCounter() {
  const {id} = useContext(FilmContext);
  const [isOpen, setIsOpen] = useState(false);


  const amount = useSelector((state: RootState) => selectProductAmount(state, id));
  const dispatch = useDispatch();

  const closeHandler = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const increment = (e: MouseEvent) => {
    e.stopPropagation();
    return amount < 30 ? dispatch(cartActions.increment(id)) : null;
  };

  const decrementHandler = (e: MouseEvent) => {
    e.stopPropagation();
    if (amount == 1) {
      setIsOpen(true);
    } else {
      decrement();
    }
  };

  const decrement = () => {
    setIsOpen(false);
    return amount > 0 ? dispatch(cartActions.decrement(id)) : null;
  };


  return (
    <>
      <div className={styles.ticketCounter__container}>
        <button className={`${styles.ticketCounter__button} ${amount === 0 && styles.ticketCounter__button_disabled}`}
                onClick={decrementHandler}>
          <Image src={'/minus.svg'} alt={'minus'} height={12} width={12}/>
        </button>

        <span className={styles.ticketCounter__count}>{amount}</span>

        <button className={`${styles.ticketCounter__button} ${amount === 30 && styles.ticketCounter__button_disabled}`}
                onClick={increment}>
          <Image src={'/plus.svg'} alt={'plus'} height={12} width={12}/>
        </button>
      </div>

      {isOpen &&
        <Portal mountId={'modal-layer'}>
          <ConfirmModal onClose={closeHandler} title={'Удаление билета'} text={'Вы уверены, что хотите удалить билет?'}
                        onConfirm={decrement}/>
        </Portal>
      }
    </>
  );
}
