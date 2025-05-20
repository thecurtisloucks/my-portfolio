"use client";
import React, { useState, useEffect } from "react";
import { useDarkMode } from "../DarkModeProvider";
import styles from "../Home.module.css";
import Header from "../components/Header";
import AOS from "aos";
import "aos/dist/aos.css";

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
          Photography Portfolio
        </p>
      </div>
      {/* Hero Banner */}
      <section
        style={{
          backgroundImage: "url('/photos/hero-banner.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: 320,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          borderRadius: 24,
          marginBottom: 32,
        }}
      >
        <div
          style={{
            background: "rgba(0,0,0,0.5)",
            padding: 32,
            borderRadius: 16,
            color: "#fff",
            width: "100%",
            maxWidth: 600,
          }}
        >
          <p style={{ fontSize: "1.2rem" }}>
            Storytelling through light, motion, and the places in between.
          </p>
        </div>
      </section>
      {/* Intro */}
      <main style={{ width: "100%", maxWidth: 900, margin: "0 auto" }}>
        <p
          style={{ fontSize: "1.1rem", textAlign: "center", marginBottom: 24 }}
        >
          I shoot portraits, landscapes, and travel photography as a creative
          counterpart to my software work. Here&apos;s a sample of what
          I&apos;ve captured — and how I see the world.
        </p>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 40,
          }}
        >
          <a
            href="https://clouc057214a.myportfolio.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: darkMode ? "#7dafff" : "#3b5fff",
              color: "#fff",
              fontWeight: 600,
              padding: "0.75rem 2rem",
              borderRadius: 999,
              textDecoration: "none",
              transition: "background 0.3s",
            }}
          >
            View Full Portfolio
          </a>
        </div>
        {/* Gallery */}
        <section style={{ marginBottom: 48 }}>
          <h2
            className={
              styles.projectTitle +
              (darkMode
                ? ` ${styles.projectTitleDark}`
                : ` ${styles.projectTitleLight}`)
            }
            style={{ textAlign: "center", marginBottom: 24 }}
          >
            Featured Photos
          </h2>
          <div
            className={styles.projectsGrid}
            data-aos="fade-up"
            style={{ marginBottom: 24 }}
          >
            {sampleImages.map((src, index) => (
              <div
                key={index}
                style={{
                  overflow: "hidden",
                  borderRadius: 16,
                  boxShadow: darkMode
                    ? "0 2px 8px #232350"
                    : "0 2px 8px #e0e0f7",
                  cursor: "pointer",
                  background: darkMode ? "#232339" : "#fff",
                }}
                onClick={() => setLightboxImage(src)}
              >
                <img
                  src={src}
                  alt={`Photo ${index + 1}`}
                  style={{
                    width: "100%",
                    height: 240,
                    objectFit: "cover",
                    transition: "transform 0.3s",
                  }}
                />
              </div>
            ))}
          </div>
        </section>
        {/* Lightbox Modal */}
        {lightboxImage && (
          <div
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.9)",
              zIndex: 50,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 24,
            }}
            onClick={() => setLightboxImage(null)}
          >
            <img
              src={lightboxImage}
              alt="Enlarged"
              style={{
                maxHeight: "90vh",
                maxWidth: "90vw",
                borderRadius: 16,
                boxShadow: "0 2px 16px #000",
              }}
            />
          </div>
        )}
        {/* Contact Form */}
        <section style={{ marginBottom: 48 }} data-aos="fade-up">
          <h2
            className={
              styles.projectTitle +
              (darkMode
                ? ` ${styles.projectTitleDark}`
                : ` ${styles.projectTitleLight}`)
            }
            style={{ textAlign: "center", marginBottom: 16 }}
          >
            Contact for Prints or Licensing
          </h2>
          <form
            onSubmit={handleMailTo}
            style={{ maxWidth: 500, margin: "0 auto" }}
          >
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 500,
                  marginBottom: 4,
                  color: darkMode ? "#b0b0ff" : "#232339",
                }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  border: `1px solid ${darkMode ? "#333355" : "#ccccdd"}`,
                  borderRadius: 8,
                  padding: "0.5rem 1rem",
                  background: darkMode ? "#232339" : "#fff",
                  color: darkMode ? "#e0e0e0" : "#232339",
                }}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 500,
                  marginBottom: 4,
                  color: darkMode ? "#b0b0ff" : "#232339",
                }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  border: `1px solid ${darkMode ? "#333355" : "#ccccdd"}`,
                  borderRadius: 8,
                  padding: "0.5rem 1rem",
                  background: darkMode ? "#232339" : "#fff",
                  color: darkMode ? "#e0e0e0" : "#232339",
                }}
              />
            </div>
            <div style={{ marginBottom: 16 }}>
              <label
                style={{
                  display: "block",
                  fontWeight: 500,
                  marginBottom: 4,
                  color: darkMode ? "#b0b0ff" : "#232339",
                }}
              >
                Message
              </label>
              <textarea
                name="message"
                rows={5}
                value={form.message}
                onChange={handleInputChange}
                required
                style={{
                  width: "100%",
                  border: `1px solid ${darkMode ? "#333355" : "#ccccdd"}`,
                  borderRadius: 8,
                  padding: "0.5rem 1rem",
                  background: darkMode ? "#232339" : "#fff",
                  color: darkMode ? "#e0e0e0" : "#232339",
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                background: darkMode ? "#7dafff" : "#3b5fff",
                color: "#fff",
                fontWeight: 600,
                padding: "0.75rem 2rem",
                borderRadius: 999,
                border: "none",
                width: "100%",
                cursor: "pointer",
                transition: "background 0.3s",
              }}
            >
              Send Message via Email App
            </button>
          </form>
        </section>
      </main>
    </div>
  );
};

export default PhotographyPortfolio;
