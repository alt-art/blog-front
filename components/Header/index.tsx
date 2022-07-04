import Button from '../Button';
import styles from './index.module.scss';
import { AiFillGithub } from 'react-icons/ai';
import { FiLogIn } from 'react-icons/fi';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>alt-art blog</h1>
      <div>
        <Button>
          <AiFillGithub />
          &nbsp;GitHub
        </Button>
        <Button>
          <FiLogIn />
          &nbsp;Login
        </Button>
      </div>
    </header>
  );
}

export default Header;
