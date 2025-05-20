"use client";

import Link from "next/link";
import { useDarkMode } from "../DarkModeProvider";
import { useState } from "react";
import styles from "./TopNav.module.css";

export default function TopNav() {
  const { darkMode } = useDarkMode();
  const [open, setOpen] = useState(false);
  return (
    <nav
      data-darkmode={darkMode ? "on" : "off"}
      className={
        styles.topNav + (darkMode ? ` ${styles.dark}` : ` ${styles.light}`)
      }
    >
      <div className={styles.navInner}>
        <div className={styles.brand}>Curtis Loucks</div>
        <ul className={styles.navLinks + " " + styles.desktopLinks}>
          <li>
            <Link href="/" className={navLinkClass(styles, darkMode)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/AboutMe" className={navLinkClass(styles, darkMode)}>
              About Me
            </Link>
          </li>
          <li>
            <Link href="/Projects" className={navLinkClass(styles, darkMode)}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/Experience" className={navLinkClass(styles, darkMode)}>
              Experience
            </Link>
          </li>
          <li>
            <Link
              href="/PhotographyPortfolio"
              className={navLinkClass(styles, darkMode)}
            >
              Photography Portfolio
            </Link>
          </li>
          <li>
            <Link href="/Contact" className={navLinkClass(styles, darkMode)}>
              Contact
            </Link>
          </li>
        </ul>
        <button
          className={styles.hamburger + (open ? ` ${styles.open}` : "")}
          aria-label="Toggle navigation menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
          <span className={styles.hamburgerBar}></span>
        </button>
        {open && (
          <ul
            className={
              styles.navLinks +
              " " +
              styles.mobileLinks +
              (darkMode ? ` ${styles.dark}` : ` ${styles.light}`)
            }
          >
            <li>
              <Link
                href="/"
                className={navLinkClass(styles, darkMode, true)}
                onClick={() => setOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/AboutMe"
                className={navLinkClass(styles, darkMode, true)}
                onClick={() => setOpen(false)}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                href="/Projects"
                className={navLinkClass(styles, darkMode, true)}
                onClick={() => setOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/Experience"
                className={navLinkClass(styles, darkMode, true)}
                onClick={() => setOpen(false)}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                href="/PhotographyPortfolio"
                className={navLinkClass(styles, darkMode, true)}
                onClick={() => setOpen(false)}
              >
                Photography Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/Contact"
                className={navLinkClass(styles, darkMode, true)}
                onClick={() => setOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

function navLinkClass(
  styles: Record<string, string>,
  darkMode: boolean,
  mobile = false
) {
  return (
    styles.navLink +
    (darkMode ? ` ${styles.navLinkDark}` : ` ${styles.navLinkLight}`) +
    (mobile ? ` ${styles.navLinkMobile}` : "")
  );
}
