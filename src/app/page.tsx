"use client";

import { useDarkMode } from "./DarkModeProvider";
import Header from "./components/Header";
import LetsConnectButton from "./components/LetsConnectButton";

export default function Home() {
  const { darkMode } = useDarkMode();

  return (
    <div
      data-darkmode={darkMode ? "on" : "off"}
      className={`fixed top-0 left-0 w-screen h-screen min-h-screen flex flex-col items-center justify-center p-4 transition-colors duration-300 overflow-y-auto ${
        darkMode ? "bg-[#181825] text-[#e0e0e0]" : "bg-[#f5f5fa] text-[#181825]"
      }`}
    >
      <div className="w-full max-w-[900px] flex flex-col items-center">
        <Header />
        <p
          className={`text-[1.2rem] text-center mb-8 ${
            darkMode ? "text-[#b0b0ff]" : "text-[#444466]"
          }`}
        >
          Full Stack Developer • AI + Web3 Enthusiast
        </p>
      </div>
      {/* About Me Section Only */}
      <section
        className={`w-full max-w-[900px] mx-auto rounded-2xl p-8 shadow-xl border flex flex-col items-center text-center relative overflow-hidden min-h-[400px] ${
          darkMode
            ? "bg-gradient-to-br from-[#232350] via-[#181825] to-[#232350] border-[#333355] text-[#e0e0e0]"
            : "bg-gradient-to-br from-[#e0e0f7] via-[#f5f5fa] to-[#e0e0f7] border-[#ccccdd] text-[#232339]"
        }`}
      >
        <h2 className="text-3xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          About Me
        </h2>
        <p className="text-lg sm:text-xl mb-4">
          Hi, I&apos;m <span className="font-semibold">Curtis Loucks</span> — a
          full-stack developer passionate about building beautiful, scalable
          digital experiences that make a difference.
        </p>
        <p className="text-base sm:text-lg mb-4">
          I thrive at the intersection of innovation and practicality, with
          hands-on experience developing apps that serve real-world needs — from
          AI-driven renovation platforms to cross-platform social tools.
          I&apos;ve worked across diverse teams and tech stacks, always focusing
          on clean architecture, collaborative workflows, and measurable impact.
        </p>
        <p className="text-base sm:text-lg mb-6">
          My toolkit includes <strong>React</strong>, <strong>Flutter</strong>,{" "}
          <strong>Node.js</strong>, <strong>Python</strong>,{" "}
          <strong>Unity</strong>, and more. I love experimenting with new tech,
          3D, and AI. I&apos;m always open to new opportunities, collaborations,
          and freelance projects.
        </p>
        <LetsConnectButton />
      </section>
    </div>
  );
}
