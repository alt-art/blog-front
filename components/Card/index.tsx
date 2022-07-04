import styles from './index.module.scss';
import Description from './Description';

type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps) {
  return (
    <div className={styles.card}>
      <h1>{title}</h1>
      <Description>{description}</Description>
    </div>
  );
}

export default Card;
