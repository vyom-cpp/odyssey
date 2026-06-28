"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CustomCursor.module.css";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isMagnetic, setIsMagnetic] = useState(false);

  const mouseCoords = useRef({ x: 0, y: 0 });
  const ringCoords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Hide custom cursor on mobile/touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    const onMouseMove = (e: MouseEvent) => {
      mouseCoords.current.x = e.clientX;
      mouseCoords.current.y = e.clientY;
    };

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const isLink = target.closest("a");
      const isButton = target.closest("button");
      const isCard = target.closest(`[class*="card"]`);

      if (isLink || isButton) {
        setIsHovered(true);
        if (isButton) {
          setIsMagnetic(true);
        } else {
          setIsMagnetic(false);
        }
      } else if (isCard) {
        setIsHovered(true);
        setIsMagnetic(false);
      } else {
        setIsHovered(false);
        setIsMagnetic(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    let animationFrameId: number;

    const render = () => {
      // Lerp for outer ring (0.15 interpolation rate for high responsiveness and fluid motion)
      const ease = 0.15;
      ringCoords.current.x += (mouseCoords.current.x - ringCoords.current.x) * ease;
      ringCoords.current.y += (mouseCoords.current.y - ringCoords.current.y) * ease;

      // Update positions using transform3d to trigger GPU acceleration
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseCoords.current.x}px, ${mouseCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringCoords.current.x}px, ${ringCoords.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div ref={dotRef} className={`${styles.dot} ${isHovered ? styles.dotHover : ""}`} />
      <div
        ref={ringRef}
        className={`
          ${styles.ring}
          ${isHovered ? styles.ringHover : ""}
          ${isMagnetic ? styles.ringMagnetic : ""}
        `}
      />
    </>
  );
}
