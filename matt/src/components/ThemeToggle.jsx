'use client';

import { useThemeStore } from '@/stores/themeStore';

export default function ThemeToggle() {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="mr-4 rounded-md border border-white/40 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur transition hover:bg-white/20"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
