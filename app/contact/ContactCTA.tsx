import Section from "@/components/shared/Section";
import Button from "@/components/shared/Button";
import styles from "./ContactCTA.module.css";
import FadeIn from "@/components/shared/FadeIn";

export default function ContactCTA() {
  return (
    <Section id="contact-cta" className={styles.sectionOverride}>
      <div className={styles.wrapper}>
        <FadeIn direction="up">
          <p className={styles.eyebrow}>SAY HELLO</p>
          <h2 className={styles.heading}>
            Let&apos;s build something
            <br />
            thoughtful together.
          </h2>
          <p className={styles.description}>
            Whether you have an upcoming project, a collaborative system design idea, or simply
            want to talk engineering and visual art—my inbox is open.
          </p>
          <div className={styles.action}>
            <Button href="/contact" variant="primary">
              Get In Touch
            </Button>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
