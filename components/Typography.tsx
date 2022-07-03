import React, { ReactNode } from "react";
import styles from "./Typography.module.scss";

type TypographyProps = {
  className?: string;
  children: ReactNode;
};

export const P: React.FC<TypographyProps> = ({
  className,
  children,
}: TypographyProps) => {
  return (
    <p className={`${styles.para} ${className ? className : ""}`}>{children}</p>
  );
};

export const H1: React.FC<TypographyProps> = ({
  className,
  children,
}: TypographyProps) => {
  return (
    <h1 className={`${styles.h1} ${className ? className : ""}`}>{children}</h1>
  );
};
