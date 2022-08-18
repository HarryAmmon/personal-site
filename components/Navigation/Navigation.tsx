import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const clickRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const closeDropdown = (event: any) => {
      console.log(event);
      if (event.path[0] !== clickRef.current) {
        console.log("closing");
        setChecked(false);
      }
      console.log("This event has fired");
    };

    document.body.addEventListener("touch", closeDropdown);

    return () => {
      document.body.removeEventListener("touch", closeDropdown);
    };
  }, []);

  useEffect(() => console.log("re-render"), []);

  return (
    <nav className={styles.navBar}>
      <div className={styles.navBarContent}>
        <button
          className={styles.burgerButtonContainer}
          type="button"
          onClick={(e) => {
            setChecked((prev) => !prev);
          }}
          ref={clickRef}
        >
          {checked ? <Cross /> : <Burger />}
        </button>
        <NavigationPane checked={checked} />
        {children}
      </div>
    </nav>
  );
};

const BurgerButton = React.forwardRef<HTMLButtonElement, IBurgerButtonProps>(
  ({ checked, setChecked }, ref) => {
    return <div></div>;
  }
);

// { checked, setChecked }: IBurgerButtonProps
