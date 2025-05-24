"use client";

import Link from "next/link";
import { useDarkMode } from "../DarkModeProvider";
import { useState } from "react";

export default function TopNav() {
  const { darkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  return (
    <nav
      data-darkmode={darkMode ? "on" : "off"}
      className={`fixed top-0 left-0 w-full z-50 flex flex-col items-center h-[60px] transition-colors duration-300 shadow-lg backdrop-blur-md bg-opacity-80 border-b ${
        darkMode
          ? "bg-[#181825]/80 text-[#e0e0e0] border-[#232350]"
          : "bg-[#f5f5fa]/80 text-[#181825] border-[#e0e0f7]"
      }`}
    >
      <div className="w-full max-w-[1100px] flex flex-row items-center justify-between px-6 h-[60px]">
        <div className="text-xl font-extrabold tracking-wide select-none text-left w-auto flex-shrink-0 cursor-pointer transition-transform duration-200 hover:scale-105 hover:text-blue-400">
          Curtis Loucks
        </div>
        <ul className="flex-1 flex gap-6 list-none m-0 p-0 justify-center hidden md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  navLinkClass(darkMode) +
                  " transition-all duration-200 hover:scale-105 hover:underline underline-offset-4"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className={
            `md:hidden flex flex-col justify-center items-center w-9 h-9 bg-none border-none cursor-pointer z-100` +
            (open ? " open" : "")
          }
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span
            className={`block w-6 h-[3px] bg-current rounded my-[3px] transition-all duration-300 ${
              open ? "translate-y-1.5 rotate-45" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-current rounded my-[3px] transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-[3px] bg-current rounded my-[3px] transition-all duration-300 ${
              open ? "-translate-y-1.5 -rotate-45" : ""
            }`}
          ></span>
        </button>
        {open && (
          <ul
            className={`flex flex-col absolute top-[60px] right-0 w-screen ${
              darkMode
                ? "bg-[#181825] text-[#e0e0e0] border-b border-[#232350]"
                : "bg-[#f5f5fa] text-[#181825] border-b border-[#e0e0f7]"
            } shadow z-50 pb-4 md:hidden`}
          >
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={navLinkClass(darkMode, true)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/Projects", label: "Projects" },
  { href: "/Experience", label: "Experience" },
  { href: "/PhotographyPortfolio", label: "Photography Portfolio" },
  { href: "/Blog", label: "Blog" },
  { href: "/Testimonials", label: "Testimonials" },
  { href: "/Contact", label: "Contact" },
];

function navLinkClass(darkMode: boolean, mobile = false) {
  return (
    `text-base font-medium no-underline transition-colors rounded px-2 py-1 ` +
    (darkMode
      ? "text-[#e0e0e0] hover:bg-[#232350] hover:text-[#b0b0ff]"
      : "text-[#181825] hover:bg-[#e0e0f7] hover:text-[#232350]") +
    (mobile ? " block py-3 px-4 text-lg" : "")
  );
}
