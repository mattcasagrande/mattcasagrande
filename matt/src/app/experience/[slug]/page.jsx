import { notFound } from 'next/navigation';
import ExperienceDetail from '@/components/experience/ExperienceDetail';
import FreelanceExperienceHub from '@/components/experience/FreelanceExperienceHub';
import { getAllExperienceSlugs, getCompanyBySlug, getFreelanceHubSubCompanies } from '@/data/experiences';
import { getExperienceTheme } from '@/data/experienceThemes';

export function generateStaticParams() {
  return getAllExperienceSlugs().map((slug) => ({ slug }));
}

export default function ExperiencePage({ params }) {
  const company = getCompanyBySlug(params.slug);
  if (!company) {
    notFound();
  }
  const theme = getExperienceTheme(params.slug);
  if (params.slug === 'freelance') {
    const subCompanies = getFreelanceHubSubCompanies();
    return <FreelanceExperienceHub company={company} subCompanies={subCompanies} theme={theme} />;
  }
  return <ExperienceDetail company={company} theme={theme} />;
}
