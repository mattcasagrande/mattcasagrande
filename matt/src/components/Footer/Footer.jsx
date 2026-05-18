'use client';

import React from 'react';
import Logo from '../../Logo.jsx';
import ThemeToggle from '../ThemeToggle.jsx';

export function Footer() {
  return (
    <div className="mt-8 flex h-[60px] items-center rounded-tl-lg rounded-tr-lg bg-red-700 px-3 pt-2 text-white dark:bg-red-900">
      <div className="flex w-full flex-row items-center justify-between gap-2">
        <div className="flex min-w-0 flex-1 items-center">
          <div className="ml-2 w-[100px] shrink-0">
            <Logo className="h-8 w-auto text-white" />
          </div>
        </div>
        <div className="flex shrink-0 items-center justify-end gap-1 sm:gap-2">
          <ThemeToggle />
          <a href="https://github.com/mattcasagrande" className="inline-flex">
            <img
              className="ml-2 mt-2 max-h-5 object-contain brightness-0 invert"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/GitHub_logo_2013.svg/640px-GitHub_logo_2013.svg.png"
              alt="GitHub"
            />
          </a>
          <a href="https://www.linkedin.com/in/matias-casagrande-0167623b/" className="inline-flex">
            <img
              className="ml-3 mt-2 max-h-[25px] object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/LinkedIn_Logo.svg/1200px-LinkedIn_Logo.svg.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.behance.net/designmatt6c88" className="inline-flex">
            <img
              className="ml-2 mt-2 max-h-5 object-contain"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Behance_logo.svg/1024px-Behance_logo.svg.png"
              alt="Behance"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
