import styles from "./Structure.module.scss";

interface IPageWidthProps {
  children: React.ReactNode;
  className?: string;
  backGround?:boolean;
}

export const PageWidth = ({ children, className, backGround }: IPageWidthProps) => (
  <div className={`${styles.pageWidth} ${className} ${backGround}`}>{children}</div>
);
