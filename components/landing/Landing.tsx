import styles from "./Landing.module.css";
import HeroCard from "../hero/HeroCard";
import FeaturedWork from "../projects/FeaturedWork";
import PhotographyPreview from "./PhotographyPreview";
import ShelfPreview from "../shelf/ShelfPreview";
import ContactCTA from "../contact/ContactCTA";
import Footer from "../layout/Footer";

const cards = [
  {
    title: "TaskFlow",
    subtitle: "Task Management Platform",
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Dark analytics dashboard on a workspace screen",
    className: styles.cardOne,
    href: "/work/taskflow",
  },
  {
    title: "Photography",
    subtitle: "Capturing moments and stories.",
    imageSrc:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Mountain peak at dusk",
    className: styles.cardTwo,
    href: "/shelf#photography",
  },
  {
    title: "Poetry",
    subtitle: "Thoughts written between the lines.",
    imageSrc:
      "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=900&q=80",
    imageAlt: "Pen resting on handwritten poetry",
    className: styles.cardThree,
    href: "/shelf#poetry",
  },
];

export default function Landing() {
  return (
    <main className={styles.landing}>
      <section className={styles.hero} aria-label="Odyssey introduction">
        <div className={styles.content}>
          <p className={styles.eyebrow}>HELLO, I&apos;M VYOM</p>

          <h1 className={styles.title}>
            Crafting
            <br />
            Digital
            <br />
            <span className={styles.titleLine}>
              Experiences<span className={styles.titleDot}>.</span>
            </span>
          </h1>

          <p className={styles.description}>
            Software Engineer crafting thoughtful web experiences, exploring
            photography, and writing poetry along the way.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="/work">
              <span>View Work</span>
              <span aria-hidden="true">↗</span>
            </a>

            <a className={styles.secondary} href="/shelf">
              <span>The Shelf</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className={styles.cards} aria-label="Featured work and interests">
          {cards.map((card) => (
            <HeroCard
              key={card.title}
              title={card.title}
              subtitle={card.subtitle}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              className={card.className}
              href={card.href}
            />
          ))}
        </div>

        <div className={styles.scrollCue} aria-hidden="true">
          <span>Scroll</span>
        </div>

        <div className={styles.compass} aria-hidden="true">
          N
        </div>
      </section>

      <FeaturedWork />
      <PhotographyPreview />
      <ShelfPreview />
      <ContactCTA />
      <Footer />
    </main>
  );
}

