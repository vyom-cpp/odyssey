import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import ProjectCard from "./ProjectCard";
import styles from "./FeaturedWork.module.css";
import FadeIn from "../shared/FadeIn";

const projects = [
  {
    title: "Nova Wallet",
    category: "Web3 Product",
    year: "2025",
    description:
      "A premium non-custodial crypto wallet experience designed for clarity, safety, and visual minimalism.",
    imageSrc:
      "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Minimalist cryptocurrency wallet application interface",
    href: "/work",
  },
  {
    title: "Komorebi Space",
    category: "Creative Studio",
    year: "2024",
    description:
      "An interactive art portfolio and visual experience system utilizing dynamic grid layouts and type animations.",
    imageSrc:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Elegant minimalist art backdrop with light gradients",
    href: "/work",
  },
];

export default function FeaturedWork() {
  return (
    <Section id="featured-work">
      <FadeIn direction="up">
        <SectionTitle
          label="PROJECTS"
          title="Selected Work"
          description="A curation of web apps, software interfaces, and structural platforms built with focus on responsiveness, design systems, and execution quality."
        />
      </FadeIn>

      <div className={styles.grid}>
        {projects.map((project, index) => (
          <FadeIn key={project.title} direction="up" delay={index * 180}>
            <ProjectCard
              title={project.title}
              category={project.category}
              year={project.year}
              description={project.description}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              href={project.href}
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
