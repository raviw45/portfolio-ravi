import React from "react";

const Footer = () => {
  return (
    <footer
      className="border-t px-[22px] py-[26px]"
      style={{ borderColor: "var(--pg-line)" }}
    >
      <div
        className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-between gap-3.5 text-[13px]"
        style={{ color: "var(--pg-faint)" }}
      >
        <span>&copy; {new Date().getFullYear()} Ravikant Waghmare · Built with Next.js and three.js</span>
        <span className="flex gap-[18px]">
          <a
            href="https://github.com/raviw45"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--pg-accent)]"
            style={{ color: "var(--pg-faint)" }}
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ravikant-waghmare"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--pg-accent)]"
            style={{ color: "var(--pg-faint)" }}
          >
            LinkedIn
          </a>
          <a
            href="/Ravikant_Waghmare_Resume.pdf"
            download
            className="transition-colors hover:text-[var(--pg-accent)]"
            style={{ color: "var(--pg-faint)" }}
          >
            Résumé
          </a>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
