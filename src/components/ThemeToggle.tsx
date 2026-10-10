import { useEffect, useState } from "react";
import { Sun, Moon } from 'lucide-react';

function ThemeToggle() {
  // Inicializa o estado com o tema salvo ou com a preferência do sistema
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      const savedTheme = localStorage.getItem("theme");
      if (savedTheme) return savedTheme;
      
      const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches;
      return systemPreference ? "dark" : "light";
    }
    return "light";
  });

  // Monitora a mudança do estado e atualiza a tag <html> e o localStorage
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <button
      onClick={toggleTheme}
      p-label="Alternar tema"
      className="cursor-pointer"
    >
      {theme === "light" ? <Moon /> : <Sun />}
    </button>
  );
}

export default ThemeToggle;