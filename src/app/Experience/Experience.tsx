"use client";
import React, { useState } from "react";
import { useDarkMode } from "../DarkModeProvider";
import Header from "../components/Header";
import LetsConnectButton from "../components/LetsConnectButton";

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
  const [step, setStep] = useState(0);
  const total = experiences.length;
  const exp = experiences[step];
  return (
    <div
      data-darkmode={darkMode ? "on" : "off"}
      className="w-full max-w-[900px] flex flex-col items-center mx-auto"
    >
      {/* Status Bar */}
      <div
        className={`w-full max-w-[1100px] mx-auto mb-4 mt-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-2 px-8 py-4 shadow-xl font-medium border text-base ${
          darkMode
            ? "bg-gradient-to-br from-[#232350] via-[#181825] to-[#232350] border-[#333355] text-[#b0b0ff]"
            : "bg-gradient-to-br from-[#e0e0f7] via-[#f5f5fa] to-[#e0e0f7] border-[#ccccdd] text-[#232339]"
        }`}
      >
        <span>
          <span className="font-semibold">Current:</span> Full Stack Developer @
          Renov-AI Technology Inc.
        </span>
        <span className="flex items-center gap-2">
          <span className="hidden sm:inline">
            Open to new opportunities & consulting.
          </span>
          <LetsConnectButton className="ml-2 whitespace-nowrap min-w-[170px] h-[48px] flex items-center justify-center">
            Contact Me →
          </LetsConnectButton>
        </span>
      </div>
      <div className="w-full max-w-[1100px] flex flex-col items-center">
        <Header />
        <p
          className={`text-[1.2rem] text-center mb-8 ${
            darkMode ? "text-[#b0b0ff]" : "text-[#444466]"
          }`}
        >
          Experience
        </p>
      </div>
      {/* Stepper Experience Card */}
      <div className="w-full max-w-[1100px] flex flex-col items-center">
        <div
          className={`p-8 rounded-2xl shadow-xl flex flex-col transition-colors duration-300 border w-full mt-4 ${
            darkMode
              ? "bg-gradient-to-br from-[#232350] via-[#181825] to-[#232350] border-[#333355] text-[#e0e0e0]"
              : "bg-gradient-to-br from-[#e0e0f7] via-[#f5f5fa] to-[#e0e0f7] border-[#ccccdd] text-[#232339]"
          }`}
        >
          <div className="flex flex-col gap-1 mb-2">
            <h2
              className={`text-lg font-bold ${
                darkMode ? "text-[#b0b0ff]" : "text-[#232339]"
              }`}
            >
              {exp.role} — {exp.company}
            </h2>
            <p className="text-sm font-medium">{exp.duration}</p>
          </div>
          <ul className="mb-3 pl-5 list-disc">
            {exp.description.map((line, i) => (
              <li
                key={i}
                className={`text-[1.05rem] mb-1 ${
                  darkMode ? "text-[#b0b0b0]" : "text-[#444466]"
                }`}
              >
                {line}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2 mb-4">
            {exp.tags.map((tag, i) => (
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
          {/* Stepper Controls */}
          <div className="flex justify-between items-center mt-2">
            <button
              onClick={() => setStep((s) => Math.max(0, s - 1))}
              disabled={step === 0}
              className={`px-4 py-2 rounded font-semibold transition-colors border mr-2 ${
                step === 0
                  ? "opacity-50 cursor-not-allowed"
                  : darkMode
                  ? "bg-[#232350] border-[#333355] text-[#b0b0ff] hover:bg-[#333355]"
                  : "bg-[#e0e0f7] border-[#ccccdd] text-[#232339] hover:bg-[#ccccdd]"
              }`}
            >
              Previous
            </button>
            <span className="text-sm font-mono">
              {step + 1} / {total}
            </span>
            <button
              onClick={() => setStep((s) => Math.min(total - 1, s + 1))}
              disabled={step === total - 1}
              className={`px-4 py-2 rounded font-semibold transition-colors border ml-2 ${
                step === total - 1
                  ? "opacity-50 cursor-not-allowed"
                  : darkMode
                  ? "bg-[#232350] border-[#333355] text-[#b0b0ff] hover:bg-[#333355]"
                  : "bg-[#e0e0f7] border-[#ccccdd] text-[#232339] hover:bg-[#ccccdd]"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
