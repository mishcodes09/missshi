"use client";

import { useEffect, useRef, useState } from "react";
import ZoomableImage from "./ZoomableImage";
import styles from "./PersonalExperienceSection.module.css";

const EMPHASIS = [
  {
    key: "highlight-daily-trip",
    type: "highlight",
    phrase:
      "I didn't know the other routes, the stops, the fares, or the times for anywhere beyond my daily trip.",
  },
  {
    key: "underline-depot-call",
    type: "underline",
    phrase:
      "but never confident enough to actually try — calling the depot to ask felt like more effort than it was worth, and getting it wrong meant being stranded somewhere unfamiliar.",
  },
  {
    key: "underline-trust-gap",
    type: "underline",
    phrase:
      "trusting the bus for one specific trip but avoiding it for everything else",
  },
];

function segmentParagraph(text) {
  let segments = [{ type: "text", content: text }];

  EMPHASIS.forEach(({ phrase, type, key }) => {
    segments = segments.flatMap((segment) => {
      if (segment.type !== "text") return [segment];
      const index = segment.content.indexOf(phrase);
      if (index === -1) return [segment];

      const before = segment.content.slice(0, index);
      const after = segment.content.slice(index + phrase.length);
      const result = [];
      if (before) result.push({ type: "text", content: before });
      result.push({ type, content: phrase, key });
      if (after) result.push({ type: "text", content: after });
      return result;
    });
  });

  return segments;
}

export default function PersonalExperienceSection({ method, title }) {
  const paragraphs = Array.isArray(method.body)
    ? method.body
    : method.body.split(/\n\s*\n/);
  const [firstImage, secondImage] = method.images || [];

  const [visibleKeys, setVisibleKeys] = useState(() => new Set());
  const nodesRef = useRef(new Map());

  useEffect(() => {
    const nodes = nodesRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const key = entry.target.dataset.emphasisKey;
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
    <section className={styles.section}>
      <h3 className={styles.heading}>{method.heading}</h3>
      <div className={styles.grid}>
        <div className={styles.textBox}>
          {paragraphs.filter(Boolean).map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>
              {segmentParagraph(paragraph).map((segment, j) => {
                if (segment.type === "text") return segment.content;

                const isVisible = visibleKeys.has(segment.key);
                const emphasisClass =
                  segment.type === "highlight" ? styles.highlight : styles.underline;

                return (
                  <span
                    key={j}
                    ref={registerNode(segment.key)}
                    data-emphasis-key={segment.key}
                    className={`${emphasisClass} ${isVisible ? styles.inView : ""}`}
                  >
                    {segment.content}
                  </span>
                );
              })}
            </p>
          ))}
        </div>

        {(firstImage || secondImage) && (
          <div className={styles.imageStack}>
            {firstImage && (
              <ZoomableImage
                src={firstImage}
                alt={`${method.heading} — ${title}`}
                wrapClassName={`${styles.imageWrap} ${styles.imageFront}`}
                className={styles.image}
              />
            )}
            {secondImage && (
              <ZoomableImage
                src={secondImage}
                alt={`${method.heading} — ${title} detail`}
                wrapClassName={`${styles.imageWrap} ${styles.imageBack}`}
                className={styles.image}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}
