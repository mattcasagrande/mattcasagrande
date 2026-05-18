import Link from 'next/link';
import { ExperienceLogoMark } from '@/components/experience-logos/ExperienceLogoMark';

function excerpt(text, max = 200) {
  const t = text.trim();
  if (t.length <= max) return t;
  return `${t.slice(0, max).trim()}…`;
}

/**
 * `/experience/freelance/` — main freelance story plus cards linking to Henry & Sagelink detail pages.
 */
export default function FreelanceExperienceHub({ company, subCompanies, theme }) {
  const t = theme;
  return (
    <div className={t.shell}>
      <div className={t.inner}>
        <Link href="/" className={t.back}>
          ← Back home
        </Link>

        <div className={t.logoWrap}>
          <ExperienceLogoMark slug={company.slug} className={t.logo} variant="page" />
        </div>

        <span className={t.badge}>{company.type}</span>
        <h1 className={t.title}>{company.navLabel ?? company.name}</h1>
        {company.navLabel ? (
          <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{company.name}</p>
        ) : null}
        <p className={t.role}>{company.puesto}</p>
        <p className={t.meta}>
          {company.start} — {company.end} · {company.country}
        </p>

        <hr className={t.hr} />

        <p className={t.sectionLabel}>What I did</p>
        <p className={t.body}>{company.description}</p>

        <hr className={t.hr} />

        <p className={t.sectionLabel}>Also in this chapter</p>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
          Teaching and contract roles with their own write-ups:
        </p>
        <ul className="mt-6 space-y-6">
          {subCompanies.map((sub) => (
            <li
              key={sub.slug}
              className="rounded-xl border border-neutral-200 bg-neutral-50/80 p-5 dark:border-neutral-800 dark:bg-neutral-900/40"
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                <div className="flex shrink-0 justify-center sm:justify-start">
                  <ExperienceLogoMark slug={sub.slug} variant="page" className="h-12 w-auto sm:h-14" />
                </div>
                <div className="min-w-0 flex-1">
                  <h2 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                    <Link
                      href={`/experience/${sub.slug}/`}
                      className="underline decoration-neutral-400 underline-offset-4 transition hover:decoration-neutral-900 dark:hover:decoration-neutral-100"
                    >
                      {sub.name}
                    </Link>
                  </h2>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{sub.puesto}</p>
                  <p className="mt-1 text-xs uppercase tracking-wider text-neutral-500">
                    {sub.start} — {sub.end} · {sub.country}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
                    {excerpt(sub.description)}
                  </p>
                  <Link
                    href={`/experience/${sub.slug}/`}
                    className={`mt-4 inline-flex ${t.linkPrimary}`}
                  >
                    Open full page
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className={t.linkRow}>
          <Link href="/#projects" className={t.linkPrimary}>
            More experience
          </Link>
          <a href={company.url} target="_blank" rel="noopener noreferrer" className={t.linkExternal}>
            Company / profile
          </a>
        </div>
      </div>
    </div>
  );
}
