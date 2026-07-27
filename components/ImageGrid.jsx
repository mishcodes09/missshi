import ZoomableImage from "./ZoomableImage";
import styles from "./ImageGrid.module.css";

export default function ImageGrid({ images, alt }) {
  if (!images?.length) return null;

  return (
    <div className={styles.grid}>
      {images.map((src, i) => (
        <ZoomableImage
          key={src + i}
          src={src}
          alt={alt ? `${alt} ${i + 1}` : ""}
          wrapClassName={styles.imageWrap}
          className={styles.image}
        />
      ))}
    </div>
  );
}
