import styles from './index.module.scss';

function Grid({ children }: { children: React.ReactNode }) {
  return <div className={styles.grid}>{children}</div>;
}

export default Grid;
