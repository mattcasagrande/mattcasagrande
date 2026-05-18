'use client';

import React, { useState } from 'react';
import stacks from './stacks.js';
import { publicUrl } from '@/lib/basePath';

export function Stack() {
  const [open, setOpen] = useState(false);
  const [selectedStack, setSelectedStack] = useState(null);

  const handleClick = () => {
    setOpen(!open);
    setSelectedStack(null);
  };

  return (
    <div className="relative min-h-[220px] scroll-mt-28 overflow-x-hidden pb-6" id="stack">
      <div className="absolute right-4 top-2 z-10 text-white drop-shadow md:right-24">
        {open ? (
          <h3 className="text-lg font-semibold">
            <a
              href="https://github.com/mattcasagrande"
              className="text-white underline decoration-white/60 hover:text-zinc-200"
            >
              GitHub
            </a>
          </h3>
        ) : (
          <h3 className="text-lg font-semibold">Stack</h3>
        )}
      </div>

      <div
        className={`absolute right-0 top-0 z-0 h-[60px] rounded-l-[40px] transition-all duration-500 ease-linear ${
          open
            ? 'w-[90%] max-w-5xl bg-neutral-300 dark:bg-zinc-700'
            : 'w-[250px] bg-black dark:bg-zinc-900'
        }`}
      >
        <button type="button" className="absolute left-3 top-3 z-10 cursor-pointer" onClick={handleClick}>
          <img
            className="w-[30px]"
            src={open ? publicUrl('/Imagenes/espalda-der.svg') : publicUrl('/Imagenes/espalda.svg')}
            alt=""
          />
        </button>
      </div>

      <div
        className={`relative left-0 top-[72px] flex flex-wrap justify-evenly gap-3 px-2 transition-all duration-1000 ease-in md:left-20 md:ml-12 md:w-4/5 ${
          open ? 'z-10 opacity-100' : '-z-10 opacity-0'
        }`}
      >
        {stacks.map((x) => (
          <button
            type="button"
            key={x.name}
            className="inline-flex cursor-pointer flex-col items-center rounded p-1 hover:bg-black/5 dark:hover:bg-white/5"
            onClick={() => setSelectedStack(x.name)}
          >
            <img className="max-h-[45px] object-contain" src={x.logo} alt="" />
          </button>
        ))}
      </div>

      {selectedStack ? (
        <div className="relative mt-28 flex justify-center md:mt-24">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">{selectedStack}</h3>
        </div>
      ) : null}
    </div>
  );
}

export default Stack;
