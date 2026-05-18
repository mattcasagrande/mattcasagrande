import React from 'react';
import AboutMe from '../Experiencia/AboutMe';
import ExperienceLogoGrid from './ExperienceLogoGrid.jsx';
import Stack from '../Stack/Stack.jsx';
import Design from '../Design/Design.jsx';
import Footer from '../Footer/Footer.jsx';

export function Home() {
  return (
    <>
      <div className="mx-auto max-w-5xl min-w-0 overflow-x-hidden px-4 pb-10 pt-10">
        <div className="mb-10 flex justify-center px-2">
          <AboutMe />
        </div>
      </div>
      <ExperienceLogoGrid />
      <div className="mx-auto max-w-5xl min-w-0 overflow-x-hidden px-4 pb-16 pt-10">
        <Stack />
        <Design />
        <Footer />
      </div>
    </>
  );
}

export default Home;
