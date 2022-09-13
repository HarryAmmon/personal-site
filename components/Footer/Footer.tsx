import { PageWidth, SiteWidth } from "../Structure";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <SiteWidth>
    <PageWidth>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()}</p>
      </footer>
    </PageWidth>
  </SiteWidth>
);
