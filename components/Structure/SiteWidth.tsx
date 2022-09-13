import styles from "./Structure.module.scss";

interface ISiteWidthProps {
  children: React.ReactNode;
  className?: string;
  background?: boolean;
}

export const SiteWidth = ({
  children,
  className,
  background,
}: ISiteWidthProps) => (
  <div
    className={`${styles.siteWidth} ${className} ${
      background && styles.backGround
    }`}
  >
    {children}
  </div>
);
