"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./AboutMe.module.css";

export default function AboutMe() {
  const [visibleKeys, setVisibleKeys] = useState(() => new Set());
  const nodesRef = useRef(new Map());

  useEffect(() => {
    const nodes = nodesRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const key = entry.target.dataset.underlineKey;
          setVisibleKeys((prev) => {
            if (prev.has(key)) return prev;
            const next = new Set(prev);
            next.add(key);
            return next;
          });
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.2 }
    );

    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, []);

  const registerNode = (key) => (node) => {
    if (node) nodesRef.current.set(key, node);
  };

  return (
    <section
      className={styles.section}
      id="about"
      aria-labelledby="about-heading"
    >
      <div className={styles.grid}>
        <div className={styles.imageWrap}>
          <img
            src="/projects/mish.jpg"
            alt="Mihle Mncunzwa"
            className={styles.image}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.heading} id="about-heading">
            Get to know me a little
          </h2>
          <p className={styles.body}>
            I&apos;m Mish — a CS grad who ended up loving the space between
            design and code.{" "}
            <span
              ref={registerNode("tools")}
              data-underline-key="tools"
              className={`${styles.underline} ${visibleKeys.has("tools") ? styles.inView : ""}`}
            >
              I&apos;ve built real tools for real small businesses,
            </span>{" "}
            not just portfolio pieces,{" "}
            <span
              ref={registerNode("studio")}
              data-underline-key="studio"
              className={`${styles.underline} ${visibleKeys.has("studio") ? styles.inView : ""}`}
            >
              and I&apos;m slowly turning that into my own studio, Le Fond.
            </span>
          </p>
          <p className={styles.bodyBold}>
            Outside of that: skating, drawing, and stumbling through Mandarin.
          </p>
        </div>
      </div>
    </section>
  );
}
