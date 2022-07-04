import styles from './index.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="https://github.com/alt-art/blog-front">
        © {new Date().getFullYear()}, Licensed under the MIT License.
      </a>
    </footer>
  );
}

export default Footer;
