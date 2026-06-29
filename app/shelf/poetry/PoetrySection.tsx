import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./PoetrySection.module.css";

const featuredPoem = `I miss standing by the dormatry
Talking to the clouds
Requesting the wind
To send you over 
I miss pulling you towards me
While you close your eyes
Waiting for the perfect spice
I miss holding you in my arms
While staring into your eyes
Your perfect body
Gently pressed against mine
I miss hugging you
Pouring kisses, through your neckline
I don't know how my heart stuck to you in just 4 days
Every moment you smiled I even smiled more
Still am an enemy of time
I'm gonna miss these moment`;

const recentPoems = [
  {
    title: "Midnight Compile",
    excerpt: "The terminal blinks in the dark, a lighthouse in the endless sea of logic...",
  },
  {
    title: "Static Memories",
    excerpt: "We capture moments in arrays, but cannot loop through yesterday...",
  }
];

export default function PoetrySection() {
  return (
    <Section id="poetry">
      <header className={styles.hero}>
        <FadeIn>
          <Link href="/" className={styles.backNav}>
            ← Back to Home
          </Link>
          <p className={styles.eyebrow}>Original Piece</p>
          <h1 className={styles.title}>The Missing</h1>
          <p className={styles.date}>Written in March, 2025</p>
        </FadeIn>
      </header>

      <div className={styles.poemContainer}>
        <FadeIn direction="up">
          <div className={styles.poemContent}>
            {featuredPoem}
          </div>
        </FadeIn>

        <FadeIn>
          <div className={styles.notesSection}>
            <h3 className={styles.notesTitle}>Writer's Note</h3>
            <p className={styles.notesText}>
              This piece explores the overwhelming, sudden intensity of young love and the bittersweet ache of a looming separation. Written in a raw, conversational style, it captures how a brief four-day encounter can completely shift someone's world, turning ordinary settings to spaces filled with longing
            </p>
          </div>
        </FadeIn>
      </div>

      <div className={styles.recentSection}>
        <FadeIn>
          <SectionTitle
            label="ARCHIVE"
            title="Recent Pieces"
            description="More thoughts and musings from the notebook."
          />
        </FadeIn>

        <div className={styles.recentGrid}>
          {recentPoems.map((poem, index) => (
            <FadeIn key={poem.title} direction="up" delay={index * 150}>
              <Link href="#" className={styles.poemCard}>
                <h3 className={styles.cardTitle}>{poem.title}</h3>
                <p className={styles.cardExcerpt}>"{poem.excerpt}"</p>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
