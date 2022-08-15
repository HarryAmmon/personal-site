import styles from "./Footer.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()}</p>
  </footer>
);
