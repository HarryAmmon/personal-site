import Image from "next/image";
import styles from "./Icons.module.scss";

interface IGenericIconProps {
  iconSrc: string;
  height?: number;
  width?: number;
  text: string;
}

interface IIconBarProps {
  children: React.ReactNode;
}

export const CSharpIcon = () => {
  return <GenericIcon iconSrc="/images/csharp-logo-24.svg" text="C#" />;
};

export const ReactIcon = () => {
  return <GenericIcon iconSrc="/images/react-24.svg" text="React" />;
};

export const UmbracoIcon = () => {
  return <GenericIcon iconSrc="/images/umbraco-24.svg" text="Umbraco" />;
};

export const SassIcon = () => {
  return <GenericIcon iconSrc="/images/sass-24.svg" text="Sass" />;
};

export const TypeScriptIcon = () => {
  return <GenericIcon iconSrc="/images/typescript-24.svg" text="Typescript" />;
};

export const IconBar: React.FC<IIconBarProps> = ({
  children,
}: IIconBarProps) => {
  return <div className={styles.IconBar}>{children}</div>;
};

const GenericIcon: React.FC<IGenericIconProps> = ({
  iconSrc,
  height = 24,
  width = 24,
  text,
}: IGenericIconProps) => {
  return (
    <div className={styles.IconPill}>
      <Image src={iconSrc} height={height} width={width} />
      <p className={styles.Text}>{text}</p>
    </div>
  );
};
