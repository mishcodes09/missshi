import ZoomableImage from "./ZoomableImage";
import styles from "./FeatureBlock.module.css";

export default function FeatureBlock({ heading, image, bullets }) {
  return (
    <div className={styles.block}>
      {image && (
        <ZoomableImage
          src={image}
          alt={heading}
          wrapClassName={styles.imageWrap}
          className={styles.image}
        />
      )}
      <div className={styles.copy}>
        {heading && <h3 className={styles.heading}>{heading}</h3>}
        {bullets?.length > 0 && (
          <ul className={styles.bullets}>
            {bullets.map((bullet, i) => (
              <li key={i}>{bullet}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
