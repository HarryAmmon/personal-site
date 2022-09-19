import styles from "./Structure.module.scss";

interface IPageWidthProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWidth = ({ children, className }: IPageWidthProps) => (
  <div className={`${styles.pageWidth} ${className}`}>{children}</div>
);
