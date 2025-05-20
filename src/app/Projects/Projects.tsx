"use client";
import React from "react";
import { useDarkMode } from "../DarkModeProvider";
import styles from "../Home.module.css";
import Header from "../components/Header";

const projects = [
  {
    title: "AI-Powered Renovation Platform",
    timeline: "2024 – Present",
    description:
      "Developing a multi-role renovation platform (admin, contractor, homeowner) using Flutter, Python, and Unity. Includes AI image modeling and 3D scene generation with Unity.",
    tags: ["Flutter", "Python", "Unity", "AI", "3D Modeling"],
  },
  {
    title: "Full Banking Site Revamp",
    timeline: "2021 – 2025",
    description:
      "Refactored and deployed a banking website serving 800,000+ users. Upgraded React components with Ant Design and Less.js, and implemented testing with Jest and RTL.",
    tags: ["React", "Ant Design", "Google Cloud", "Jest", "CI/CD"],
  },
  {
    title: "Cross-Platform Social Media App",
    timeline: "2021",
    description:
      "Built a React Native social platform with Firebase backend and reusable UI components. Released features collaboratively across global development teams.",
    tags: ["React Native", "Firebase", "UX", "Custom Hooks"],
  },
  {
    title: "3D Point Cloud Viewer",
    timeline: "2024",
    description:
      "Proof of concept for rendering and interacting with 3D point cloud data using Flutter and Unity. Focused on performance, visual accuracy, and interactivity.",
    tags: ["Flutter", "Unity", "3D", "Rendering"],
  },
  {
    title: "Developer Portfolio & Tools",
    timeline: "2025",
    description:
      "Personal portfolio and dev utilities built with React and Tailwind. Clean UI design, responsive layouts, and real-world project insights.",
    tags: ["React", "Tailwind", "Portfolio"],
  },
];

const Projects = () => {
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
          Projects
        </p>
      </div>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={
              styles.projectCard +
              (darkMode
                ? ` ${styles.projectCardDark}`
                : ` ${styles.projectCardLight}`)
            }
          >
            <h2
              className={
                styles.projectTitle +
                (darkMode
                  ? ` ${styles.projectTitleDark}`
                  : ` ${styles.projectTitleLight}`)
              }
            >
              {project.title}
            </h2>
            <p className={styles.projectTech}>{project.timeline}</p>
            <p
              className={
                styles.projectDesc +
                (darkMode
                  ? ` ${styles.projectDescDark}`
                  : ` ${styles.projectDescLight}`)
              }
            >
              {project.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {project.tags.map((tag, i) => (
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

export default Projects;
