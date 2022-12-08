import React, { ReactNode } from "react";
import styles from "./Typography.module.scss";

type TypographyProps = {
  id?: string;
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

export const H2: React.FC<TypographyProps> = ({
  id,
  className,
  children,
}: TypographyProps) => {
  return (
    <h2
      id={id ? id : ""}
      className={`${styles.h2} ${className ? className : ""}`}
    >
      {children}
    </h2>
  );
};

export const H3: React.FC<TypographyProps> = ({
  id,
  className,
  children,
}: TypographyProps) => {
  return (
    <h3 id={id} className={`${styles.h3} ${className ? className : ""}`}>
      {children}
    </h3>
  );
};
