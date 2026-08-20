"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggler from "./theme-toggle";

const NAV_ITEMS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Writing", href: "/blogs" },
  { label: "Contact", id: "contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isOpen, setIsOpen] = useState(false);

  const getHref = (item: (typeof NAV_ITEMS)[number]) => {
    if (item.href) return item.href;
    return isHome ? `#${item.id}` : `/#${item.id}`;
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[60] backdrop-blur-lg border-b"
      style={{
        background: "color-mix(in srgb, var(--pg-bg) 82%, transparent)",
        borderColor: "var(--pg-line)",
        color: "var(--pg-text)",
      }}
    >
      <div className="max-w-[1180px] mx-auto px-[22px] h-[70px] flex items-center justify-between gap-4">
        <Link
          href={isHome ? "#top" : "/"}
          className="flex items-center gap-2.5"
          style={{ color: "var(--pg-text)" }}
        >
          <Image
            src="/image/logo.png"
            alt="Ravikant Waghmare"
            width={34}
            height={34}
            className="rounded-full block"
          />
          <span className="text-[15px] font-semibold tracking-tight">
            Ravikant Waghmare
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <div
            className="hidden md:flex gap-6 text-sm"
            style={{ color: "var(--pg-muted)" }}
          >
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={getHref(item)}
                className="transition-colors hover:text-[var(--pg-accent)]"
                style={{ color: "var(--pg-muted)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <ThemeToggler />

          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="md:hidden flex h-[34px] w-[38px] flex-none items-center justify-center rounded-lg border"
            style={{
              borderColor: "var(--pg-line)",
              background: "var(--pg-surface-2)",
              color: "var(--pg-text)",
            }}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </nav>
      </div>

      {isOpen && (
        <div
          className="md:hidden border-t px-[22px] py-3.5 flex flex-col gap-3.5 text-[15px]"
          style={{ borderColor: "var(--pg-line)", background: "var(--pg-bg)" }}
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={getHref(item)}
              onClick={closeMenu}
              style={{ color: "var(--pg-text)" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
