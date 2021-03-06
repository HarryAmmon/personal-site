import Head from "next/head";
import Link from "next/link";
import styles from "./PageLayout.module.scss";

export const Footer = () => (
  <footer className={styles.footer}>
    <p>&copy; {new Date().getFullYear()}</p>
  </footer>
);

export const SiteHeader = () => (
  <Head>
    <title>Harry Ammon</title>
    <meta
      name="description"
      content="Personal developer profile for Harry Ammon"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export const Navigation = () => (
  <nav>
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Page1">Page 1</Link>
      </li>
    </ul>
  </nav>
);
