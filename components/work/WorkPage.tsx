import FadeIn from "@/components/shared/FadeIn";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import ProjectCard from "@/components/projects/ProjectCard";
import ContactCTA from "@/components/contact/ContactCTA";
import Footer from "@/components/layout/Footer";
import styles from "./work.module.css";

const selectedProjects = [
  {
    title: "TaskFlow",
    category: "Full-Stack App",
    year: "2025",
    description: "A robust task management platform built on the MERN stack with real-time updates and analytics.",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    imageAlt: "TaskFlow dashboard",
    href: "/work/taskflow",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Nova Wallet",
    category: "Web3 Product",
    year: "2025",
    description: "A premium non-custodial crypto wallet experience designed for clarity, safety, and visual minimalism.",
    imageSrc: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Nova Wallet interface",
    href: "/work",
    tags: ["Next.js", "TypeScript", "Ethers.js"],
  },
  {
    title: "Komorebi Space",
    category: "Creative Studio",
    year: "2024",
    description: "An interactive art portfolio and visual experience system utilizing dynamic grid layouts and type animations.",
    imageSrc: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Komorebi Space",
    href: "/work",
    tags: ["Framer Motion", "React", "GSAP"],
  },
];

const moreProjects = [
  {
    title: "Lumina",
    category: "Design System",
    year: "2024",
    description: "An accessible, highly customizable component library built for internal dashboards and SaaS products.",
    imageSrc: "https://images.unsplash.com/photo-1507238692062-71c18bf7523f?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Design system components",
    href: "/work",
    tags: ["Storybook", "React", "Tailwind"],
  },
  {
    title: "Echo",
    category: "Mobile App",
    year: "2023",
    description: "A minimalist habit-tracking application focusing on mental wellness and gentle reminders.",
    imageSrc: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mobile application interface",
    href: "/work",
    tags: ["React Native", "Expo", "Redux"],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description: "Understanding the core problem, user needs, and business objectives. We define the project scope, technical requirements, and establish clear success metrics.",
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
