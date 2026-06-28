import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import Section from "@/components/shared/Section";
import Footer from "@/components/layout/Footer";
import styles from "./taskflow.module.css";

export default function TaskFlowPage() {
  return (
    <main>
      <header className={styles.hero}>
        <FadeIn>
          <Link href="/work" className={styles.backNav}>
            ← Back to Work
          </Link>
          <p className={styles.eyebrow}>Full-Stack Platform</p>
          <h1 className={styles.title}>TaskFlow</h1>
          <p className={styles.description}>
            A robust, real-time task management platform built on the MERN stack. Designed to handle complex workflows with a focus on speed, clarity, and visual minimalism.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>Lead Developer</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>2025</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Context</span>
              <span className={styles.metaValue}>Personal Project</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Tech</span>
              <span className={styles.metaValue}>React, Node.js, MongoDB</span>
            </div>
          </div>

          <div className={styles.heroImage}>
            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
              alt="TaskFlow Dashboard Interface"
              fill
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
              TaskFlow was born out of a frustration with existing project management tools that felt either too convoluted or overly simplistic. The goal was to create a platform that struck the perfect balance: powerful enough for engineering teams, yet intuitive enough for everyday personal use.
            </p>
            <p className={styles.text}>
              The interface is heavily inspired by premium, dark-mode-first applications, utilizing glassmorphism, subtle borders, and intentional typography to create an environment where data feels accessible and actions feel instantaneous.
            </p>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <h2 className={styles.heading}>Problem & Solution</h2>
            <div className={styles.twoCol}>
              <div>
                <p className={styles.text} style={{ color: "var(--foreground)" }}>
                  <strong>The Problem:</strong> Most tools enforce strict agile methodologies or offer blank canvases that require extensive setup. They often suffer from visual clutter, leading to cognitive fatigue when managing dozens of tasks across multiple boards.
                </p>
              </div>
              <div>
                <p className={styles.text}>
                  <strong>The Solution:</strong> A flexible, real-time board system with zero-setup defaults. We implemented keyboard-first navigation, instant optimistic UI updates via WebSocket connections, and a curated design system that reduces cognitive load.
                </p>
              </div>
            </div>
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
              <div className={styles.techItem}>Socket.io</div>
              <div className={styles.techItem}>Zustand</div>
              <div className={styles.techItem}>Framer Motion</div>
            </div>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <h2 className={styles.heading}>Key Features</h2>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <strong style={{ color: "var(--foreground)" }}>Real-time Synchronization:</strong> WebSocket integration ensures that updates made by one user are instantly reflected across all connected clients without manual refreshing.
              </li>
              <li className={styles.featureItem}>
                <strong style={{ color: "var(--foreground)" }}>Optimistic UI Updates:</strong> Interactions feel instant because the UI updates immediately, with state reconciliation happening quietly in the background.
              </li>
              <li className={styles.featureItem}>
                <strong style={{ color: "var(--foreground)" }}>Custom Design System:</strong> Built entirely without UI frameworks, utilizing CSS Modules and a strict set of design tokens for absolute control over the aesthetics.
              </li>
            </ul>
          </FadeIn>
        </div>
      </Section>

      <Section>
        <div className={styles.contentBlock}>
          <FadeIn>
            <h2 className={styles.heading}>Future Iterations</h2>
            <p className={styles.text}>
              While the core platform is robust, the roadmap includes native mobile application wrappers using React Native, offline-first capabilities utilizing Service Workers, and an AI-driven task prioritization engine.
            </p>

            <div className={styles.ctaContainer}>
              <a href="#" className={styles.btnPrimary}>
                View Live Demo
              </a>
              <a href="#" className={styles.btnSecondary}>
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
