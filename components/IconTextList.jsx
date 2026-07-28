import styles from "./IconTextList.module.css";

const ACCENTS = ["accentOrange", "accentCyan", "accentRed"];

export default function IconTextList({ items }) {
  if (!items?.length) return null;

  return (
    <ul className={styles.list}>
      {items.map((item, i) => {
        const accent = styles[ACCENTS[i % ACCENTS.length]];

        return (
          <li
            key={i}
            className={item.icon ? styles.item : `${styles.item} ${styles.pastel} ${accent}`}
          >
            {item.icon && (
              <span className={`${styles.icon} ${accent}`}>{item.icon}</span>
            )}
            <p className={styles.text}>
              {item.boldLabel && <strong className={styles.boldLabel}>{item.boldLabel} </strong>}
              {item.text}
            </p>
          </li>
        );
      })}
    </ul>
  );
}
