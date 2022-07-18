import React from "react";
import { Anchor } from "../Buttons";
import styles from "./Navigation.module.scss";

export const Navigation = (): JSX.Element => {
  return (
    <nav className={styles.nav}>
      <ul>
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
    </nav>
  );
};
