"use client";
import React from "react";
import { useDarkMode } from "../DarkModeProvider";
import Card from "../components/Card";

const posts = [
  {
    title: "How I Built My Portfolio with Next.js and Tailwind",
    date: "2024-06-01",
    summary:
      "A step-by-step guide to building a modern, responsive developer portfolio using Next.js, Tailwind CSS, and best practices for performance and accessibility.",
  },
  {
    title: "Lessons Learned from Freelancing in 2023",
    date: "2024-05-15",
    summary:
      "Reflections on a year of freelance web development: what worked, what didn't, and how to build lasting client relationships.",
  },
  {
    title: "My Favorite React Hooks for Productivity",
    date: "2024-04-20",
    summary:
      "A roundup of custom and built-in React hooks that have supercharged my workflow and made my code more maintainable.",
  },
];

export default function Blog() {
  const { darkMode } = useDarkMode();
  return (
    <div className="w-full max-w-[1100px] flex flex-col items-center mx-auto mt-12 p-4">
      <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
        Blog
      </h1>
      <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
        {posts.map((post, i) => (
          <Card key={i} darkMode={darkMode}>
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="text-sm mb-2 text-gray-400">{post.date}</p>
            <p className="mb-4 text-base">{post.summary}</p>
            <button className="inline-block px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition shadow focus:outline-none focus:ring-4 focus:ring-blue-300">
              Read More
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
}
