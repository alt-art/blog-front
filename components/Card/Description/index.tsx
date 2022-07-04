import styles from './index.module.scss';

function Description({ children }: { children: React.ReactNode }) {
  return <p className={styles.description}>{children}</p>;
}

export default Description;
