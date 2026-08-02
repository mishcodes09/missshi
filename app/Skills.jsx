import styles from "./Skills.module.css";

const SKILL_GROUPS = [
  {
    label: "Design",
    skills: [
      "UX Research",
      "UI Design",
      "Figma",
      "Interaction Design",
      "Design Systems",
      "User Testing",
      "Design Sprints",
      "Framer",
    ],
    coreCount: 3,
  },
  {
    label: "Development",
    skills: [
      "React",
      "JavaScript",
      "Next.js",
      "HTML5",
      "CSS3",
      ".NET/ASP.NET Core",
      "RESTful APIs",
      "Git & GitHub",
      "No-Code/Webflow",
    ],
    coreCount: 3,
  },
];

export default function Skills() {
  return (
    <section className={styles.section} id="skills" aria-labelledby="skills-heading">
      <h2 className={styles.heading} id="skills-heading">Skills</h2>

      <div className={styles.groups}>
        {SKILL_GROUPS.map((group) => (
          <div className={styles.group} key={group.label}>
            <p className={styles.groupLabel}>{group.label}</p>
            <ul className={styles.pillList}>
              {group.skills.map((skill, i) => (
                <li
                  key={skill}
                  className={`${styles.pill} ${
                    i < group.coreCount ? styles.pillFilled : styles.pillOutlined
                  }`}
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
