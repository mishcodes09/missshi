import socialLinks from "../data/socialLinks";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p className={styles.copyright}>© Mihle Mncunzwa 2026</p>

      <div className={styles.icons}>
        {socialLinks.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
          >
            <i className={`ti ${icon}`} aria-hidden="true" />
          </a>
        ))}
      </div>
    </footer>
  );
}
