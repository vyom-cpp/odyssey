import styles from "./Section.module.css";

type SectionProps = {
  id?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ id, children, className = "" }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className}`}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
