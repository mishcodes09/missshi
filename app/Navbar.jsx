"use client";

import { Fragment, useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#resume", label: "Resume" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="navbar__logo">
        <span className="logo-dot" />
        <span className="logo-text">mishsspace</span>
      </div>

      <nav className="navbar__links">
        {NAV_LINKS.map(({ href, label }, i) => (
          <Fragment key={href}>
            <a href={href}>{label}</a>
            {i < NAV_LINKS.length - 1 && <span className="divider">|</span>}
          </Fragment>
        ))}
      </nav>

      <button
        type="button"
        className={`navbar__toggle ${menuOpen ? "navbar__toggle--open" : ""}`}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
        <span className="navbar__toggle-bar" />
      </button>

      {menuOpen && (
        <div className="navbar__overlay" role="dialog" aria-modal="true">
          <nav className="navbar__overlay-links">
            {NAV_LINKS.map(({ href, label }) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
