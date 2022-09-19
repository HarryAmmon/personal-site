import ProfilePic from "../public/images/me.jpeg";
import { H1, P } from "../components/Typography";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { PageWidth, SiteWidth, Wave } from "../components/Structure";
export default function Home() {
  return (
    <div>
      <SiteWidth background>
        <PageWidth backGround>
          <header className={styles.header}>
            <div className={`${styles.introText} `}>
              <H1 className={styles.title}>Hello, I'm Harry </H1>
              <P className={styles.description}>
                I'm a software developer at The Pensions Regulator, currently
                building tools for the web whilst promoting DevOps and Agile
                values.
              </P>
            </div>
            <div className={styles.profilePicWrapper}>
              <Image
                className={styles.profilePic}
                src={ProfilePic}
                alt="Picture of Harry Ammon wearing a blue suit jacket, white shirt and blue tie, standing in front of a tree"
              />
            </div>
          </header>
        </PageWidth>
        <Wave position="top" />
      </SiteWidth>

      {/* Name, Nav bar to navigate to sections on the same page */}

      {/* Desired sections (might be in order, might not be) */}
      {/* Hire me - button to download my CV in pdf format */}
      {/* Career history (brief) */}
      {/* Projects - a short description of projects I've worked on */}
      {/* Links to socials (github, dev, linkdin, twitter (again maybe)) */}
      <main className={styles.main}>
        <div className={styles.card}>
          <P>Career so far</P>
        </div>
        <div className={styles.card}>
          <P>Projects</P>
        </div>
      </main>
    </div>
  );
}
