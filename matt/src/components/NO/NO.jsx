'use client';

import React from 'react';
import Link from 'next/link';

export function NO() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-100 px-4 py-8 dark:bg-zinc-900">
      <div className="flex justify-around">
        <img
          className="max-h-[min(500px,70vh)] w-auto max-w-full rounded shadow-lg"
          src="https://i.imgflip.com/2126v1.jpg"
          alt=""
        />
      </div>
      <div className="mt-6 flex w-full justify-center">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Why?</h1>
      </div>
      <div className="mt-5 flex w-full justify-center">
        <Link
          href="/"
          className="rounded-md bg-zinc-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600"
        >
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default NO;
