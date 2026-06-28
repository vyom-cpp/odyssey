import Button from "./Button";
import styles from "./PagePlaceholder.module.css";

type PagePlaceholderProps = {
  label: string;
  title: string;
  description: string;
};

export default function PagePlaceholder({
  label,
  title,
  description,
}: PagePlaceholderProps) {
  return (
    <main className={styles.page}>
      <section className={styles.shell}>
        <p className={styles.label}>{label}</p>
        <h1>{title}</h1>
        <p className={styles.description}>{description}</p>
        <Button href="/" variant="primary">
          Back to Home
        </Button>
      </section>
    </main>
  );
}
