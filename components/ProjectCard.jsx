import Link from "next/link";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({ project }) {
  const { slug, title, tagline, image, tags, repoUrl, category } = project;

  return (
    <article className={styles.card}>
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} />
        {category === "design" && (
          <span className={styles.designBadge}>Design</span>
        )}
      </div>

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.tagline}>{tagline}</p>

        {tags?.length > 0 && (
          <ul className={styles.tags}>
            {tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>
        )}

        <div className={styles.footer}>
          <Link href={`/projects/${slug}`} className={styles.link}>
            View Project →
          </Link>

          {category !== "design" && !repoUrl && (
            <span className={styles.private}>Private repo</span>
          )}
        </div>
      </div>
    </article>
  );
}
