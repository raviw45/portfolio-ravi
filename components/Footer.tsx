import React from "react";
import SocialIcons from "./common/SocialIcons";

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
        <SocialIcons />
      </div>
    </footer>
  );
};

export default Footer;
