"use client";

import { createContext, useEffect, useState } from "react";

type ThemeContextType = {
  toggle: () => void;
  theme: string;
};

export const ThemeContext = createContext<ThemeContextType>({
  toggle: () => {},
  theme: "light",
});

const getFromLocalStorage = (): string => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("theme") || "light";
  }
  return "light";
};

export const ThemeContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [theme, setTHeme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTHeme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
