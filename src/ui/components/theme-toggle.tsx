"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme } = useTheme();
  return (
    <div
      className={
        "flex flex-row gap-4 text-neutral-800 dark:text-neutral-400 mx-4 my-1"
      }
    >
      <MoonIcon
        onClick={() => setTheme("dark")}
        width={50}
        height={50}
        className={
          "dark:hover:bg-neutral-900 hover:bg-zinc-200 p-4 rounded-full cursor-pointer hover:text-black dark:hover:text-white"
        }
      />

      <SunIcon
        onClick={() => setTheme("light")}
        width={50}
        height={50}
        className={
          "dark:hover:bg-neutral-900 hover:bg-zinc-200 p-4 rounded-full cursor-pointer hover:text-black dark:hover:text-white"
        }
      />
    </div>
  );
}
