import { PageWidth, SiteWidth } from "../Structure";
import { P } from "../Typography";
import styles from "./Footer.module.scss";

export const Footer = () => (
  <SiteWidth hasBackground>
    <PageWidth>
      <footer className={styles.footer}>
        <P>&copy; {new Date().getFullYear()}</P>
      </footer>
    </PageWidth>
  </SiteWidth>
);
