import styles from "./PrototypeCTA.module.css";

export default function PrototypeCTA({ url }) {
  if (!url) {
    return (
      <span className={`${styles.cta} ${styles.disabled}`} aria-disabled="true">
        Prototype coming soon
      </span>
    );
  }

  return (
    <a href={url} target="_blank" rel="noreferrer" className={styles.cta}>
      View Interactive Prototype ↗
    </a>
  );
}
