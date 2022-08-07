import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";
import { NavigationBar, NavigationPane } from "./Navigation";

import { SiteHeader } from "./Header";
import { Footer } from "./Footer";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <SiteHeader />
      <NavigationBar>
     
      </NavigationBar>
      <div className={styles.siteWidth}>
        <div className={styles.container}>{children}</div>
        <Footer />
      </div>
    </>
  );
};
