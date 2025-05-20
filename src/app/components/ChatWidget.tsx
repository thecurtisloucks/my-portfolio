"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { FiMessageSquare, FiX } from "react-icons/fi";

interface FormState {
  name: string;
  email: string;
  message: string;
}

const ChatWidget: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });

  const toggleChat = () => setOpen((prev) => !prev);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSend = (e: FormEvent) => {
    e.preventDefault();
    const subject = `Chat Request from ${form.name}`;
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`;
    const mailto = `mailto:curtis.g.loucks@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition"
        aria-label="Toggle Chat"
      >
        {open ? <FiX size={24} /> : <FiMessageSquare size={24} />}
      </button>

      {/* Chat Box */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-80 bg-white border rounded-xl shadow-lg p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            Chat with Me
          </h3>
          <form onSubmit={handleSend} className="space-y-3 text-left">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              rows={3}
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
