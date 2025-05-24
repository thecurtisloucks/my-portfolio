"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

const DarkModeContext = createContext<{
  darkMode: boolean;
  setDarkMode: (val: boolean) => void;
}>({ darkMode: false, setDarkMode: () => {} });

export function useDarkMode() {
  return useContext(DarkModeContext);
}

export default function DarkModeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
