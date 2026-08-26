import ZoomableImage from "./ZoomableImage";
import styles from "./PersonaOutcomes.module.css";

export default function PersonaOutcomes({ personas }) {
  if (!personas?.length) return null;

  return (
    <div className={styles.grid}>
      {personas.map((persona) => (
        <div key={persona.name} className={styles.card}>
          {persona.image && (
            <ZoomableImage
              src={persona.image}
              alt={`${persona.name} persona`}
              wrapClassName={styles.imageWrap}
              className={styles.image}
            />
          )}
          {persona.designOutcome && (
            <p className={styles.outcome}>
              <span className={styles.label}>Design Outcome</span>
              {persona.designOutcome}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
