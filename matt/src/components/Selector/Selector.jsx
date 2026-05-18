'use client';

import React, { useState } from 'react';
import { publicUrl } from '@/lib/basePath';

export function Selector({ selectCompany, companies, selectedCompany }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div
      className={
        selectedCompany
          ? 'w-[90%] rounded-lg border border-zinc-200 bg-white p-2 transition dark:border-zinc-700 dark:bg-zinc-900'
          : 'w-full text-start'
      }
    >
      {!selectedCompany ? (
        <h5 className="m-2 p-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200">Companies</h5>
      ) : (
        <div className="text-center">
          <hr className="border-zinc-200 dark:border-zinc-700" />
        </div>
      )}
      <div>
        {companies.map((x) => {
          const isHovered = x.id === hovered;
          const isSelected = x.id === selectedCompany;
          const base = selectedCompany
            ? 'm-1 cursor-pointer rounded p-2 transition'
            : 'my-2 inline cursor-pointer px-2 transition';
          const state = isSelected
            ? 'bg-white font-bold text-zinc-900 ring-1 ring-orange-500 dark:bg-zinc-900 dark:text-zinc-50'
            : isHovered
              ? 'text-orange-500'
              : 'text-zinc-800 dark:text-zinc-200';
          return (
            <div
              key={x.id}
              className={`${base} ${state}`}
              onClick={() => selectCompany(x.id)}
              onMouseEnter={() => setHovered(x.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <p className={selectedCompany ? 'font-mono text-base' : 'inline font-mono text-base'}>
                {x.name}
              </p>
            </div>
          );
        })}
        {selectedCompany ? (
          <div className="text-center">
            <hr className="my-2 border-zinc-200 dark:border-zinc-700" />
            <button
              type="button"
              className="mx-auto block max-w-[20px] cursor-pointer"
              onClick={() => selectCompany(null)}
              aria-label="Close company"
            >
              <img
                className="w-4 rotate-180"
                src={publicUrl('/Imagenes/espalda.svg')}
                alt=""
              />
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default Selector;
