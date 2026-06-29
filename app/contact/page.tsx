import Link from "next/link";
import FadeIn from "@/components/shared/FadeIn";
import Footer from "@/components/layout/Footer";
import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main>
      <div className={styles.page}>
        <FadeIn>
          <Link href="/" className={styles.backNav}>
            ← Back to Home
          </Link>
          <p className={styles.label}>Let's Connect</p>
          <h1 className={styles.title}>Connect.</h1>
        </FadeIn>

        <FadeIn direction="up" delay={200}>
          <form 
            className={styles.form} 
            action="mailto:vyom.sutariya0948@gmail.com" 
            method="post" 
            encType="text/plain"
          >
            <div className={styles.inputGroup}>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className={styles.input} required />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" className={styles.textarea} required></textarea>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Send Message
            </button>
          </form>
        </FadeIn>
      </div>
      <Footer />
    </main>
  );
}
