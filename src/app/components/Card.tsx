import React, { ReactNode, CSSProperties } from "react";

interface CardProps {
  children: ReactNode;
  darkMode: boolean;
  className?: string;
  style?: CSSProperties;
}

export default function Card({
  children,
  darkMode,
  className = "",
  style,
}: CardProps) {
  return (
    <section
      className={`w-full rounded-2xl shadow-xl border transition-colors duration-300 p-8 relative overflow-hidden ${
        darkMode
          ? "bg-gradient-to-br from-[#232350] via-[#181825] to-[#232350] border-[#333355] text-[#e0e0e0]"
          : "bg-gradient-to-br from-[#e0e0f7] via-[#f5f5fa] to-[#e0e0f7] border-[#ccccdd] text-[#232339]"
      } ${className}`}
      style={style}
    >
      {children}
    </section>
  );
}
