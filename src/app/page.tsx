"use client";

import { useDarkMode } from "./DarkModeProvider";
import Header from "./components/Header";
import styles from "./Home.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const stuff = [
  {
    title: "AI-Powered Web App",
    description: "A document summarizer using React and FastAPI.",
    tech: ["Python", "FastAPI", "React", "OpenAI API"],
    link: "#",
  },
  {
    title: "Real-Time Chat Tool",
    description: "A real-time collaboration tool using Elixir and Phoenix.",
    tech: ["Elixir", "Phoenix", "LiveView"],
    link: "#",
  },
  {
    title: "Web3 DApp",
    description: "A decentralized app using Solidity and Next.js.",
    tech: ["Solidity", "Web3.js", "Next.js", "IPFS"],
    link: "#",
  },
  {
    title: "3D Visualization App",
    description: "Interactive 3D viewer with Flutter and Unity.",
    tech: ["Flutter", "Unity", "WebGL"],
    link: "#",
  },
  {
    title: "Data Engineering Pipeline",
    description: "Streaming + batch processing using Scala and Spark.",
    tech: ["Scala", "Apache Spark", "Kafka"],
    link: "#",
  },
  {
    title: "Edge AI + WASM",
    description: "AI model inference in browser using Rust + WebAssembly.",
    tech: ["Rust", "WASM", "TensorFlow Lite"],
    link: "#",
  },
  {
    title: "DevOps CI/CD Dashboard",
    description:
      "Live dashboard showing builds, test results, and deploy status.",
    tech: ["Node.js", "Docker", "GitHub Actions", "React"],
    link: "#",
  },
  {
    title: "Serverless Expense Tracker",
    description:
      "A budget tracker with serverless backend and real-time updates.",
    tech: ["AWS Lambda", "DynamoDB", "React"],
    link: "#",
  },
  {
    title: "AI-Powered Resume Analyzer",
    description: "Upload a resume and get job-fit scores using NLP.",
    tech: ["Python", "Streamlit"],
    link: "#",
  },
  {
    title: "AI Art Generator Web App",
    description:
      "Generate unique artwork using AI models like Stable Diffusion.",
    tech: ["Vite", "TypeScript", "Replicate API"],
    link: "#",
  },
  {
    title: "Custom VS Code Extension",
    description:
      "A productivity tool like a custom color picker or linter plugin.",
    tech: ["TypeScript", "Node.js"],
    link: "#",
  },
  {
    title: "Next.js SaaS Starter",
    description: "Boilerplate SaaS app with auth, billing, and dashboard.",
    tech: ["Next.js", "Stripe", "Prisma"],
    link: "#",
  },
  {
    title: "GraphQL Social Feed App",
    description: "A social feed app with GraphQL and real-time updates.",
    tech: ["Apollo", "Hasura", "Svelte"],
    link: "#",
  },
  {
    title: "AR Furniture Preview App",
    description: "Preview furniture in your room using AR.",
    tech: ["Unity", "AR Foundation"],
    link: "#",
  },
  {
    title: "Blockchain Explorer Dashboard",
    description: "Visualize blockchain activity and token info.",
    tech: ["React", "Ethers.js", "The Graph"],
    link: "#",
  },
  {
    title: "Open Source Contribution Showcase",
    description: "Display your PRs, issues, and starred projects beautifully.",
    tech: ["GitHub API", "Astro"],
    link: "#",
  },
];

export default function Home() {
  const { darkMode } = useDarkMode();
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

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
          Full Stack Developer • AI + Web3 Enthusiast
        </p>
      </div>
      <div className={styles.projectsGrid}>
        {stuff.map((project) => (
          <div
            key={project.title}
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
            <p
              className={
                styles.projectTech +
                (darkMode
                  ? ` ${styles.projectTechDark}`
                  : ` ${styles.projectTechLight}`)
              }
            >
              {project.tech.join(" • ")}
            </p>
            <a
              href={project.link}
              className={
                styles.projectLink +
                (darkMode
                  ? ` ${styles.projectLinkDark}`
                  : ` ${styles.projectLinkLight}`)
              }
              target="_blank"
              rel="noopener noreferrer"
            >
              View project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
