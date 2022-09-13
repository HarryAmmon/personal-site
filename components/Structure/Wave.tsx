interface IWaveProps {
  position: "top" | "bottom";
}
import styles from "./Structure.module.scss";

export const Wave = ({ position }: IWaveProps) => {
  const classNames =
    position == "top"
      ? `${styles.top}`
      : position == "bottom"
      ? `${styles.bottom}`
      : "";
  return (
    <div className={classNames}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path d="M0,192L60,181.3C120,171,240,149,360,170.7C480,192,600,256,720,266.7C840,277,960,235,1080,218.7C1200,203,1320,213,1380,218.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </div>
  );
};
