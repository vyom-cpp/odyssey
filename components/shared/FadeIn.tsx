"use client";

import { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./FadeIn.module.css";

type FadeInProps = {
  children: ReactNode;
  delay?: number; // ms
  duration?: number; // ms
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
};

export default function FadeIn({
  children,
  delay = 0,
  duration = 600,
  direction = "up",
  className = "",
}: FadeInProps) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const directionClass = styles[direction];
  const visibleClass = isIntersecting ? styles.visible : "";

  return (
    <div
      ref={ref}
      className={`${styles.fadeIn} ${directionClass} ${visibleClass} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}
