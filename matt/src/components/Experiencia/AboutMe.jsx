'use client';

import React from 'react';

export function AboutMe() {
  return (
    <div className="relative w-full max-w-4xl animate-aboutIn">
      <div id="About-me">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="mx-auto shrink-0 md:mx-0 md:w-1/4">
            <img
              className="mx-auto w-48 rounded-full object-cover md:w-52"
              src="https://avatars2.githubusercontent.com/u/61607638?s=460&u=e08ab7c82de3b1b6bf70f03c75dea1b494b33161&v=4"
              alt=""
            />
          </div>
          <div className="min-w-0 flex-1">
            <h4 className="mb-2 text-lg font-semibold">About Me</h4>
            <p className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 md:text-base">
              Since my start in 2010, I always had a creative profile, I went through two careers:
              Industrial Design & Graphic Design and many courses where I perfected my skills with
              Adobe programs (Illustrator , InDesign, Photoshop, AfterEffects, Dreamweaver) which
              allowed me to successfully work in any design environment and project.
              <br />
              <br />
              Looking for new horizons and skills to satisfy my creative desires I studied to become
              a full-stack developer making me proficient in both frontend (javascript, react, HTML,
              CSS, bootstrap,vue, redux ,redux-saga ) & backend (node js, SQL, express, Dbeaver,
              PostgreSQL ) with still much to learn, but willing to take the challenge.
            </p>
            <hr className="mt-4 border-zinc-300 dark:border-zinc-600" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
