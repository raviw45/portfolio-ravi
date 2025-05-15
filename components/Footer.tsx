import { Mail } from "lucide-react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
      }}
      className="w-full text-gray-700 dark:text-gray-300 py-8 px-6"
    >
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-4 md:flex-row md:justify-between">
        {/* Name & Copyright */}
        <p className="text-sm text-center md:text-left">
          &copy; {new Date().getFullYear()} Ravikant Waghmare. All rights
          reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-gray-700 dark:text-gray-300">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <BsGithub size={24} />
          </a>

          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <BsLinkedin size={24} />
          </a>

          <a
            href="mailto:ravikantwaghmare82@gmail.com"
            aria-label="Email"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
