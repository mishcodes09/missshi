import styles from "./ChallengeCard.module.css";

export default function ChallengeCards({ items }) {
  if (!items?.length) return null;

  return (
    <ul className={styles.grid}>
      {items.map((item, i) => (
        <li key={i} className={styles.card}>
          <div className={styles.top}>
            <span className={styles.badge}>{i + 1}</span>
            {item.boldLabel && <h4 className={styles.heading}>{item.boldLabel}</h4>}
            {item.text && <p className={styles.text}>{item.text}</p>}
          </div>
        </li>
      ))}
    </ul>
  );
}
