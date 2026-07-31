"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import styles from "./ZoomableImage.module.css";

export default function ZoomableImage({ src, alt, className, wrapClassName }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <div
        className={`${styles.trigger} ${wrapClassName || ""}`}
        onClick={() => setOpen(true)}
        role="button"
        tabIndex={0}
        aria-label={`View full size: ${alt || "image"}`}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        }}
      >
        <img src={src} alt={alt} className={className} />
      </div>

      {open &&
        createPortal(
          <div className={styles.overlay} onClick={() => setOpen(false)}>
            <button
              type="button"
              className={styles.close}
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              ×
            </button>
            <img
              src={src}
              alt={alt}
              className={styles.fullImage}
              onClick={(e) => e.stopPropagation()}
            />
          </div>,
          document.body
        )}
    </>
  );
}
