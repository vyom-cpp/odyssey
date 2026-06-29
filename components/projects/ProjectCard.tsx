import Image from "next/image";
import Link from "next/link";
import { StaticImageData } from "next/image";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  title: string;
  category: string;
  year: string;
  description: string;
  imageSrc: string | StaticImageData;
  imageAlt: string;
  href: string;
  tags?: string[];
};

export default function ProjectCard({
  title,
  category,
  year,
  description,
  imageSrc,
  imageAlt,
  href,
  tags = [],
}: ProjectCardProps) {
  return (
    <article className={styles.card}>
      <Link href={href} className={styles.link} aria-label={`View project ${title}`}>
        <div className={styles.top}>
          <div className={styles.meta}>
            <span className={styles.category}>{category}</span>
            <span className={styles.dot}>•</span>
            <span className={styles.year}>{year}</span>
          </div>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <span className={styles.arrow} aria-hidden="true">
              ↗
            </span>
          </div>
          <p className={styles.description}>{description}</p>
          {tags.length > 0 && (
            <ul className={styles.tags} aria-label="Technologies used">
              {tags.map((tag) => (
                <li key={tag} className={styles.tag}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className={styles.imageContainer}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="(max-width: 767px) 90vw, (max-width: 1024px) 45vw, 30vw"
            className={styles.image}
            priority={false}
          />
        </div>
      </Link>
    </article>
  );
}
