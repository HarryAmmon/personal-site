import React from "react";
import { Anchor } from "../Buttons";
import styles from "./Navigation.module.scss";

export const NavigationPane = (): JSX.Element => {
  return (
    <ul className={styles.navPane}>
      <li>
        <Anchor styleAs="a" href="#projects">
          Projects
        </Anchor>
      </li>
      <li>
        <Anchor styleAs="a" href="#career">
          Career
        </Anchor>
      </li>
    </ul>
  );
};

export interface INavigationBarProps {
  children: React.ReactNode;
}

export const NavigationBar = ({
  children,
}: INavigationBarProps): JSX.Element => {
  return (
    <nav className={styles.navBar}>
      <div className={styles.navContent}>{children}</div>
    </nav>
  );
};
