"use client";
import React, { useState } from "react";
import { useDarkMode } from "../DarkModeProvider";
import styles from "../Home.module.css";
import Header from "../components/Header";
import DarkModeToggleFloating from "../components/DarkModeToggleFloating";

const Contact = () => {
  const email = "curtis.g.loucks@gmail.com";
  const [copied, setCopied] = useState(false);
  const { darkMode } = useDarkMode();

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      data-darkmode={darkMode ? "on" : "off"}
      className={
        styles.homeWrapper + (darkMode ? ` ${styles.dark}` : ` ${styles.light}`)
      }
    >
      <DarkModeToggleFloating />
      <div className={styles.headerSection}>
        <Header />
        <p
          className={
            styles.tagline +
            (darkMode ? ` ${styles.taglineDark}` : ` ${styles.taglineLight}`)
          }
        >
          Contact
        </p>
      </div>
      <main style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2rem",
            marginBottom: "1rem",
            textAlign: "center",
          }}
        >
          Contact Me
        </h1>
        <p
          style={{ fontSize: "1.1rem", textAlign: "center", marginBottom: 32 }}
        >
          I&apos;d love to hear from you — whether it&apos;s about a project,
          collaboration, or just to connect. Feel free to reach out to me
          directly via email:
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: darkMode ? "#232350" : "#e0e0f7",
            borderRadius: 999,
            padding: "1rem 2rem",
            boxShadow: darkMode ? "0 2px 8px #232350" : "0 2px 8px #e0e0f7",
            marginBottom: 24,
            gap: 16,
          }}
        >
          <span
            style={{
              color: darkMode ? "#7dafff" : "#3b5fff",
              fontWeight: 600,
              fontSize: "1.1rem",
            }}
          >
            {email}
          </span>
          <button
            onClick={handleCopy}
            style={{
              marginLeft: 16,
              fontSize: "0.95rem",
              color: darkMode ? "#b0b0ff" : "#3b5fff",
              background: "none",
              border: "none",
              cursor: "pointer",
              textDecoration: "underline",
            }}
          >
            {copied ? "Copied!" : "Copy"}
          </button>
          <a
            href={`mailto:${email}`}
            style={{
              marginLeft: 16,
              display: "inline-block",
              background: darkMode ? "#7dafff" : "#3b5fff",
              color: "#fff",
              fontWeight: 600,
              padding: "0.75rem 2rem",
              borderRadius: 999,
              textDecoration: "none",
              transition: "background 0.3s",
              fontSize: "0.95rem",
            }}
          >
            Send Email
          </a>
        </div>
      </main>
    </div>
  );
};

export default Contact;
