import { Mail } from "lucide-react";
import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const SocialIcons = () => {
  return (
    <div className="flex gap-6 text-gray-700 dark:text-gray-300">
      <a
        href="https://github.com/raviw45"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
      >
        <BsGithub size={24} />
      </a>

      <a
        href="https://www.linkedin.com/in/ravikant-waghmare"
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
  );
};

export default SocialIcons;
