"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggler from "./theme-toggle";

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const ticking = useRef(false);
  const recentlyClicked = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!ticking.current) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;

          if (!recentlyClicked.current) {
            if (currentScrollY > lastScrollY && currentScrollY > 80) {
              setShowNavbar(false);
            } else {
              setShowNavbar(true);
            }
          }

          setLastScrollY(currentScrollY);
          ticking.current = false;
        });

        ticking.current = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Reset `recentlyClicked` after short delay
  const handleLinkClick = () => {
    setIsOpen(false);
    recentlyClicked.current = true;
    setTimeout(() => {
      recentlyClicked.current = false;
    }, 1000); // 1 second delay prevents scroll-triggered hide
  };

  const navLinks = ["Home", "About", "Experience", "Blogs", "Contact"];

  const getLinkHref = (item: string) => {
    const lower = item.toLowerCase();
    if (lower === "blogs") return "/blogs";
    if (lower === "home") return "/";
    return isHome ? `#${lower}` : `/#${lower}`;
  };

  return (
    <header
      className={`w-full fixed top-0 left-0 z-50 backdrop-blur-lg transition-all duration-300 ${
        showNavbar ? "translate-y-0 shadow-md" : "-translate-y-full"
      }`}
      style={{
        backgroundColor:
          lastScrollY > 20
            ? "var(--background)"
            : "rgba(var(--background-rgb), 0.4)",
        color: "var(--foreground)",
      }}
    >
      <div className="w-[95%] md:w-[85%] mx-auto flex justify-between items-center h-20">
        {/* Logo */}
        <div className="order-1 flex items-center gap-2">
          <Image
            src="/image/logo.png"
            title="logo"
            alt="Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
        </div>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex gap-8 text-gray-700 dark:text-gray-100 text-md tracking-wider font-medium transition-colors duration-300 order-2">
          {navLinks.map((item) => (
            <Link
              key={item}
              href={getLinkHref(item)}
              className="relative group cursor-pointer"
              onClick={handleLinkClick}
            >
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Theme toggle and mobile toggler */}
        <div className="flex items-center gap-4 md:gap-0 order-2 md:order-3">
          <ThemeToggler />
          <button
            className="md:hidden text-gray-700 dark:text-gray-100"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Links */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-md animate-slideDown">
          <nav className="flex flex-col gap-4 px-6 py-4 text-gray-700 dark:text-gray-100 text-md tracking-wider font-medium">
            {navLinks.map((item) => (
              <Link
                key={item}
                href={getLinkHref(item)}
                className="hover:text-indigo-500 transition-colors"
                onClick={handleLinkClick}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
