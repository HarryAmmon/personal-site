import {
  Dispatch,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
  SetStateAction,
  useState,
} from "react";
import styles from "./Buttons.module.scss";

interface IAnchorProps {
  href: string;
  styleAs: "button" | "a";
  primary?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  target?: HTMLAttributeAnchorTarget;
  children: ReactNode;
}



export const Anchor = ({
  children,
  styleAs,
  onClick,
  href,
  target,
  primary = false,
}: IAnchorProps): JSX.Element => {
  return (
    <a
      className={`${primary && styles.primaryButton} ${
        styleAs === "button" ? styles.button : styles.anchor
      }`}
      onClick={onClick}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};



//TODO find cross with rounded corners
export const Cross = () => {
  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
    >
      <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
    </svg>
  );
};

export const Burger = () => (
  <svg
    fill="#000000"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="50px"
    height="50px"
  >
    <path d="M 3 5 A 1.0001 1.0001 0 1 0 3 7 L 21 7 A 1.0001 1.0001 0 1 0 21 5 L 3 5 z M 3 11 A 1.0001 1.0001 0 1 0 3 13 L 21 13 A 1.0001 1.0001 0 1 0 21 11 L 3 11 z M 3 17 A 1.0001 1.0001 0 1 0 3 19 L 21 19 A 1.0001 1.0001 0 1 0 21 17 L 3 17 z" />
  </svg>
);
