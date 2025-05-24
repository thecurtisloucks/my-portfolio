"use client";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "../DarkModeProvider";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Card from "../components/Card";
import LetsConnectButton from "../components/LetsConnectButton";

const sampleImages = [
  "/photos/portrait1.jpg",
  "/photos/art1.jpg",
  "/photos/travel1.jpg",
  "/photos/landscape1.jpg",
];

const PhotographyPortfolio = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { darkMode } = useDarkMode();

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleMailTo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = `Photo Inquiry from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailtoLink = `mailto:vanessa.kirch88@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div
      data-darkmode={darkMode ? "on" : "off"}
      className="w-full max-w-[1100px] flex flex-col items-center mx-auto"
    >
      <div className="w-full max-w-[1100px] flex flex-col items-center mt-12 mb-8">
        <Header />
      </div>
      {/* Hero Banner */}
      <Card
        darkMode={darkMode}
        className="mb-8 h-80 flex items-center justify-center bg-cover bg-center text-white text-center relative overflow-hidden"
        style={{ backgroundImage: "url('/photos/hero-banner.jpg')" }}
      >
        <div className="bg-black bg-opacity-60 px-8 py-12 rounded-xl w-full max-w-xl flex flex-col items-center justify-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Photography Portfolio
          </h1>
          <p className="text-lg sm:text-xl font-medium text-white/90">
            Storytelling through light, motion, and the places in between.
          </p>
        </div>
      </Card>
      <main className="w-full max-w-[1100px] mx-auto">
        <p className="text-[1.1rem] text-center mb-6">
          I shoot portraits, landscapes, and travel photography as a creative
          counterpart to my software work. Here&apos;s a sample of what
          I&apos;ve captured — and how I see the world.
        </p>
        <div className="flex justify-center mb-10">
          <a
            href="https://clouc057214a.myportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-8 py-3 rounded-full font-bold text-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            View Full Portfolio
          </a>
        </div>
        {/* Gallery */}
        <Card darkMode={darkMode} className="mb-12">
          <h2
            className={`text-xl font-bold text-center mb-6 ${
              darkMode ? "text-[#b0b0ff]" : "text-[#232339]"
            }`}
          >
            Featured Photos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {sampleImages.map((src, index) => (
              <div
                key={index}
                className={`overflow-hidden rounded-xl shadow-md cursor-pointer ${
                  darkMode ? "bg-[#232339]" : "bg-white"
                }`}
                onClick={() => setLightboxImage(src)}
              >
                <Image
                  src={src}
                  alt={`Photo ${index + 1}`}
                  width={400}
                  height={240}
                  className="w-full h-60 object-cover transform hover:scale-105 transition duration-300"
                />
              </div>
            ))}
          </div>
        </Card>
        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-6"
            onClick={() => setLightboxImage(null)}
          >
            <Image
              src={lightboxImage}
              alt="Enlarged"
              width={900}
              height={600}
              className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-lg"
            />
          </div>
        )}
        {/* Contact Form */}
        <Card darkMode={darkMode} className="mb-12">
          <h2
            className={`text-xl font-bold text-center mb-4 ${
              darkMode ? "text-[#b0b0ff]" : "text-[#232339]"
            }`}
          >
            Contact for Prints or Licensing
          </h2>
          <form onSubmit={handleMailTo} className="max-w-md mx-auto space-y-6">
            <div>
              <label
                className={`block font-medium mb-1 ${
                  darkMode ? "text-[#b0b0ff]" : "text-[#232339]"
                }`}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
                className={`w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-[#232339] text-[#e0e0e0] border-[#333355]"
                    : "bg-white text-[#232339] border-[#ccccdd]"
                }`}
              />
            </div>
            <div>
              <label
                className={`block font-medium mb-1 ${
                  darkMode ? "text-[#b0b0ff]" : "text-[#232339]"
                }`}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                required
                className={`w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-[#232339] text-[#e0e0e0] border-[#333355]"
                    : "bg-white text-[#232339] border-[#ccccdd]"
                }`}
              />
            </div>
            <div>
              <label
                className={`block font-medium mb-1 ${
                  darkMode ? "text-[#b0b0ff]" : "text-[#232339]"
                }`}
              >
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleInputChange}
                required
                className={`w-full border rounded-lg px-4 py-2 shadow-sm focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? "bg-[#232339] text-[#e0e0e0] border-[#333355]"
                    : "bg-white text-[#232339] border-[#ccccdd]"
                }`}
              />
            </div>
            <LetsConnectButton className="w-full text-center">
              Send Message via Email App
            </LetsConnectButton>
          </form>
        </Card>
      </main>
    </div>
  );
};

export default PhotographyPortfolio;
