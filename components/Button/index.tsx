import styles from './index.module.scss';

function Button({ children }: { children: React.ReactNode }) {
  return <button className={styles.button}>{children}</button>;
}

export default Button;
