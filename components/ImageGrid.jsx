import styles from "./ImageGrid.module.css";

export default function ImageGrid({ images, alt }) {
  if (!images?.length) return null;

  return (
    <div className={styles.grid}>
      {images.map((src, i) => (
        <div key={src + i} className={styles.imageWrap}>
          <img src={src} alt={alt ? `${alt} ${i + 1}` : ""} className={styles.image} />
        </div>
      ))}
    </div>
  );
}
