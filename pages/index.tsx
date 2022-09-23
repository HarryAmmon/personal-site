import ProfilePic from "../public/images/me.jpeg";
import { H1, H2, P } from "../components/Typography";
import styles from "../styles/Home.module.scss";
import Image from "next/image";
import { PageWidth, SiteWidth, Wave } from "../components/Structure";
export default function Home() {
  return (
    <div>
      <SiteWidth hasBackground>
        <PageWidth>
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
          <main>
            <H2 id="aboutme">About Me</H2>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fringilla massa vitae venenatis pretium. Praesent faucibus orci
              ipsum, a varius mi mattis at. Phasellus lacus ante, placerat vel
              enim nec, pulvinar hendrerit nunc. Duis vestibulum massa ut tempor
              facilisis. Phasellus luctus nibh et ligula suscipit porttitor.
              Morbi blandit iaculis urna, in aliquam magna sagittis sit amet.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum ut massa a nisl
              maximus ullamcorper id vel nunc. Proin accumsan dictum velit a
              dapibus. Praesent nec odio dolor. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aliquam blandit consectetur
              gravida.
            </P>
            <H2 id="projects">Projects</H2>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fringilla massa vitae venenatis pretium. Praesent faucibus orci
              ipsum, a varius mi mattis at. Phasellus lacus ante, placerat vel
              enim nec, pulvinar hendrerit nunc. Duis vestibulum massa ut tempor
              facilisis. Phasellus luctus nibh et ligula suscipit porttitor.
              Morbi blandit iaculis urna, in aliquam magna sagittis sit amet.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum ut massa a nisl
              maximus ullamcorper id vel nunc. Proin accumsan dictum velit a
              dapibus. Praesent nec odio dolor. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aliquam blandit consectetur
              gravida.
            </P>
            <H2 id="career">Career</H2>
            <P>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
              fringilla massa vitae venenatis pretium. Praesent faucibus orci
              ipsum, a varius mi mattis at. Phasellus lacus ante, placerat vel
              enim nec, pulvinar hendrerit nunc. Duis vestibulum massa ut tempor
              facilisis. Phasellus luctus nibh et ligula suscipit porttitor.
              Morbi blandit iaculis urna, in aliquam magna sagittis sit amet.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Orci varius natoque penatibus
              et magnis dis parturient montes, nascetur ridiculus mus.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Vestibulum ut massa a nisl
              maximus ullamcorper id vel nunc. Proin accumsan dictum velit a
              dapibus. Praesent nec odio dolor. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos.
              Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Aliquam blandit consectetur
              gravida.
            </P>
          </main>
        </PageWidth>
      </SiteWidth>
    </div>
  );
}
