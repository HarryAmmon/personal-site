import { ReactNode } from "react";
import { H3 } from "../Typography";

interface ICardProps {
  title: string;
  children?: ReactNode;
}

export const Card: React.FC<ICardProps> = ({ title, children }: ICardProps) => {
  return (
    <article>
      <H3>{title}</H3>
      {children}
    </article>
  );
};
