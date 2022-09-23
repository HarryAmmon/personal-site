import React, { Dispatch, SetStateAction, useState } from "react";
import { useClickOutsideToClose } from "../../hooks";
import { Anchor, Burger, Cross } from "../Buttons";
import { PageWidth, SiteWidth } from "../Structure";
import styles from "./Navigation.module.scss";

interface INavigationPaneProps {
  checked: boolean;
}

export const NavigationPane = ({
  checked,
}: INavigationPaneProps): JSX.Element => {
  return (
    <div className={`${styles.navPane} ${checked && styles.show}`}>
      <ul>
        <li>
          <Anchor styleAs="a" href="#aboutme">
            About Me
          </Anchor>
        </li>
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
    </div>
  );
};

export interface INavigationBarProps {
  children?: React.ReactNode;
}

export const NavigationBar = ({
  children,
}: INavigationBarProps): JSX.Element => {
  const [checked, setChecked] = useState(false);
  const clickRef = useClickOutsideToClose(() => setChecked(false));

  return (
    <>
      {checked && <div className={styles.navBlur}></div>}
      <SiteWidth className={styles.navBar}>
        <PageWidth>
          <nav id="nav">
            <div className={styles.navBarContent}>
              <button
                className={styles.burgerButtonContainer}
                type="button"
                onClick={(e) => {
                  setChecked((prev) => !prev);
                }}
                ref={clickRef}
              >
                {checked ? <Cross className={styles.cross} /> : <Burger />}
              </button>
              <NavigationPane checked={checked} />
              {children}
            </div>
          </nav>
        </PageWidth>
      </SiteWidth>
    </>
  );
};
