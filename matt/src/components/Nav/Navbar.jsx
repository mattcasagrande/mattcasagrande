'use client';

import { useCallback, useRef, useState } from 'react';
import Link from 'next/link';
import Logo from '../../Logo.jsx';
import ThemeToggle from '../ThemeToggle.jsx';
import { getCompaniesForNavDropdown } from '@/data/experiences';

const NAV_LINKS = [
  { href: '/#about', label: 'About' },
  { href: '/#projects', label: 'Projects' },
  { href: '/#contact', label: 'Contact' },
];

function ChevronDown({ className }) {
  return (
    <svg
      className={className}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      aria-hidden
    >
      <path
        d="M2.5 4.25 6 7.75 9.5 4.25"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Navbar() {
  const [logoAnim, setLogoAnim] = useState('idle');
  const projectsDetailsRef = useRef(null);

  const closeProjectsMenu = useCallback(() => {
    const el = projectsDetailsRef.current;
    if (el) {
      el.open = false;
    }
  }, []);

  const beforeToggle = useCallback(async () => {
    setLogoAnim('exit');
    await new Promise((r) => setTimeout(r, 420));
  }, []);

  const afterToggle = useCallback(async () => {
    setLogoAnim('enter');
    await new Promise((r) => setTimeout(r, 520));
    setLogoAnim('idle');
  }, []);

  const logoMotionClass =
    logoAnim === 'exit'
      ? 'animate-navLogoExit'
      : logoAnim === 'enter'
        ? 'animate-navLogoEnter'
        : '';

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 shadow-sm backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/90">
      <nav
        className="mx-auto flex max-w-5xl min-w-0 flex-nowrap items-center justify-between gap-3 overflow-visible px-4 py-3"
        aria-label="Main"
      >
        <div className={`shrink-0 overflow-visible ${logoMotionClass}`}>
          <Link href="/" className="block leading-none" aria-label="Home">
            <Logo className="h-9 w-auto max-w-[140px] text-zinc-900 transition-colors duration-200 dark:text-zinc-100 sm:h-10 sm:max-w-[180px]" />
          </Link>
        </div>

        <div className="flex min-w-0 max-w-full flex-1 items-center justify-center gap-3 sm:gap-5">
          <p className="shrink-0 text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100 sm:text-sm md:text-base">
            Design Engineer
          </p>

          <span
            className="hidden h-4 w-px shrink-0 bg-zinc-300 sm:block dark:bg-zinc-600"
            aria-hidden
          />
          <ul className="flex shrink-0 items-center gap-x-3 text-xs font-medium text-zinc-700 dark:text-zinc-300 sm:gap-x-4 sm:text-sm">
            <li className="shrink-0">
              <Link
                href="/#about"
                className="whitespace-nowrap rounded px-0.5 py-0.5 transition hover:text-red-600 dark:hover:text-red-400"
              >
                About
              </Link>
            </li>

            <li className="relative shrink-0">
              <details ref={projectsDetailsRef} className="group relative">
                <summary className="flex cursor-pointer list-none items-center gap-0.5 whitespace-nowrap rounded px-0.5 py-0.5 marker:hidden transition hover:text-red-600 [&::-webkit-details-marker]:hidden dark:hover:text-red-400">
                  Projects
                  <ChevronDown className="mt-0.5 shrink-0 opacity-70 transition group-open:rotate-180" />
                </summary>
                <ul
                  className="absolute left-0 top-full z-[100] mt-1.5 min-w-[14rem] max-w-[min(18rem,calc(100vw-2rem))] rounded-lg border border-zinc-200 bg-white py-1 shadow-lg dark:border-zinc-700 dark:bg-zinc-900"
                  role="menu"
                  aria-label="Experience pages"
                >
                  <li role="none">
                    <Link
                      href="/#projects"
                      role="menuitem"
                      className="block px-3 py-2 text-left text-sm text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                      onClick={closeProjectsMenu}
                    >
                      Overview
                    </Link>
                  </li>
                  <li className="mx-2 border-t border-zinc-200 dark:border-zinc-700" role="separator" />
                  {getCompaniesForNavDropdown().map((c) => (
                    <li key={c.slug} role="none">
                      <Link
                        href={`/experience/${c.slug}/`}
                        role="menuitem"
                        className="block px-3 py-2 text-left text-sm text-zinc-700 transition hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-800"
                        onClick={closeProjectsMenu}
                      >
                        {c.navLabel ?? c.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>

            {NAV_LINKS.map(({ href, label }) => (
              <li key={href} className="shrink-0">
                <Link
                  href={href}
                  className="whitespace-nowrap rounded px-0.5 py-0.5 transition hover:text-red-600 dark:hover:text-red-400"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="shrink-0">
          <ThemeToggle
            variant="nav"
            disabled={logoAnim !== 'idle'}
            beforeToggle={beforeToggle}
            afterToggle={afterToggle}
          />
        </div>
      </nav>
    </header>
  );
}
