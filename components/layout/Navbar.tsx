"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Navbar.module.css";

const links = ["Work", "Shelf", "About", "Contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.logo} onClick={closeMenu}>
          ODYSSEY
        </Link>

        <ul className={styles.menu}>
          {links.map((link) => (
            <li key={link}>
              <Link href={`/${link.toLowerCase()}`}>{link}</Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </nav>

      <div className={`${styles.overlay} ${isOpen ? styles.open : ""}`}>
        <div className={styles.overlayInner}>
          {links.map((link, index) => (
            <Link
              key={link}
              href={`/${link.toLowerCase()}`}
              style={{ transitionDelay: `${index * 70}ms` }}
              onClick={closeMenu}
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}

