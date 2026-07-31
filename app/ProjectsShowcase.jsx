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

      <div className="projects-grid" id="projectsGrid" role="list">
        {filteredProjects.map((project) => {
          const badgeClass = project.liveUrl ? "live" : "coming-soon";
          const badgeText = project.liveUrl ? "Live" : "Coming Soon";

          return (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="showcase-card"
              role="listitem"
            >
              <span className={`status-badge ${badgeClass}`}>{badgeText}</span>
              <img src={project.image} alt={project.title} />

              <div className="showcase-caption">
                <p className="showcase-category">Selected project</p>
                <h3 className="showcase-name">{project.title}</h3>
                <p className="showcase-desc">{project.tagline}</p>

                <div className="tech-stack">
                  {project.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="showcase-links">
                  <span className="project-link primary">View case study</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
