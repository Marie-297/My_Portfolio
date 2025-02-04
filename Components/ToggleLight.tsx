"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { HiOutlineSun } from "react-icons/hi2";
import { MdOutlineNightlightRound } from "react-icons/md";

const ToggleLight = () => {
  const [mounted, setMounted] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  const currentTheme = theme === "system" ? systemTheme : theme;
  console.log("Current Theme:", currentTheme);
  return (
    <div>
      {currentTheme === "dark" ? (
        <div className="flex">
          <button
          onClick={() => setTheme("light")}
          className="p-1 hover:bg-black hover:text-white bg-white text-orange-700 rounded-full "
          type="button"
          title="theme-btn"
        >
            <MdOutlineNightlightRound size={18} />
          </button>
          </div>
      ) : (
        <div className="flex">
          <button
            onClick={() => setTheme("dark")}
            className="p-1 hover:bg-white hover:text-black bg-orange-700 text-white rounded-full "
            type="button"
            title="theme-btn"
          >
            <HiOutlineSun size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ToggleLight;
