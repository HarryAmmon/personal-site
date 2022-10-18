import styles from "./Link.module.scss";

interface ILinkProps {
  href: string;
  target?: string;
  children: React.ReactNode;
}

export const Link: React.FC<ILinkProps> = ({
  href,
  target,
  children,
}: ILinkProps) => {
  return (
    <a href={href} target={target} className={styles.link}>
      {children}
    </a>
  );
};
