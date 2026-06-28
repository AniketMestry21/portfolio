import { useEffect, useState } from "react";
import { Moon, Sun } from "./Icons";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  // Read the theme the inline script already applied to <html>.
  useEffect(() => {
    const current =
      document.documentElement.getAttribute("data-theme") || "dark";
    setTheme(current);
  }, []);

  const toggle = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  };

  return (
    <button
      className="icon-btn"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
    >
      {theme === "light" ? (
        <Moon width="18" height="18" />
      ) : (
        <Sun width="18" height="18" />
      )}
    </button>
  );
}
