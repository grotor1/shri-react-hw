import styles from './styles.module.css';
import Image from 'next/image';
import {MouseEvent, useContext, useState} from 'react';
import {FilmContext} from '@/components/FilmPageCard/FilmPageCard';
import {useDispatch} from 'react-redux';
import {cartActions} from '@/store/features/cart';
import Portal from '@/components/Util/Portal';
import ConfirmModal from '@/components/Unit/Modals/ConfirmModal/ConfirmModal';

export default function TicketDeleter() {
  const {id} = useContext(FilmContext);
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();

  const clickHandler = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(true);
  };

  const closeHandler = (e: MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  const deleteProduct = (e: MouseEvent) => {
    closeHandler(e);
    return dispatch(cartActions.delete(id));
  };

  return (
    <>
      <button className={styles.ticketDeleter__container} onClick={clickHandler}>
        <Image src={'/close.svg'} width={20} height={20} alt={'close'}/>
      </button>

      {isOpen &&
        <Portal mountId={'modal-layer'}>
          <ConfirmModal onClose={closeHandler} title={'Удаление билета'} text={'Вы уверены, что хотите удалить билет?'}
                        onConfirm={deleteProduct}/>
        </Portal>
      }
    </>
  );
}
