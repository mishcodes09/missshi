"use client";

import { useState } from "react";
import ProjectCard from "../../components/ProjectCard";
import styles from "./page.module.css";

const FILTERS = [
  { key: "all", label: "All" },
  { key: "development", label: "Coding" },
  { key: "design", label: "UI/UX" },
];

export default function ProjectsGrid({ projects }) {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <>
      <div className={styles.filters} role="tablist" aria-label="Filter projects by category">
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

      <div className={styles.grid}>
        {filteredProjects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </>
  );
}
