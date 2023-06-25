import React, {ReactNode, useCallback, useContext, useState} from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const GroupContext = React.createContext({
  switchGroup: (newGroup: string) => {
  }, group: ''
});

export default function Accordion({children}: { children: ReactNode }) {
  const [group, setGroup] = useState<string>('');

  const switchGroup = useCallback((newGroup: string) => {
    setGroup(newGroup === group ? '' : newGroup);
  }, [group]);

  return (
    <GroupContext.Provider value={{switchGroup, group}}>
      <div className={styles.accordion__container}>
        {children}
      </div>
    </GroupContext.Provider>
  );
}

Accordion.Group = function AccordionGroup({title, children}: { title: string, children: ReactNode }) {
  const {group} = useContext(GroupContext);

  return (
    <div className={styles.accordionGroup__container}>
      <Accordion.Title title={title}/>

      {group === title && children}
    </div>
  );
};

Accordion.Title = function AccordionTitle({title}: { title: string }) {
  const {switchGroup, group} = useContext(GroupContext);

  return (
    <div className={styles.accordionTitle__container} onClick={() => switchGroup?.(title)}>
      <h2 className={styles.accordionTitle__title}>{title}</h2>
      <Image src={'/accordion-arrow.svg'} alt={'arrow'} height={32} width={32}
             className={`${styles.accordionTitle__icon} ${group === title && styles.accordionTitle__icon_active}`}/>
    </div>
  );
};
