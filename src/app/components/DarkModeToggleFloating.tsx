"use client";
import { useDarkMode } from "../DarkModeProvider";

export default function DarkModeToggleFloating() {
  const { darkMode, setDarkMode } = useDarkMode();
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={
        `fixed top-16 right-3 sm:top-[64px] sm:right-6 z-[100] border text-sm px-3 py-2 rounded transition-colors duration-300 shadow ` +
        (darkMode
          ? "bg-[#232350] text-[#e0e0e0] border-[#333355] hover:bg-[#232360]"
          : "bg-[#e0e0f7] text-[#181825] border-[#ccccdd] hover:bg-[#d0d0e7]")
      }
      aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}
