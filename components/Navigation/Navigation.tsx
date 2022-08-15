import React, { Dispatch, SetStateAction, useState } from "react";
import { Anchor, Burger, Cross } from "../Buttons";
import styles from "./Navigation.module.scss";

interface IBurgerButtonProps {
  checked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}

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
          <Anchor styleAs="a" href="#projects">
            Projects
          </Anchor>
        </li>
        <li>
          <Anchor styleAs="a" href="#career">
            Career
          </Anchor>
        </li>
        <li>
          <Anchor styleAs="a" href="#aboutme">
            About Me
          </Anchor>
        </li>
      </ul>
    </div>
  );
};

export interface INavigationBarProps {
  children: React.ReactNode;
}

export const NavigationBar = ({
  children,
}: INavigationBarProps): JSX.Element => {
  const [checked, setChecked] = useState(false);
  return (
    <nav className={styles.navBar}>
      <BurgerButtonWithCross checked={checked} setChecked={setChecked} />
      <NavigationPane checked={checked} />
      {children}
    </nav>
  );
};

export const BurgerButtonWithCross = ({
  checked,
  setChecked,
}: IBurgerButtonProps) => {
  return <BurgerButton checked={checked} setChecked={setChecked} />;
};

const BurgerButton = ({ checked, setChecked }: IBurgerButtonProps) => {
  return (
    <div>
      <label htmlFor="burgerButton" className={styles.burgerButtonContainer}>
        <input
          type="checkbox"
          id="burgerButton"
          className={styles.checkbox}
          checked={checked}
          onChange={() => setChecked(!checked)}
        />
        {checked ? <Cross /> : <Burger />}
      </label>
    </div>
  );
};
