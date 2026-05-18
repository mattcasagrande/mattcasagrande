'use client';

import { useThemeStore } from '@/stores/themeStore';

const variants = {
  footer:
    'rounded-lg p-2 text-white backdrop-blur transition hover:bg-white/20 active:scale-95',
  nav: 'rounded-lg p-2 text-zinc-800 shadow-sm transition hover:bg-zinc-50 active:scale-95 dark:text-amber-100 dark:hover:bg-zinc-700',
};

function SunIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden
    >
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 12.75C3 18.385 7.365 22.75 13 22.75a9.753 9.753 0 009.002-5.998z" />
    </svg>
  );
}

export default function ThemeToggle({ variant = 'footer', beforeToggle, afterToggle, disabled }) {
  const theme = useThemeStore((s) => s.theme);
  const toggleTheme = useThemeStore((s) => s.toggleTheme);
  const isDark = theme === 'dark';

  const handleClick = async () => {
    if (typeof beforeToggle === 'function') await beforeToggle();
    toggleTheme();
    if (typeof afterToggle === 'function') await afterToggle();
  };

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={handleClick}
      className={`relative inline-flex h-9 w-9 items-center justify-center disabled:pointer-events-none disabled:opacity-40 ${variants[variant] ?? variants.footer}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="relative h-5 w-5">
        <SunIcon
          className={`absolute inset-0 h-5 w-5 text-white transition-all duration-300 ease-out ${
            isDark
              ? 'rotate-0 scale-100 opacity-100'
              : 'rotate-90 scale-50 opacity-0'
          }`}
        />
        <MoonIcon
          className={`absolute inset-0 h-5 w-5 transition-all duration-300 ease-out ${
            isDark
              ? '-rotate-90 scale-50 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
        />
      </span>
    </button>
  );
}
