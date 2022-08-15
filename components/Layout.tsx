import React, { ReactNode } from "react";
import styles from "./Layout.module.scss";
import { NavigationBar } from "./Navigation";

import { SiteHeader } from "./Header";
import { Footer } from "./Footer";
import { Anchor } from "./Buttons";

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <SiteHeader />
      <NavigationBar>
        <Anchor
          href="/files/CV.pdf"
          styleAs="button"
          target="_blank"
          className={styles.hireMe}
        >
          Hire me
        </Anchor>
      </NavigationBar>
      <div className={styles.siteWidth}>
        <div className={styles.container}>{children}</div>
        <Footer />
      </div>
    </>
  );
};
