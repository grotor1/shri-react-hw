import styles from './styles.module.css';
import {useState} from 'react';

export default function Input
({
   onChange,
   readonly,
   value,
   placeholder,
   isActiveProp,
   type,
 }:
   {
     onChange?: (s: string) => void
     readonly?: boolean,
     value?: string,
     placeholder?: string,
     isActiveProp?: boolean,
     type: 'text' | 'number',
   }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`${styles.input__container} ${(isActive || isActiveProp) && styles.input__container_active}`}>
      <input className={`${styles.input} ${(isActive || isActiveProp) && styles.input_active}`} type={type} placeholder={placeholder} readOnly={readonly} value={value}
             onChange={(e) => onChange?.(e.target.value)} onFocus={() => setIsActive(true)}
             onBlur={() => setIsActive(false)}/>
    </div>
  );
}
