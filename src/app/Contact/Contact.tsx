"use client";
import React, { useState } from "react";
import { useDarkMode } from "../DarkModeProvider";
import Header from "../components/Header";
import DarkModeToggleFloating from "../components/DarkModeToggleFloating";
import Card from "../components/Card";
import LetsConnectButton from "../components/LetsConnectButton";

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
      className="w-full max-w-[1100px] flex flex-col items-center mx-auto"
    >
      <DarkModeToggleFloating />
      <div className="w-full max-w-[1100px] flex flex-col items-center mt-12">
        <Header />
        <p
          className={`text-[1.2rem] text-center mb-8 ${
            darkMode ? "text-[#b0b0ff]" : "text-[#444466]"
          }`}
        >
          Contact
        </p>
      </div>
      <main className="w-full max-w-[1100px] mx-auto">
        <Card darkMode={darkMode}>
          <p className="text-[1.1rem] text-center mb-8">
            I&apos;d love to hear from you — whether it&apos;s about a project,
            collaboration, or just to connect. Feel free to reach out to me
            directly via email:
          </p>
          <div
            className={`flex items-center justify-center rounded-full px-8 py-4 shadow mb-6 gap-4 ${
              darkMode ? "bg-[#232350]" : "bg-[#e0e0f7]"
            }`}
          >
            <span
              className={`font-semibold text-lg ${
                darkMode ? "text-[#7dafff]" : "text-[#3b5fff]"
              }`}
            >
              {email}
            </span>
            <button
              onClick={handleCopy}
              className={`text-sm underline ${
                darkMode ? "text-[#b0b0ff]" : "text-[#3b5fff]"
              }`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <LetsConnectButton className="ml-2 text-base">
              Send Email
            </LetsConnectButton>
          </div>
        </Card>
      </main>
    </div>
  );
};

export default Contact;
