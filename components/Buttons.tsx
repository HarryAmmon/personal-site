import {
  ChangeEvent,
  HTMLAttributeAnchorTarget,
  MouseEventHandler,
  ReactNode,
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
