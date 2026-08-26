"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./ResearchStats.module.css";

function parseValue(raw) {
  const match = /^(\D*)(\d+(?:\.\d+)?)(\D*)$/.exec(raw || "");
  if (!match) return { prefix: "", target: null, suffix: raw || "" };
  const [, prefix, numStr, suffix] = match;
  return {
    prefix,
    suffix,
    target: parseFloat(numStr),
    decimals: numStr.includes(".") ? numStr.split(".")[1].length : 0,
  };
}

function AnimatedValue({ raw, play }) {
  const { prefix, suffix, target, decimals } = parseValue(raw);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!play || target === null) return;

    let frame;
    const duration = 1000;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;
      setDisplay(decimals ? Number(current.toFixed(decimals)) : Math.round(current));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [play, target, decimals]);

  if (target === null) return <>{raw}</>;

  return (
    <>
      {prefix}
      {display}
      {suffix}
    </>
  );
}

export default function ResearchStats({ stats }) {
  const bannerRef = useRef(null);
  const [play, setPlay] = useState(false);

  useEffect(() => {
    const node = bannerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  if (!stats) return null;

  const { sampleSize, sampleLabel, items } = stats;

  return (
    <div ref={bannerRef} className={styles.banner} aria-label="Research sample and key statistics">
      {(sampleSize || sampleLabel) && (
        <div className={styles.sample}>
          {sampleLabel && <span className={styles.sampleLabel}>{sampleLabel}</span>}
          {sampleSize && (
            <span className={styles.sampleSize}>
              <AnimatedValue raw={sampleSize} play={play} />
            </span>
          )}
        </div>
      )}

      {items?.length > 0 && (
        <div className={styles.grid}>
          {items.map((item, i) => (
            <div key={i} className={styles.stat}>
              <span className={styles.value}>
                <AnimatedValue raw={item.value} play={play} />
              </span>
              <span className={styles.label}>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
