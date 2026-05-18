import React from 'react';

export function Preview({ companies, selectedCompany }) {
  const company = companies.find((x) => x.id == selectedCompany);
  if (!company) {
    return <h2 className="text-center text-lg font-medium">Select Company</h2>;
  }
  return (
    <div className="text-center transition duration-500 ease-in">
      <div className="my-5">
        <img className="mx-auto h-12 object-contain" src={company.logo} alt="" />
      </div>
      <div className="min-h-[60px]">
        <h5 className="text-base font-semibold">{company.name}</h5>
        <hr className="mx-auto mt-2 max-w-md border-zinc-200 dark:border-zinc-700" />
      </div>
      <div className="mt-2">
        <h4 className="text-lg font-medium">{company.puesto}</h4>
      </div>
      <div className="mt-2 flex justify-center">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">
          {company.type} — From: {company.start} To: {company.end} — in: {company.country}
        </p>
      </div>
      <div className="mt-4 px-2">
        <hr className="border-zinc-200 dark:border-zinc-700" />
        <h6 className="mt-2 text-sm font-semibold text-zinc-700 dark:text-zinc-300">What I did:</h6>
        <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-zinc-800 dark:text-zinc-200">
          {company.description}
        </p>
      </div>
      <div className="mt-4">
        <a
          href={company.url}
          rel="noopener noreferrer"
          className="break-all text-sm text-blue-600 underline hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
        >
          {company.url}
        </a>
      </div>
    </div>
  );
}

export default Preview;
