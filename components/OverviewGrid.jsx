import styles from "./OverviewGrid.module.css";

const STATUS_CLASS = {
  live: styles.statusLive,
  "in progress": styles.statusProgress,
};

export default function OverviewGrid({ overview }) {
  if (!overview) return null;

  const {
    role,
    focus,
    responsibilities,
    platform,
    timeline,
    status,
    deliverables,
    body,
  } = overview;

  const statusClass = STATUS_CLASS[status?.toLowerCase()] || styles.statusDefault;

  const rows = [
    { label: "Role", value: role && <p className={styles.primary}>{role}</p> },
    { label: "Focus", value: focus && <p className={styles.primary}>{focus}</p> },
    {
      label: "Responsibilities",
      value: responsibilities?.length > 0 && <PillList items={responsibilities} />,
    },
    { label: "Platform", value: platform && <p className={styles.primary}>{platform}</p> },
    { label: "Timeline", value: timeline && <p className={styles.primary}>{timeline}</p> },
    {
      label: "Status",
      value: status && <span className={`${styles.statusBadge} ${statusClass}`}>{status}</span>,
    },
    {
      label: "Deliverables",
      value: deliverables?.length > 0 && <PillList items={deliverables} />,
    },
    { label: "Overview", value: body && <p className={styles.body}>{body}</p> },
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
        <li key={item} className={styles.pill}>{item}</li>
      ))}
    </ul>
  );
}
