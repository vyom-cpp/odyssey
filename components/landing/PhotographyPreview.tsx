import Image from "next/image";
import Section from "../shared/Section";
import SectionTitle from "../shared/SectionTitle";
import styles from "./PhotographyPreview.module.css";
import FadeIn from "../shared/FadeIn";

const photos = [
  {
    id: "photo-1",
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1200&q=80",
    alt: "Paris street view in rain with reflection lines",
    caption: "Chasing Rain // Paris",
    className: styles.largePhoto,
    sizes: "(max-width: 767px) 90vw, (max-width: 1024px) 60vw, 55vw",
  },
  {
    id: "photo-2",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
    alt: "Light shining through windows on minimalist interior geometric shadow lines",
    caption: "Geometries of Light // Tokyo",
    className: styles.smallPhotoOne,
    sizes: "(max-width: 767px) 90vw, 35vw",
  },
  {
    id: "photo-3",
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=700&q=80",
    alt: "Lone figure walking in early morning fog next to architectural pillars",
    caption: "Solitude // Berlin",
    className: styles.smallPhotoTwo,
    sizes: "(max-width: 767px) 90vw, 35vw",
  },
];

export default function PhotographyPreview() {
  return (
    <Section id="photography-preview">
      <FadeIn direction="up">
        <SectionTitle
          label="VISUAL JOURNAL"
          title="Captured Moments"
          description="A selection of street scenes and architectural geometries captured through my lens, focusing on quiet corners, geometry, and transient shadow lines."
        />
      </FadeIn>

      <div className={styles.grid}>
        {photos.map((photo, index) => (
          <FadeIn
            key={photo.id}
            direction="up"
            delay={index * 150}
            className={`${styles.photoCard} ${photo.className}`}
          >
            <div className={styles.imageWrapper}>
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes={photo.sizes}
                className={styles.image}
              />
            </div>
            <div className={styles.meta}>
              <span className={styles.captionText}>{photo.caption}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
