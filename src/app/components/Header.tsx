import { useDarkMode } from "../DarkModeProvider";

export default function Header() {
  const { darkMode } = useDarkMode();
  return (
    <div className="flex justify-center items-center mb-8">
      <h1
        className={`text-2xl font-bold transition-colors duration-300 ${
          darkMode ? "text-[#b0b0ff]" : "text-[#232339]"
        }`}
      >
        Curtis Loucks
      </h1>
    </div>
  );
}
