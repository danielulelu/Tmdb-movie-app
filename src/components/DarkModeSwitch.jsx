"use client";

import { MdLightMode, MdDarkMode } from "react-icons/md";

import { useTheme } from "next-themes";

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      {currentTheme === "light" ? (
        <MdLightMode className="text-2xl cursor-pointer select-none" onClick={() => setTheme("dark")} />
      ) : (
        <MdDarkMode className="text-2xl cursor-pointer" onClick={() => setTheme("light")} />
      )}
    </div>
  );
}
