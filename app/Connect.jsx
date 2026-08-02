import socialLinks from "../data/socialLinks";
import styles from "./Connect.module.css";

export default function Connect() {
  return (
    <section className={styles.section} id="contact" aria-labelledby="connect-heading">
      <h2 className={styles.heading} id="connect-heading">Let&apos;s connect</h2>
      <p className={styles.subtitle}>
        Open to opportunities, collaborations, or just a good chat about design.
      </p>

      <div className={styles.links}>
        {socialLinks.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            className={styles.link}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
          >
            <i className={`ti ${icon}`} aria-hidden="true" />
            <span>{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
