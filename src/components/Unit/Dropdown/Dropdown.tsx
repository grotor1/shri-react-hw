import {useRef, useState} from 'react';
import styles from './styles.module.css';
import Input from '@/components/Unit/Input/Input';
import Image from 'next/image';
import Portal from '@/components/Util/Portal';

export default function Dropdown
({
   onChange,
   placeholder,
   values,
   defaultIndex,
 }:
   {
     onChange: (s: number) => void
     placeholder?: string,
     values: string[],
     defaultIndex?: number,
   }) {
  const [curChoice, setCurChoice] = useState<number>(defaultIndex ?? -1);
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [coords, setCoords] = useState({top: 0, left: 0});
  const input = useRef<HTMLDivElement>(null);

  const dropdownOpeningHandle = () => {
    const rect = input.current?.getBoundingClientRect();
    setCoords({
      left: rect?.left ?? 0,
      top: (rect?.top ?? 0) + (rect?.height ?? 0) + 4,
    });
    setIsOpened(!isOpened);
  };

  const itemClickHandler = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setCurChoice(index);
    onChange(index);
  };

  return (
    <div className={styles.select__wrapper} onClick={dropdownOpeningHandle} ref={input}>
      <Input readonly={true} type={'text'} value={curChoice != -1 ? values[curChoice] : ''} placeholder={placeholder}
             isActiveProp={isOpened}/>

      <Image className={`${styles.select__icon} ${isOpened && styles.select__icon_opened}`}
             src={'/dropdown-arrow.svg'} width={20} height={20} alt={'dropdown arrow'}/>

      {isOpened && <Portal mountId={'dropdown-layer'}>
        <div className={styles.dropdown__wrapper}>
          <div className={styles.dropdown__container} style={{top: coords.top, left: coords.left}}>
            {values.map((item, index) =>
              <button className={styles.dropdown__item}
                      key={index}
                      onClick={(event) => itemClickHandler(event, index)}>
                {item}
              </button>
            )}
          </div>
        </div>
      </Portal>}
    </div>
  );
}
