import React, { ReactNode } from "react";
import { Footer, SiteHeader } from "./PageLayout";
import styles from "./Layout.module.scss";
import { Navigation } from "./Navigation";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.siteWidth}>
      <SiteHeader />
      <Navigation />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};
