"use client";

import { useState } from "react";
import Link from "next/link";
import projects from "../data/projects";
import styles from "./ProjectsShowcase.module.css";

const FILTERS = [
  { key: "design", label: "Design" },
  { key: "development", label: "Code" },
];

export default function ProjectsShowcase() {
  const [filter, setFilter] = useState("design");

  const filteredProjects = projects.filter(
    (project) => project.category === filter
  );

  return (
    <section
      className="projects-section projects-showcase"
      id="projects"
      aria-labelledby="projects-heading"
    >
      <div className="showcase-intro">
        <h2 className="showcase-title" id="projects-heading">
          My selected works
        </h2>
        <p className="showcase-subtitle">
          A few of the digital experiences I&apos;ve designed and shipped across
          product, marketing, and nonprofit work.
        </p>
      </div>

      <div
        className={styles.filters}
        role="tablist"
        aria-label="Filter projects by category"
      >
        {FILTERS.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            onClick={() => setFilter(key)}
            className={`${styles.filterButton} ${
              filter === key ? styles.filterButtonActive : ""
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={styles.grid} id="projectsGrid" role="list">
        {filteredProjects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className={styles.card}
            role="listitem"
          >
            <div className={styles.imageWrap}>
              <img src={project.image} alt={project.title} className={styles.image} />
            </div>

            <div className={styles.body}>
              <h3 className={styles.cardTitle}>{project.title}</h3>
              {project.description && (
                <p className={styles.description}>{project.description}</p>
              )}
              {(project.tool || project.year) && (
                <p className={styles.meta}>
                  {[project.tool, project.year].filter(Boolean).join(" · ")}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
