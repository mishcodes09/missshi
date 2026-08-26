import ZoomableImage from "./ZoomableImage";
import styles from "./AnnotatedScreens.module.css";

export default function AnnotatedScreens({ items }) {
  if (!items?.length) return null;

  return (
    <div className={styles.list}>
      {items.map((item, i) => (
        <div key={item.title || i} className={styles.item}>
          {item.image && (
            <ZoomableImage
              src={item.image}
              alt={item.title || `Annotated final screen ${i + 1}`}
              wrapClassName={styles.imageWrap}
              className={styles.image}
            />
          )}
          <div className={styles.copy}>
            <span className={styles.number}>Decision {String(i + 1).padStart(2, "0")}</span>
            {item.title && <h4 className={styles.title}>{item.title}</h4>}
            {item.text && <p className={styles.text}>{item.text}</p>}
          </div>
        </div>
      ))}
    </div>
  );
}
