import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import Section from "@/components/shared/Section";
import SectionTitle from "@/components/shared/SectionTitle";
import styles from "./PhotographySection.module.css";

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80", alt: "Mountain landscape at dusk" },
  { id: 2, src: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&w=900&q=80", alt: "Golden gate bridge" },
  { id: 3, src: "https://images.unsplash.com/photo-1518599904199-0ca897819ddb?auto=format&fit=crop&w=900&q=80", alt: "Abstract architecture" },
  { id: 4, src: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=900&q=80", alt: "Roadtrip nature" },
  { id: 5, src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=900&q=80", alt: "Lake view" },
  { id: 6, src: "https://images.unsplash.com/photo-1506744626753-eda818c6cce5?auto=format&fit=crop&w=900&q=80", alt: "Ocean waves" },
];

const collections = [
  { title: "Street", src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80" },
  { title: "Landscape", src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80" },
  { title: "Architecture", src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" },
  { title: "Nature", src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=1200&q=80" },
];

export default function PhotographySection() {
  return (
    <Section id="photography">
      <header className={styles.hero}>
        <FadeIn>
          <p className={styles.eyebrow}>Visual Journal</p>
          <h1 className={styles.title}>Photography.</h1>
          <p className={styles.description}>
            Capturing moments, light, and geometry. A collection of visual stories from streets, mountains, and everywhere in between.
          </p>
        </FadeIn>
      </header>

      <FadeIn>
        <div className={styles.fullWidthImage}>
          <Image
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80"
            alt="Majestic mountain peak"
            fill
            className={styles.image}
            priority
          />
        </div>
      </FadeIn>

      <div className={styles.photoGrid}>
        {photos.map((photo, i) => (
          <FadeIn key={photo.id} direction="up" delay={i * 100}>
            <div className={styles.photoWrapper}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.image}
              />
            </div>
          </FadeIn>
        ))}
      </div>

      <div className={styles.collectionsSection} style={{ marginTop: '8rem' }}>
        <FadeIn>
          <SectionTitle
            label="ARCHIVE"
            title="Collections"
            description="Curated series based on subject matter and location."
          />
        </FadeIn>

        <div className={styles.collections}>
          {collections.map((col, i) => (
            <FadeIn key={col.title} direction="up" delay={i * 100}>
              <Link href="#" className={styles.collectionCard}>
                <Image
                  src={col.src}
                  alt={col.title}
                  fill
                  className={styles.image}
                />
                <h3 className={styles.collectionTitle}>{col.title}</h3>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </Section>
  );
}
