import React from "react";
import Link from "next/link";

interface LetsConnectButtonProps {
  className?: string;
  children?: React.ReactNode;
}

export default function LetsConnectButton({
  className = "",
  children,
}: LetsConnectButtonProps) {
  return (
    <Link
      href="/Contact"
      className={`inline-block mt-2 px-8 py-3 rounded-full font-bold text-lg shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 transition focus:outline-none focus:ring-4 focus:ring-blue-300 ${className}`}
    >
      {children ?? "Let's Connect →"}
    </Link>
  );
}
