import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import Button from "../shared/Button";
import styles from "./ShelfPreview.module.css";
import FadeIn from "../shared/FadeIn";

const items = [
  {
    category: "Reading",
    title: "Designing Design",
    author: "Kenya Hara",
    description: "A profound study on the void and simple aesthetics in Japanese modern design.",
  },
  {
    category: "Reference",
    title: "A Pattern Language",
    author: "Christopher Alexander",
    description:
      "An architectural exploration of systems and patterns that make physical spaces feel alive.",
  },
  {
    category: "Writing",
    title: "On Minimalism",
    author: "Vyom",
    description:
      "Notes on writing software like poetry—with intention, structure, and minimal excess.",
  },
];

export default function ShelfPreview() {
  return (
    <Section id="shelf-preview">
      <FadeIn direction="up">
        <SectionTitle
          label="THE SHELF"
          title="Curated Inspirations"
          description="A living collection of ideas, books, articles, and artifacts that influence my work and design ethos."
        />
      </FadeIn>

      <div className={styles.grid}>
        {items.map((item, index) => (
          <FadeIn key={item.title} direction="up" delay={index * 120} className={styles.card}>
            <div className={styles.header}>
              <span className={styles.category}>{item.category}</span>
              <span className={styles.arrow} aria-hidden="true">
                →
              </span>
            </div>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.author}>by {item.author}</p>
            <p className={styles.description}>{item.description}</p>
          </FadeIn>
        ))}
      </div>

      <FadeIn direction="up" delay={200} className={styles.action}>
        <Button href="/shelf" variant="primary">
          Enter The Shelf
        </Button>
      </FadeIn>
    </Section>
  );
}
