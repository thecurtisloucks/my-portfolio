"use client";
import React from "react";
import { useDarkMode } from "../DarkModeProvider";
import Card from "../components/Card";
import Image from "next/image";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Manager, Acme Corp",
    text: "Curtis is a fantastic developer—reliable, creative, and always delivers on time. Our project wouldn't have succeeded without him!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "CTO, StartupX",
    text: "The best freelancer I've worked with. Curtis communicates clearly and writes beautiful, maintainable code.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Chen",
    role: "Designer, Freelance Partner",
    text: "Collaborating with Curtis is a joy—he brings ideas to life and is always open to feedback.",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

export default function Testimonials() {
  const { darkMode } = useDarkMode();
  return (
    <div className="w-full max-w-[1100px] flex flex-col items-center mx-auto mt-12 p-4">
      <h1 className="text-4xl font-extrabold mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent text-center">
        Testimonials
      </h1>
      <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Card
            key={i}
            darkMode={darkMode}
            className="flex flex-col items-center text-center p-8"
          >
            <Image
              src={t.avatar}
              alt={t.name}
              width={80}
              height={80}
              className="w-20 h-20 rounded-full mb-4 border-4 border-blue-400 shadow"
            />
            <h2 className="text-xl font-bold mb-1">{t.name}</h2>
            <p className="text-sm mb-2 text-blue-400 font-medium">{t.role}</p>
            <p className="mb-2 text-base italic">&rdquo;{t.text}&rdquo;</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
