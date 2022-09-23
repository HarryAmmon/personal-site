import styles from "./Structure.module.scss";

interface ISiteWidthProps {
  children: React.ReactNode;
  className?: string;
  hasBackground?: boolean;
}

export const SiteWidth = ({
  children,
  className,
  hasBackground,
}: ISiteWidthProps) => (
  <div
    className={`${styles.siteWidth} ${className} ${
      hasBackground && styles.backGround
    }`}
  >
    {children}
  </div>
);
