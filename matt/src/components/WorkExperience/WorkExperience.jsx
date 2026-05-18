'use client';

import React, { useState } from 'react';
import companies from './experience.js';
import Preview from '../Preview/Preview.jsx';
import Selector from '../Selector/Selector.jsx';

function WorkExperience() {
  const [selectedCompany, setSelectedCompany] = useState(null);

  return (
    <div className="mb-16 overflow-visible">
      <div className="mx-auto max-w-6xl px-4">
        <h3 className="mb-4 ml-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
          Experience
        </h3>
        <div
          className={`grid gap-8 ${selectedCompany ? 'md:grid-cols-12' : 'grid-cols-1 md:grid-cols-12'}`}
        >
          <div className={selectedCompany ? 'md:col-span-3' : 'md:col-span-12'}>
            <Selector
              companies={companies}
              selectedCompany={selectedCompany}
              selectCompany={(x) => setSelectedCompany(x)}
            />
          </div>
          {selectedCompany ? (
            <div className="md:col-span-9">
              <Preview companies={companies} selectedCompany={selectedCompany} />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
