"use client";
import { ReactNode } from "react";
import { useDarkMode } from "../DarkModeProvider";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { darkMode } = useDarkMode();
  return (
    <div
      data-darkmode={darkMode ? "on" : "off"}
      className={`min-h-screen flex flex-col items-center pt-[60px] p-4 transition-colors duration-300 ${
        darkMode ? "bg-[#181825] text-[#e0e0e0]" : "bg-[#f5f5fa] text-[#181825]"
      }`}
    >
      {children}
    </div>
  );
}
