import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import Section from "@/components/shared/Section";
import Footer from "@/components/layout/Footer";
import styles from "./taskflow.module.css";
import taskflowImg from "./taskflow.png";

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
            A robust, real-time task management platform built on the MERN stack and integrated with AI. Designed to handle complex workflows with a focus on speed, clarity, and visual minimalism.
          </p>

          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Role</span>
              <span className={styles.metaValue}>Lead Developer</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Timeline</span>
              <span className={styles.metaValue}>June 2026</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Context</span>
              <span className={styles.metaValue}>Personal Project</span>
            </div>
            <div className={styles.metaItem}>
              <span className={styles.metaLabel}>Tech</span>
              <span className={styles.metaValue}>React, Node.js, MongoDB, Redis, Resend, Vercel, Render, GoDaddy</span>
            </div>
          </div>

          <div className={styles.heroImage}>
            <Image
              src={taskflowImg}
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
            <h2 className={styles.heading}>Problem & Solution</h2>
            <div className={styles.twoCol}>
              <div>
                <p className={styles.text} style={{ color: "var(--foreground)" }}>
                  <strong>The Problem:</strong> TaskFlow didn't begin as an attempt to reinvent task management—it started as a weekend project to build something complete from the ground up. I wanted a project that would push me beyond simple CRUD applications and challenge me to design a production-ready system involving authentication, email workflows, role-based access, dashboards, and scalable backend architecture. The goal wasn't to compete with established productivity tools, but to learn how they're built.
                </p>
              </div>
              <div>
                <p className={styles.text}>
                  <strong>The Solution:</strong> Instead of focusing on feature quantity, I focused on building features the right way. Every addition—from secure authentication and OTP verification to admin management, reminder emails, and the upcoming AI-powered task creation—was implemented as if the application were intended for real users. TaskFlow has gradually evolved into a personal engineering playground where I can experiment with modern full-stack development while emphasizing clean architecture, thoughtful UI design, and production-ready practices.
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
              <div className={styles.techItem}>Redis</div>
              <div className={styles.techItem}>Gemini Flask</div>
              <div className={styles.techItem}>Resend</div>
              <div className={styles.techItem}>Render / Vercel / GoDaddy</div>
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
                <strong style={{ color: "var(--foreground)" }}>AI-Powered Task Creation:</strong> It introduces Gemini Flask powered natural language task creation, allowing users to create structured tasks from plain English and by speaking also, alongside monitoring and alerting for AI service health.
              </li>
              <li className={styles.featureItem}>
                <strong style={{ color: "var(--foreground)" }}>Automated Email Workflows:</strong> Integrated email verification, password recovery, and scheduled reminder emails for upcoming pending tasks using cron jobs and the Resend API.
              </li>
              <li className={styles.featureItem}>
                <strong style={{ color: "var(--foreground)" }}>Performace & Security:</strong> Password hashing with bcrypt, request validation, rate limiting, Helmet security headers, centralized error handling, and automatic session invalidation for deleted users.
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
              <a href="https://tasks.vyomcodes.site" className={styles.btnPrimary}>
                View Live Demo
              </a>
              <a href="https://github.com/vyom-cpp/task-management-ai-web-app" className={styles.btnSecondary}>
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
