"use client";
import { ReactNode } from "react";
import { useDarkMode } from "../DarkModeProvider";

export default function ClientLayout({ children }: { children: ReactNode }) {
  const { darkMode } = useDarkMode();
  return (
    <div
      data-darkmode={darkMode ? "on" : "off"}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        transition: "background 0.3s, color 0.3s",
        paddingTop: 60,
      }}
    >
      {children}
    </div>
  );
}
