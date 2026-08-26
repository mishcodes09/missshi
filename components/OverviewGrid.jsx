import styles from "./OverviewGrid.module.css";
import PrototypeCTA from "./PrototypeCTA";

export default function OverviewGrid({ overview, prototypeUrl }) {
  if (!overview) return null;

  const { role, type, responsibilities, timeline, tools, outcome, body } = overview;

  const rows = [
    { label: "Role", value: role && <p className={styles.primary}>{role}</p> },
    { label: "Type", value: type && <p className={styles.primary}>{type}</p> },
    {
      label: "Responsibilities",
      value: responsibilities?.length > 0 && (
        <PillList items={responsibilities} />
      ),
    },
    {
      label: "Timeline",
      value: timeline && <p className={styles.primary}>{timeline}</p>,
    },
    {
      label: "Tools",
      value: tools && <p className={styles.primary}>{tools}</p>,
    },
    {
      label: "Outcome",
      value: outcome && <p className={styles.primary}>{outcome}</p>,
    },
    {
      label: "Overview",
      value: body && (
        <>
          <p className={styles.body}>{body}</p>
          {prototypeUrl && (
            <div className={styles.ctaWrap}>
              <PrototypeCTA url={prototypeUrl} />
            </div>
          )}
        </>
      ),
    },
  ].filter((row) => row.value);

  return (
    <dl className={styles.grid}>
      {rows.map((row) => (
        <div key={row.label} className={styles.row}>
          <dt className={styles.label}>{row.label}</dt>
          <dd className={styles.value}>{row.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function PillList({ items }) {
  return (
    <ul className={styles.pillList}>
      {items.map((item) => (
        <li key={item} className={styles.pill}>
          {item}
        </li>
      ))}
    </ul>
  );
}
