import Link from "next/link";
import { notFound } from "next/navigation";
import projects from "../../../data/projects";
import CaseStudyTemplate from "../../../components/CaseStudyTemplate";
import styles from "./page.module.css";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) return { title: "Project not found | mishsspace" };

  return {
    title: `${project.title} | mishsspace`,
    description: project.tagline,
  };
}

export default function ProjectPage({ params }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  if (project.caseStudy) {
    return <CaseStudyTemplate project={project} />;
  }

  return <FallbackProjectPage project={project} />;
}

function FallbackProjectPage({ project }) {
  const { title, tagline, image, liveUrl, repoUrl, figmaUrl, category } = project;

  return (
    <article className={styles.page}>
      <Link href="/#projects" className={styles.back}>
        ← Back to Projects
      </Link>

      <header className={styles.header}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.tagline}>{tagline}</p>
      </header>

      <div className={styles.heroImageWrap}>
        <img src={image} alt={title} className={styles.heroImage} />
      </div>

      <div className={styles.fallbackBody}>
        {category === "design" && (
          <p className={styles.comingSoon}>Full case study coming soon.</p>
        )}

        <div className={styles.links} aria-label="Project links">
          {liveUrl && (
            <a href={liveUrl} target="_blank" rel="noreferrer" className={`${styles.linkPill} ${styles.linkPillLive}`}>
              Live Site
            </a>
          )}
          {repoUrl ? (
            <a href={repoUrl} target="_blank" rel="noreferrer" className={`${styles.linkPill} ${styles.linkPillRepo}`}>
              View Code
            </a>
          ) : (
            <span className={`${styles.linkPill} ${styles.linkPillDisabled}`} aria-disabled="true">Private</span>
          )}
          {category === "design" && (figmaUrl ? (
            <a href={figmaUrl} target="_blank" rel="noreferrer" className={`${styles.linkPill} ${styles.linkPillFigma}`}>
              View in Figma
            </a>
          ) : (
            <span className={`${styles.linkPill} ${styles.linkPillDisabled}`} aria-disabled="true">Figma coming soon</span>
          ))}
        </div>
      </div>
    </article>
  );
}
