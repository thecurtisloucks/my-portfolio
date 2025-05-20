"use client";
import React from "react";
import { useDarkMode } from "../DarkModeProvider";
import styles from "../Home.module.css";
import Header from "../components/Header";

const AboutMe = () => {
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
          About Me
        </p>
      </div>
      <main className="aboutMeMain" style={{ width: "100%", maxWidth: 900 }}>
        <h1 className="aboutMeTitle">About Me</h1>
        <p className="aboutMeParagraph">
          Hi, I&apos;m <span className="aboutMeName">Curtis Loucks</span> — a
          full-stack software developer passionate about building intuitive,
          scalable digital experiences across mobile and web platforms.
        </p>
        <p className="aboutMeParagraph">
          I thrive at the intersection of innovation and practicality, with
          hands-on experience developing apps that serve real-world needs — from
          AI-driven renovation platforms to cross-platform social tools.
          I&apos;ve worked across diverse teams and tech stacks, always focusing
          on clean architecture, collaborative workflows, and measurable impact.
        </p>
        <p className="aboutMeParagraph">
          My toolkit includes <strong>React</strong>, <strong>Angular</strong>,{" "}
          <strong>Flutter</strong>, and <strong>React Native</strong> for
          frontend work, and <strong>Node.js</strong>, <strong>Python</strong>,
          and <strong>Firebase</strong> on the backend. I&apos;m comfortable
          deploying with <strong>AWS</strong>, <strong>Google Cloud</strong>,
          and using CI/CD best practices. I also enjoy experimenting with{" "}
          <strong>Unity</strong>, <strong>3D point clouds</strong>, and AI
          modeling with <strong>PyTorch</strong>.
        </p>
        <p className="aboutMeParagraph">
          Outside of coding, I&apos;m driven by continuous learning, design
          thinking, and solving problems that matter. I value strong
          communication, agile collaboration, and building technology that
          people actually love to use.
        </p>
      </main>
    </div>
  );
};

export default AboutMe;
