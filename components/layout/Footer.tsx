"use client";

import styles from "./Footer.module.css";

const socials = [
  { name: "GitHub", href: "https://github.com/vyom-cpp" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Twitter", href: "https://twitter.com" },
  { name: "Read.cv", href: "https://read.cv" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.grid}>
          <div className={styles.left}>
            <p className={styles.brand}>ODYSSEY</p>
            <p className={styles.copyright}>
              © {new Date().getFullYear()} Vyom. All rights reserved.
            </p>
          </div>

          <div className={styles.socialsCol}>
            <p className={styles.label}>Connect</p>
            <ul className={styles.list}>
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <span>{social.name}</span>
                    <span className={styles.arrow} aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.contactCol}>
            <p className={styles.label}>Email</p>
            <a href="mailto:vyom.sutariya0948@gmail.com" className={styles.email}>
              vyom.sutariya0948@gmail.com
            </a>
          </div>

          <div className={styles.topCol}>
            <button onClick={scrollToTop} className={styles.topButton} aria-label="Back to top">
              <span>Top</span>
              <span className={styles.topArrow} aria-hidden="true">
                ↑
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
