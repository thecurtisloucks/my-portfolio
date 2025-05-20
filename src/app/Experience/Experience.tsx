"use client";
import React from "react";
import { useDarkMode } from "../DarkModeProvider";
import styles from "../Home.module.css";
import Header from "../components/Header";

const experiences = [
  {
    role: "Full Stack Developer",
    company: "Renov-AI Technology Inc.",
    duration: "March 2025 – Present",
    description: [
      "Developing an AI-powered renovation app across web and mobile platforms using Flutter, Python, and Unity.",
      "Implementing backend infrastructure and AI image modeling with PyTorch.",
      "Supporting admin panel, contractor app, and homeowner app deployments.",
    ],
    tags: ["Flutter", "Python", "Unity", "PyTorch", "Full Stack"],
  },
  {
    role: "Full Stack Developer",
    company: "ATB Financial",
    duration: "Oct 2021 – March 2025",
    description: [
      "Revamped and deployed a personal banking site for 800,000+ users using React, Ant Design, and Less.js.",
      "Created automated tests with Jest and React Testing Library.",
      "Maintained CI/CD pipelines and backend APIs with Node.js and GCP.",
    ],
    tags: ["React", "Node.js", "GCP", "Jest", "CI/CD"],
  },
  {
    role: "React Native Developer",
    company: "Tekarra Project Services Ltd.",
    duration: "Jan 2021 – Oct 2021",
    description: [
      "Built a social media app using React Native and Firebase.",
      "Designed reusable components and custom hooks.",
      "Collaborated with global UI/UX designers and engineers.",
    ],
    tags: ["React Native", "Firebase", "Hooks", "Mobile"],
  },
  {
    role: "Software Developer Intern",
    company: "WestJet",
    duration: "May 2019 – April 2020",
    description: [
      "Automated patching/reporting workflows and documented IT processes.",
      "Created internal Java tools and managed CDN configurations via Akamai/Cloudflare.",
      "Supported Jira and CI/CD environments in Web Operations.",
    ],
    tags: ["Java", "Jira", "CI/CD", "Akamai", "Cloudflare"],
  },
];

const Experience = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      data-darkmode={darkMode ? "on" : "off"}
      className={
        styles.homeWrapper + (darkMode ? ` ${styles.dark}` : ` ${styles.light}`)
      }
    >
      <div className={styles.headerSection}>
        <Header />
        <p
          className={
            styles.tagline +
            (darkMode ? ` ${styles.taglineDark}` : ` ${styles.taglineLight}`)
          }
        >
          Experience
        </p>
      </div>
      <div className={styles.projectsGrid}>
        {experiences.map((exp, index) => (
          <div
            key={index}
            className={
              styles.projectCard +
              (darkMode
                ? ` ${styles.projectCardDark}`
                : ` ${styles.projectCardLight}`)
            }
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.25rem",
                marginBottom: "0.5rem",
              }}
            >
              <h2
                className={
                  styles.projectTitle +
                  (darkMode
                    ? ` ${styles.projectTitleDark}`
                    : ` ${styles.projectTitleLight}`)
                }
                style={{ fontSize: "1.3rem" }}
              >
                {exp.role} — {exp.company}
              </h2>
              <p className={styles.projectTech}>{exp.duration}</p>
            </div>
            <ul style={{ marginBottom: "0.75rem", paddingLeft: "1.2em" }}>
              {exp.description.map((line, i) => (
                <li
                  key={i}
                  style={{
                    color: darkMode ? "#b0b0b0" : "#444466",
                    fontSize: "1.05rem",
                    marginBottom: "0.25rem",
                  }}
                >
                  {line}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {exp.tags.map((tag, i) => (
                <span
                  key={i}
                  style={{
                    background: darkMode ? "#232350" : "#e0e0f7",
                    color: darkMode ? "#b0b0ff" : "#232339",
                    fontSize: "0.95rem",
                    fontWeight: 500,
                    padding: "0.25rem 0.75rem",
                    borderRadius: "999px",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
