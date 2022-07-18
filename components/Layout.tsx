import React, { ReactNode } from "react";
import { Footer, SiteHeader } from "./PageLayout";
import styles from "./Layout.module.scss";
import { NavigationBar, NavigationPane } from "./Navigation";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.siteWidth}>
      <SiteHeader />
      <NavigationBar>
        <input type="checkbox" />
        <NavigationPane />
        <button>hire me</button>
      </NavigationBar>
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  );
};
