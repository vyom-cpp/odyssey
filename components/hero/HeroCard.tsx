import Image from "next/image";
import Link from "next/link";
import styles from "./HeroCard.module.css";

type HeroCardProps = {
  title?: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  className?: string;
  href?: string;
};

export default function HeroCard({
  title = "TaskFlow",
  subtitle = "MERN Task Management Platform",
  imageSrc = "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
  imageAlt = "Dark analytics dashboard on a workspace screen",
  className = "",
  href = "#",
}: HeroCardProps) {
  const CardComponent = href.startsWith("/") ? Link : "a";

  return (
    <CardComponent href={href} className={`${styles.card} ${className}`}>
      <div className={styles.top}>
        <div>
          <h3>{title}</h3>
          <p>{subtitle}</p>
        </div>

        <button className={styles.icon} aria-label={`Open ${title}`}>
          ↗
        </button>
      </div>

      <div className={styles.preview}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 767px) 78vw, (max-width: 1023px) 42vw, 24vw"
          className={styles.image}
        />
      </div>
    </CardComponent>
  );
}
