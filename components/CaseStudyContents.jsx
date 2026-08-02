"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./CaseStudyContents.module.css";

export default function CaseStudyContents({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);
  const listRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  useEffect(() => {
    const activeLink = listRef.current?.querySelector(`.${styles.linkActive}`);
    activeLink?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [activeId]);

  const scrollToId = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className={styles.nav} aria-label="Case study contents">
      <p className={styles.label}>Contents</p>
      <ul className={styles.list} ref={listRef}>
        {sections.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={(e) => scrollToId(e, id)}
              className={`${styles.link} ${activeId === id ? styles.linkActive : ""}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a href="#top" onClick={(e) => scrollToId(e, "top")} className={styles.backToTop}>
        ↑ Back to top
      </a>
    </nav>
  );
}
