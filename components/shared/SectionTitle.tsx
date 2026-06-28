import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  label,
  title,
  description,
  align = "left",
}: SectionTitleProps) {
  return (
    <div className={`${styles.header} ${styles[align]}`}>
      <p className={styles.label}>{label}</p>
      <h2>{title}</h2>
      {description ? <p className={styles.description}>{description}</p> : null}
    </div>
  );
}
