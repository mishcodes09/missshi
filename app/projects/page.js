import projects from "../../data/projects";
import styles from "./page.module.css";
import ProjectsGrid from "./ProjectsGrid";

export const metadata = {
  title: "Projects | mishsspace",
  description: "A selection of projects by Mihle Mncunzwa.",
};

export default function ProjectsPage() {
  return (
    <section className={styles.page}>
      <div className={styles.intro}>
        <h1 className={styles.heading}>Projects</h1>
        <p className={styles.subtext}>
          A few things I&apos;ve designed and built — from scrappy weekend
          experiments to more polished apps. Click into any project for the
          full story.
        </p>
      </div>

      <ProjectsGrid projects={projects} />
    </section>
  );
}
