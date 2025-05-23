import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import DarkModeProvider from "./DarkModeProvider";
import TopNav from "./components/TopNav";
import DarkModeToggleFloating from "./components/DarkModeToggleFloating";
import { ReactNode } from "react";
import ClientLayout from "./components/ClientLayout";
import ChatWidget from "./components/ChatWidget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DarkModeProvider>
          <TopNav />
          <DarkModeToggleFloating />
          {/* Main content with padding to not be hidden behind navbar */}
          <ClientLayout>{children}</ClientLayout>
          <ChatWidget />
          {/* Bottom left CL logo */}
          <img
            src="/cl.svg"
            alt="CL Logo"
            className="fixed bottom-4 left-4 w-12 h-12 z-40 opacity-80 hover:opacity-100 transition-opacity"
            draggable="false"
          />
        </DarkModeProvider>
      </body>
    </html>
  );
}
