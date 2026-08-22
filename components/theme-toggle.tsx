"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <span className="block h-11 w-14 flex-none" />;

  const isLight = resolvedTheme === "light";

  return (
    <button
      type="button"
      onClick={() => setTheme(isLight ? "dark" : "light")}
      aria-label="Toggle colour theme"
      title="Toggle colour theme"
      className="relative flex h-11 w-14 flex-none cursor-pointer items-center rounded-full border p-0"
      style={{ borderColor: "var(--pg-line)", background: "var(--pg-surface-2)" }}
    >
      <span
        className="absolute left-[6px] top-1/2 -translate-y-1/2 flex transition-opacity duration-300"
        style={{ opacity: isLight ? 0.75 : 0, color: "var(--pg-text)" }}
      >
        <Moon size={13} />
      </span>
      <span
        className="absolute right-[7px] top-1/2 -translate-y-1/2 flex transition-opacity duration-300"
        style={{ opacity: isLight ? 0 : 0.75, color: "var(--pg-text)" }}
      >
        <Sun size={13} />
      </span>
      <span
        className="absolute top-1/2 h-[22px] w-[22px] -translate-y-1/2 rounded-full transition-[left] duration-300"
        style={{
          left: isLight ? 29 : 3,
          background: "var(--pg-accent)",
          boxShadow: "0 0 10px var(--pg-glow)",
          transitionTimingFunction: "cubic-bezier(.5,1.6,.4,1)",
        }}
      />
    </button>
  );
}
