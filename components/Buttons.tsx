import React, {
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
  className?: string;
  children: ReactNode;
}

export const Anchor = ({
  children,
  styleAs,
  onClick,
  href,
  target,
  className,
  primary = false,
}: IAnchorProps): JSX.Element => {
  return (
    <a
      className={`${primary && styles.primaryButton} ${
        styleAs === "button" ? styles.button : styles.anchor
      } ${className && className}`}
      onClick={onClick}
      href={href}
      target={target}
    >
      {children}
    </a>
  );
};

interface ICrossProps{
  className?: string;
}

export const Cross = ({className}:ICrossProps) => {
  return (
    <svg
      fill="#000000"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 50 50"
      width="50px"
      height="50px"
      className={className}
    >
      <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z" />
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
