"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="fixed top-4 right-4 p-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors z-50"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <FaSun className="h-5 w-5 text-yellow-500" />
      ) : (
        <FaMoon className="h-5 w-5 text-white text-slate-800" />
      )}
    </button>
  );
} 