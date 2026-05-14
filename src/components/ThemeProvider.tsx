"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Only run on client after hydration to avoid mismatch
    setMounted(true);
    
    // Check local storage or system preference
    const storedTheme = localStorage.getItem("nacos-theme") as Theme;
    if (storedTheme) {
      setTheme(storedTheme);
      document.documentElement.setAttribute("data-theme", storedTheme);
    } else {
      const systemPrefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
      if (systemPrefersLight) {
        setTheme("light");
        document.documentElement.setAttribute("data-theme", "light");
      }
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("nacos-theme", newTheme);
    
    if (newTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  };

  // Prevent hydration mismatch by keeping initial theme state, but we MUST return the Provider
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Hide children until mounted to prevent hydration mismatch of CSS classes based on theme */}
      <div style={{ visibility: mounted ? "visible" : "hidden", flex: 1, display: "flex", flexDirection: "column" }}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
