import Link from 'next/link';
import { ExperienceLogoMark } from '@/components/experience-logos/ExperienceLogoMark';

export default function ExperienceDetail({ company, theme }) {
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
        <h1 className={t.title}>{company.name}</h1>
        <p className={t.role}>{company.puesto}</p>
        <p className={t.meta}>
          {company.start} — {company.end} · {company.country}
        </p>

        <hr className={t.hr} />

        <p className={t.sectionLabel}>What I did</p>
        <p className={t.body}>{company.description}</p>

        <div className={t.linkRow}>
          <Link href="/#projects" className={t.linkPrimary}>
            More experience
          </Link>
          <a
            href={company.url}
            target="_blank"
            rel="noopener noreferrer"
            className={t.linkExternal}
          >
            Company / profile
          </a>
        </div>
      </div>
    </div>
  );
}
