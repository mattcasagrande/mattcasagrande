'use client';

import React, { useState } from 'react';
import tools from './tools';
import { publicUrl } from '@/lib/basePath';

export function Design() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const brushClasses = [
    'cursor-pointer transition-all duration-500 ease-linear',
    open
      ? 'absolute -left-[400px] z-[-1] h-[250px] w-[1500px] max-w-none overflow-hidden'
      : 'absolute -left-[200px] z-[-2] h-[100px] w-[500px] overflow-hidden',
    !open && hovered ? 'w-[460px] max-w-[460px] -translate-x-[150px]' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className="relative flex min-h-[320px] scroll-mt-28 flex-col overflow-x-hidden pb-24" id="design">
      <div className="relative left-0 z-[1] mt-2 flex h-auto w-full max-w-full min-w-0 items-start overflow-x-hidden md:left-[100px]">
        <img
          className={brushClasses}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => setOpen(!open)}
          src={publicUrl('/Imagenes/brush.svg')}
          alt=""
        />
        {open ? (
          <h3 className="absolute left-10 top-10 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            <a
              href="https://www.behance.net/designmatt6c88"
              className="underline decoration-zinc-400 hover:text-blue-600 dark:hover:text-blue-400"
            >
              Behance
            </a>
          </h3>
        ) : (
          <h3 className="absolute left-10 top-10 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            Design Tools
          </h3>
        )}
      </div>

      <div
        className={`relative left-0 z-10 mt-[130px] flex w-full max-w-full flex-wrap gap-3 px-4 transition-all delay-500 duration-1000 ease-in md:left-[140px] ${
          open ? 'opacity-100' : 'pointer-events-none -z-10 opacity-0'
        }`}
      >
        {tools.map((x) => {
          if (x.name === 'Boton') {
            return (
              <button
                type="button"
                key="Boton"
                className="cursor-pointer border-0 bg-transparent p-0"
                onClick={() => setOpen(!open)}
              >
                <img
                  className={open ? 'max-h-[30px] max-w-[30px]' : 'max-h-[45px] opacity-80'}
                  src={publicUrl('/Imagenes/espalda.svg')}
                  alt=""
                />
              </button>
            );
          }
          return (
            <div key={x.name} className="relative">
              <img
                className={open ? 'max-h-[45px] object-contain pr-12' : 'absolute left-0 max-h-[45px] opacity-70'}
                src={x.url}
                alt=""
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Design;
