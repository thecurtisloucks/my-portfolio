"use client";
import React from "react";
import { useDarkMode } from "../DarkModeProvider";
import Header from "../components/Header";
import Card from "../components/Card";

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
  {
    title: "ServiceNow IT Automation",
    timeline: "2019 – 2020",
    description:
      "Created Java automation scripts for internal tools at WestJet. Supported Jira, CI/CD tools, and documented ServiceNow workflows. Attended CAB meetings and on-call rotations.",
    tags: ["Java", "ServiceNow", "CI/CD", "IT Automation", "Jira"],
  },
  {
    title: "Cloud Infrastructure & App Monitoring",
    timeline: "2021 – 2025",
    description:
      "Monitored and supported cloud apps using GCP tools including Logs Explorer and Cloud Functions. Integrated monitoring and debugging tools into CI/CD pipelines.",
    tags: ["Google Cloud", "Logs Explorer", "Monitoring", "CI/CD"],
  },
];

const Projects = () => {
  const { darkMode } = useDarkMode();
  return (
    <div
      data-darkmode={darkMode ? "on" : "off"}
      className="w-full max-w-[1100px] flex flex-col items-center mx-auto"
    >
      <div className="w-full max-w-[1100px] flex flex-col items-center mt-12">
        <Header />
        <p
          className={`text-[1.2rem] text-center mb-8 ${
            darkMode ? "text-[#b0b0ff]" : "text-[#444466]"
          }`}
        >
          Projects
        </p>
      </div>
      <div className="w-full max-w-[1100px] grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} darkMode={darkMode}>
            <h2
              className={`text-lg font-bold mb-2 ${
                darkMode ? "text-[#b0b0ff]" : "text-[#232339]"
              }`}
            >
              {project.title}
            </h2>
            <p className="text-sm mb-1 font-medium">{project.timeline}</p>
            <p
              className={`mb-2 ${
                darkMode ? "text-[#b0b0b0]" : "text-[#444466]"
              }`}
            >
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-2">
              {project.tags.map((tag, i) => (
                <span
                  key={i}
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    darkMode
                      ? "bg-[#232350] text-[#b0b0ff]"
                      : "bg-[#e0e0f7] text-[#232339]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;
