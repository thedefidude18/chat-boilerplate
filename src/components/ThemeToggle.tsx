"use client";

import { useTheme } from "next-themes";

import { MoonIcon, SunIcon } from "lucide-react";

export const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const isLightTheme = resolvedTheme === "light";

  const toggleTheme = () => {
    setTheme(isLightTheme ? "dark" : "light");
  };

  return (
    <button
      className="bg-[#27272A] text-[#FAFAFA] h-[40px] w-[40px] flex items-center justify-center hover:bg-opacity-80 rounded-md font-medium"
      onClick={toggleTheme}
    >
      {isLightTheme ? <MoonIcon size={20} /> : <SunIcon size={20} />}
    </button>
  );
};
