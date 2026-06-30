import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import Section from "@/components/shared/Section";
import Footer from "@/components/layout/Footer";
import styles from "./vgec-rocketry.module.css";
import vgecRocketryImg from "./vgec-rocketry.png";

export default function VGECRocketryPage() {
  return (
    <main>
      <header className={styles.hero}>
        <FadeIn>
          <Link href="/work" className={styles.backNav}>
            ← Back to Work
          </Link>
          <h1 className={styles.title}>VRT</h1>
          <p className={styles.description}>
            An interactive website for the rocketry club of my college, showcasing their journey, harships, and achievements.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>Lead Developer</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>December 2024</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Context</span>
              <span className={styles.metaValue}>Team Project</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Tech</span>
              <span className={styles.metaValue}>TypeScript, Tailwind, Render, Vercel</span>
            </div>
          </div>

          <div className={styles.heroImage}>
            <Image
              src={vgecRocketryImg}
              alt="TaskFlow Dashboard Interface"
              className={styles.image}
              priority
            />
          </div>
        </FadeIn>
      </header>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <h2 className={styles.heading}>The Overview</h2>
            <p className={styles.text}>
              TaskFlow was born as a weekend project. The goal was to create a platform that struck the perfect balance: powerful enough for engineering teams, yet intuitive enough for everyday personal use, at first it was just managing CRUD operations, but then I thought of integrating AI in it.
            </p>
            <p className={styles.text}>
              The application follows a modern full-stack architecture, emphasizing scalability, security, and user experience. From email verification and password recovery to an admin dashboard, automated reminder emails, and AI-powered natural language task creation using voice recognition, every feature is designed with real-world usability in mind. The interface embraces a premium dark-first aesthetic with thoughtful spacing, subtle animations, and responsive layouts, creating an experience that feels fast, intuitive, and polished across desktop and mobile devices.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <h2 className={styles.heading}>Technical Architecture</h2>
            <p className={styles.text}>
              The application leverages a standard MERN stack but introduces specific architectural decisions to ensure scalability and real-time synchronization across multiple clients.
            </p>
            <div className={styles.techGrid}>
              <div className={styles.techItem}>React 18</div>
              <div className={styles.techItem}>Node.js / Express</div>
              <div className={styles.techItem}>MongoDB / Mongoose</div>
              <div className={styles.techItem}>Render / Vercel</div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <div className={styles.ctaContainer}>
              <a href="https://vgecrocketry.space/home" className={styles.btnPrimary}>
                View Live
              </a>
              <a href="https://github.com/vyom-cpp/vgec-rocketry-space" className={styles.btnSecondary}>
                View on GitHub
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
