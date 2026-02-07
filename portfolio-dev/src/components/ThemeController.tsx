import { useEffect, useState } from "react";

const PREFERRED_KEY = "theme";
const LIGHT = "light";
const DARK = "dark";

const ThemeController = () => {
  const [theme, setTheme] = useState<string>(LIGHT);

  useEffect(() => {
    // On mount: read from localStorage or prefers-color-scheme
    const saved = localStorage.getItem(PREFERRED_KEY);
    if (saved === DARK || saved === LIGHT) {
      setTheme(saved);
      document.documentElement.setAttribute("data-theme", saved);
      // Keep Tailwind `dark:` utilities working by syncing the `dark` class
      if (saved === DARK) document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
      return;
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? DARK : LIGHT;
    setTheme(initial);
    document.documentElement.setAttribute("data-theme", initial);
    if (initial === DARK) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, []);

  const toggle = () => {
    const next = theme === DARK ? LIGHT : DARK;
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    if (next === DARK) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    localStorage.setItem(PREFERRED_KEY, next);
  };

  return (
    <label className="swap swap-rotate" aria-label="Toggle theme">
      <input
        type="checkbox"
        checked={theme === DARK}
        onChange={toggle}
        className="hidden"
        aria-hidden={false}
      />

      {/* Moon icon (shown in light mode) */}
      <svg
        className="swap-off h-8 w-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>

      {/* Sun icon (shown in dark mode) */}
      <svg
        className="swap-on h-8 w-8 fill-current"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="5" />
        <line
          x1="12"
          y1="1"
          x2="12"
          y2="3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="12"
          y1="21"
          x2="12"
          y2="23"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="4.22"
          y1="4.22"
          x2="5.64"
          y2="5.64"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="18.36"
          y1="18.36"
          x2="19.78"
          y2="19.78"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="1"
          y1="12"
          x2="3"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="21"
          y1="12"
          x2="23"
          y2="12"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="4.22"
          y1="19.78"
          x2="5.64"
          y2="18.36"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="18.36"
          y1="5.64"
          x2="19.78"
          y2="4.22"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    </label>
  );
};

export default ThemeController;
