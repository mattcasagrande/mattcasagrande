/**
 * Work history for the portfolio (single source of truth).
 * Each entry must have a unique `id` and URL-safe `slug` for `/experience/[slug]/`.
 * Optional logos live under `public/` — see `EXPERIENCE_LOGO_PUBLIC_PATHS` (e.g. SeatHQ on `/experience/si-tickets/`); other slugs use
 * inline SVGs in `ExperienceLogoMark.jsx` (including themed brand SVGs for Urban, Decorline, SuperRare). The home marquee uses SI artwork on the strip (`variant="strip"`). Henry and Sagelink are grouped under `/experience/freelance/` (`FREELANCE_HUB_SUB_SLUGS`).
 */

/** @type {Record<string, string>} Paths under `public/` (leading slash). */
export const EXPERIENCE_LOGO_PUBLIC_PATHS = {
  gcba: '/Imagenes/250px-Ba_logo_gold.svg.svg',
  'si-tickets': '/Imagenes/seathq-logo-si.svg',
};

export function getExperienceLogoPublicPath(slug) {
  return EXPERIENCE_LOGO_PUBLIC_PATHS[slug] ?? null;
}

/** Shown only on `/experience/freelance/`; excluded from home marquee and Projects nav. */
export const FREELANCE_HUB_SUB_SLUGS = /** @type {const} */ (['sagelink', 'henry']);

export function getCompaniesForHomeMainStrip() {
  const omit = new Set(FREELANCE_HUB_SUB_SLUGS);
  return companies.filter((c) => !omit.has(c.slug));
}

/** Projects dropdown: same set as the home marquee (no separate Henry / Sagelink entries). */
export function getCompaniesForNavDropdown() {
  return getCompaniesForHomeMainStrip();
}

export const companies = [
  {
    id: 1,
    slug: 'si-tickets',
    name: 'SeatHQ',
    /** Used for home logo strip (SI artwork) so aria-label matches what you see */
    stripAriaLabel: 'Sports Illustrated Tickets',
    url: 'https://seathq.com/',
    type: 'Full-Time',
    puesto: 'Full-stack Developer',
    start: 'November 2025',
    end: 'Present',
    description: `Engineering on SeatHQ — the resale platform under Sports Illustrated Tickets (SI Tickets), where fans list and buy secondary-market inventory alongside SI Tickets' broader marketplace for sports, concerts, and theater. Building product and platform features in a fast-moving team (React/TypeScript ecosystem, close collaboration with design and product).`,
    country: 'United States',
  },
  {
    id: 2,
    slug: 'superrare-labs',
    name: 'SuperRare Labs',
    url: 'https://superrare.com/',
    type: 'Full-Time',
    puesto: 'Fullstack Engineer — product & design',
    start: 'November 2022',
    end: 'November 2025',
    description: `At SuperRare Labs I worked inside a design-led product org on a premier digital art gallery and auction house — not only shipping features in React, TypeScript, GraphQL, Web3, and Node.js, but partnering closely with design and product on the full UI: layout, typography, motion, states, and the small visual details that make collecting and exhibitions feel credible for artists and collectors. I translated design direction into production-ready interfaces, iterated with designers on flows (discovery, artwork detail, collecting, and marketplace), and helped keep implementation faithful to the brand’s aesthetic while balancing performance and accessibility.`,
    country: 'United States',
  },
  {
    id: 3,
    slug: 'sagelink',
    name: 'Sagelink',
    url: 'https://www.linkedin.com/company/sage-link',
    type: 'Full-Time',
    puesto: 'Full Stack Engineer & Graphic Designer',
    start: 'August 2020',
    end: 'March 2021',
    description: `Full-stack development of a Chrome extension and supporting services. Front end: JavaScript, React, MobX, Bootstrap, Sass, Material-UI, Jest, Enzyme, Axios, ESLint, Prettier, Yup. Back end: Python, Flask, MongoDB, Gunicorn, Heroku.`,
    country: 'United States',
  },
  {
    id: 4,
    slug: 'henry',
    name: 'Henry',
    url: 'https://www.soyhenry.com/',
    type: 'Part-Time',
    puesto: 'Web Development Teaching Assistant',
    start: 'May 2020',
    end: 'August 2020',
    description: `Supported students learning web development — sharing real-world experience, clarifying concepts, and helping cohorts build confidence through exercises and project work.`,
    country: 'Argentina',
  },
  {
    id: 5,
    slug: 'gcba',
    name: 'Gobierno de la Ciudad de Buenos Aires',
    url: 'https://www.buenosaires.gob.ar/cultura',
    type: 'Freelance',
    puesto: 'Art Direction',
    start: 'April 2018',
    end: 'August 2020',
    description: `Led art direction for major cultural initiatives: event websites, show mapping, and digital and print campaigns. Highlights include Semana del Diseño (Planetario Galileo Galilei), CGLU 3rd Culture Summit (La Usina del Arte), and the launch of Parque de la Innovación (CC Buenos Aires) — mapping shows, scenography, illustration, animation, and art direction.`,
    country: 'Argentina',
  },
  {
    id: 6,
    slug: 'urban-event-marketing',
    name: 'Urban Event Marketing Agency',
    url: 'https://www.urbaneventmarketing.com/',
    type: 'Freelance',
    puesto: 'Head Graphic Designer',
    start: 'March 2017',
    end: 'August 2020',
    description: `Visual design and production for live events: rollups, credentials, screens, presentations, posters, scenography, merchandising, brochures, and on-site graphic support for corporate and fintech summits in Spain and LATAM.`,
    country: 'Spain',
  },
  {
    id: 7,
    slug: 'decorline-argentina',
    name: 'Decorline Argentina',
    url: 'https://www.decorlineargentina.com.ar/',
    type: 'Freelance',
    puesto: 'Senior Product Designer',
    start: 'January 2012',
    end: 'June 2020',
    description: `Branding and product development from launch: product design, displays and exhibitors, website design and maintenance, newsletters, catalogs, email campaigns, art direction, and illustration.`,
    country: 'Argentina',
  },
  {
    id: 8,
    slug: 'florida-products',
    name: 'Florida Products S.A.',
    url: 'http://www.floridaproducts.com.ar/',
    type: 'Full-Time',
    puesto: 'Head Graphic Designer',
    start: 'January 2010',
    end: 'July 2020',
    description: `Packaging for house brands (Jovi, Caran d’Ache, Toyo, Ito); seasonal back-to-school binders; product design for blocks and drawing books; catalogs, newsletters, and presentations.`,
    country: 'Argentina',
  },
  {
    id: 9,
    slug: 'freelance',
    name: 'Freelance (BNP Paribas, Carrefour, agencies & more)',
    navLabel: 'Freelance',
    url: 'https://www.linkedin.com/in/matias-casagrande-0167623b/',
    type: 'Freelance',
    puesto: 'Graphic Design Specialist',
    start: 'January 2011',
    end: 'July 2020',
    description: `Long-form freelance practice across Europe and LATAM: branding, merchandising, illustration, display and packaging design, digital marketing, web design, brochures, and catalogs for banks, retail, startups, and agencies.`,
    country: 'Italy / Global',
  },
];

export function getCompanyBySlug(slug) {
  return companies.find((c) => c.slug === slug) ?? null;
}

export function getFreelanceHubSubCompanies() {
  return FREELANCE_HUB_SUB_SLUGS.map((slug) => getCompanyBySlug(slug)).filter(Boolean);
}

export function getAllExperienceSlugs() {
  return companies.map((c) => c.slug);
}

export default companies;
