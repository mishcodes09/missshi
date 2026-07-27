import styles from "./IconTextList.module.css";

const ACCENTS = ["accentOrange", "accentCyan", "accentRed"];

export default function IconTextList({ items }) {
  if (!items?.length) return null;

  return (
    <ul className={styles.list}>
      {items.map((item, i) => (
        <li key={i} className={styles.item}>
          <span className={`${styles.icon} ${styles[ACCENTS[i % ACCENTS.length]]}`}>
            {item.icon}
          </span>
          <p className={styles.text}>
            {item.boldLabel && <strong className={styles.boldLabel}>{item.boldLabel} </strong>}
            {item.text}
          </p>
        </li>
      ))}
    </ul>
  );
}
