'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../../Logo.jsx';
import AboutMe from '../Experiencia/AboutMe';
import WorkExperience from '../WorkExperience/WorkExperience.jsx';
import Stack from '../Stack/Stack.jsx';
import Design from '../Design/Design.jsx';
import Footer from '../Footer/Footer.jsx';

export function Home() {
  const [shove, setShove] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHideLogo(true), 2000);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="mx-auto max-w-5xl px-4 pb-16 pt-6">
      <div className="mb-16 ml-2 mt-6 flex flex-wrap items-start gap-4 md:ml-6">
        <div
          className={
            hideLogo
              ? 'w-[280px] shrink-0 transition-all duration-300 ease-in md:w-[300px]'
              : 'z-10 w-full overflow-visible transition-all'
          }
        >
          <Logo className="h-auto w-full max-w-full text-zinc-900 dark:text-zinc-100" />
        </div>
        <div
          className={
            hideLogo
              ? 'font-mono sm:mt-2 sm:flex-1'
              : 'hidden font-mono sm:w-1/2'
          }
        >
          <h2 className="text-lg font-semibold md:text-xl">Full Stack Web Developer</h2>
          <h2 className="text-lg font-semibold md:text-xl">& Graphic Designer</h2>
          <hr className="mt-2 border-zinc-300 dark:border-zinc-600" />
        </div>
        <div
          className={`transition-opacity duration-300 sm:ml-auto ${hideLogo ? `opacity-100 ${shove ? 'translate-x-2 sm:translate-x-4' : 'translate-x-0'}` : 'pointer-events-none opacity-0'}`}
        >
          <Link
            href="/NO/"
            onMouseEnter={() => setShove((s) => !s)}
            className="inline-block rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-700"
          >
            DONT TOUCH
          </Link>
        </div>
      </div>

      <div className="mb-10 flex justify-center px-2">
        <AboutMe />
      </div>
      <WorkExperience />
      <Stack />
      <Design />
      <Footer />
    </div>
  );
}

export default Home;
