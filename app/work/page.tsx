import FadeIn from "@/components/shared/FadeIn";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import ContactCTA from "@/app/contact/ContactCTA";
import Footer from "@/components/layout/Footer";
import styles from "./work.module.css";
import taskflowImg from "./taskflow/taskflow.png";
import justeaseImg from "./justease/justease.png";
import vgecRocketryImg from "./vgec-rocketry/vgec-rocketry.png";
import processSchedulingSolverImg from "./process-scheduler.png";
import ingeniumHackathonImg from "./ingenium-hackathon.png";

const selectedProjects = [
  {
    title: "TaskFlow",
    category: "Full-Stack Web App",
    year: "2026",
    description: "A robust task management platform built on the MERN stack with real-time updates and analytics.",
    imageSrc: taskflowImg,
    imageAlt: "TaskFlow Home Page Image",
    href: "/work/taskflow",
    tags: ["React", "Node.js", "MongoDB", "Gemini Flask", "Render", "Vercel", "GoDaddy"],
  },
  {
    title: "JustEase",
    category: "RAG Project",
    year: "2025",
    description: "A project for Smart India Hackathon done in 48 hours, AI-powered legal aid assistant for normal people to help them with their work.",
    imageSrc: justeaseImg,
    imageAlt: "JustEase Home Page Image",
    href: "/work/justease",
    tags: ["Python", "RAG", "Vector DB"],
  },
  {
    title: "VGEC Rocketry Space",
    category: "Club Website",
    year: "2024",
    description: "An interactive website for the rocketry club of my college, showcasing their journey, struggle and achievements.",
    imageSrc: vgecRocketryImg,
    imageAlt: "VGEC Rocketry Home Page Image",
    href: "/work/vgec-rocketry",
    tags: ["TypeScript", "Tailwind"],
  },
];

const moreProjects = [
  {
    title: "Donna",
    category: "Legal Aid Assistant",
    year: "2024",
    description: "A hackathon project for Ingenium Hackathon done at Ahmedabad University, helping with legal queries and drafting documents like NDAs, Rent Aggrements, Employee Contracts, etc.",
    imageSrc: ingeniumHackathonImg,
    imageAlt: "Ingenium Hackathon Home Page Image",
    href: "https://github.com/vyom-cpp/Ingenium-hackathon",
    tags: ["HTML", "CSS", "Render", "OpenAI"],
  },
  {
    title: "Process Scheduling Solver",
    category: "Fun Project",
    year: "2023",
    description: "A project based on Process Scheduling Algorithms like FCFS, SJF, Priority Scheduling etc. to help students understand the concepts in a better way and also verify their answers. 😆",
    imageSrc: processSchedulingSolverImg,
    imageAlt: "Process Scheduling Solver Home Page Image",
    href: "https://process.vyomcodes.site/",
    tags: ["C"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding the core problem, user needs, and objectives. Definition of the project scope, technical requirements, and establishing clear success metrics.",
  },
  {
    number: "02",
    title: "Architecture",
    description: "Designing the technical foundation, database schemas, and system workflows. I prioritize scalable patterns and robust APIs before writing UI code.",
  },
  {
    number: "03",
    title: "Development",
    description: "Iterative execution utilizing modern frameworks. Focus on clean code, component reusability, performance optimization, and rigorous testing.",
  },
  {
    number: "04",
    title: "Refinement",
    description: "Polishing interactions, micro-animations, and responsive layouts. The final 10% where the product goes from functional to a premium experience.",
  },
];

export default function WorkPage() {
  return (
    <main>
      <header className={styles.hero}>
        <FadeIn>
          <h1 className={styles.title}>Work.</h1>
          <p className={styles.description}>
            A detailed look at platforms, applications, and digital experiences I&apos;ve built, exploring the intersection of structure, code, and beauty.
          </p>
        </FadeIn>
      </header>

      <Section id="selected">
        <FadeIn>
          <SectionTitle
            label="SELECTED"
            title="Featured Projects"
            description="High-fidelity applications and platforms showcasing full-stack capabilities and premium design."
          />
        </FadeIn>

        <div className={styles.grid}>
          {selectedProjects.map((project, index) => (
            <FadeIn key={project.title} direction="up" delay={index * 150}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="more-projects">
        <FadeIn>
          <SectionTitle
            label="ARCHIVE"
            title="More Projects"
            description="Smaller experiments, libraries, and past iterations that shaped my development approach."
          />
        </FadeIn>

        <div className={styles.grid}>
          {moreProjects.map((project, index) => (
            <FadeIn key={project.title} direction="up" delay={index * 150}>
              <ProjectCard {...project} />
            </FadeIn>
          ))}
        </div>
      </Section>

      <Section id="process">
        <FadeIn>
          <SectionTitle
            label="METHODOLOGY"
            title="The Process"
            description="My approach to building software—from initial concept to polished deployment."
          />
        </FadeIn>

        <div className={styles.processList}>
          {processSteps.map((step, index) => (
            <FadeIn key={step.title} direction="up" delay={index * 150}>
              <div className={styles.processItem}>
                <div className={styles.processNumber}>STEP {step.number}</div>
                <h3 className={styles.processTitle}>{step.title}</h3>
                <p className={styles.processDesc}>{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      <ContactCTA />
      <Footer />
    </main>
  );
}
