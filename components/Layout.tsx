import React, { ReactNode } from "react";
import { Footer, SiteHeader } from "./PageLayout";
import styles from "./Layout.module.scss";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.siteWidth}>
      <SiteHeader />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};
