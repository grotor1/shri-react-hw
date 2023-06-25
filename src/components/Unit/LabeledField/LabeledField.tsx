import styles from './styles.module.css';

export default function LabeledField({title, children}: { title: string, children: React.ReactNode }) {
  return (
    <div className={styles.labeledField__container}>
      <span className={styles.labeledField__label}>{title}</span>

      {children}
    </div>
  );
}
