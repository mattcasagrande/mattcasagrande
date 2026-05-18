/**
 * Per-route visual tokens for `/experience/[slug]`.
 * Every token string includes both light (`…`) and dark (`dark:…`) styles.
 */

const defaultTheme = {
  shell:
    'min-h-full bg-zinc-50 text-zinc-900 selection:bg-zinc-900/10 dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-white/10',
  inner: 'mx-auto max-w-2xl px-6 py-12 sm:py-16',
  back: 'mb-8 inline-flex text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-zinc-100',
  logoWrap:
    'mb-8 flex justify-center rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100',
  logo: 'h-14 w-auto max-w-[220px] shrink-0',
  badge:
    'inline-flex rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-zinc-600 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300',
  title: 'mt-4 text-3xl font-bold tracking-tight sm:text-4xl',
  role: 'mt-2 text-lg text-zinc-600 dark:text-zinc-400',
  meta: 'mt-4 text-sm text-zinc-500 dark:text-zinc-500',
  hr: 'my-8 border-zinc-200 dark:border-zinc-800',
  sectionLabel: 'text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400',
  body: 'mt-3 whitespace-pre-line text-base leading-relaxed text-zinc-700 dark:text-zinc-300',
  linkRow: 'mt-10 flex flex-wrap gap-4',
  linkPrimary:
    'inline-flex rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 shadow-sm transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800',
  linkExternal:
    'inline-flex rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200',
};

/** @type {Record<string, Partial<typeof defaultTheme>>} */
const overrides = {
  'si-tickets': {
    shell:
      'min-h-full bg-zinc-100 text-zinc-900 selection:bg-blue-500/15 dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-blue-500/20',
    inner: 'mx-auto max-w-2xl px-6 py-12 sm:py-16',
    back: 'mb-8 inline-flex text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-blue-400',
    logoWrap:
      'mb-8 flex justify-center rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-800 dark:border-zinc-700 dark:bg-white dark:text-zinc-900',
    badge:
      'inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-blue-900 dark:border-blue-500/35 dark:bg-blue-950/50 dark:text-blue-200',
    title: 'mt-4 text-3xl font-black tracking-tight text-zinc-950 sm:text-4xl dark:text-white',
    role: 'mt-2 text-lg text-zinc-700 dark:text-zinc-300',
    meta: 'mt-4 text-sm text-zinc-500 dark:text-zinc-500',
    hr: 'my-8 border-zinc-200 dark:border-zinc-800',
    sectionLabel: 'text-xs font-semibold uppercase tracking-wider text-blue-800 dark:text-blue-400/90',
    body: 'mt-3 whitespace-pre-line text-base leading-relaxed text-zinc-700 dark:text-zinc-300',
    linkPrimary:
      'inline-flex rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800',
    linkExternal:
      'inline-flex rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500',
  },
  'superrare-labs': {
    shell:
      'min-h-full bg-violet-50 text-violet-950 selection:bg-violet-300/50 dark:bg-[#07060b] dark:text-violet-100 dark:selection:bg-violet-500/25',
    inner: 'mx-auto max-w-2xl px-6 py-12 sm:py-16',
    back: 'mb-8 inline-flex text-sm font-medium text-violet-800 underline-offset-4 hover:text-violet-950 hover:underline dark:text-violet-300/80 dark:hover:text-white',
    logoWrap:
      'mb-8 flex justify-center rounded-2xl border border-violet-200 bg-white p-8 text-violet-900 shadow-sm dark:border-violet-500/20 dark:bg-gradient-to-b dark:from-violet-950/40 dark:to-black dark:text-violet-100',
    badge:
      'inline-flex rounded-full border border-violet-300 bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-900 dark:border-violet-400/25 dark:bg-violet-950/50 dark:text-violet-200',
    title:
      'mt-4 bg-gradient-to-r from-violet-900 to-fuchsia-700 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl dark:from-white dark:to-violet-200',
    role: 'mt-2 text-lg text-violet-800 dark:text-violet-300/90',
    meta: 'mt-4 text-sm text-violet-700/80 dark:text-violet-400/70',
    hr: 'my-8 border-violet-200 dark:border-violet-500/20',
    sectionLabel: 'text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-violet-400/90',
    body: 'mt-3 whitespace-pre-line text-base leading-relaxed text-violet-900/90 dark:text-violet-100/85',
    linkPrimary:
      'inline-flex rounded-lg border border-violet-300 bg-white px-4 py-2 text-sm font-medium text-violet-950 transition hover:bg-violet-50 dark:border-violet-500/30 dark:bg-violet-950/40 dark:text-violet-100 dark:hover:border-violet-400/50 dark:hover:bg-violet-900/50',
    linkExternal:
      'inline-flex rounded-lg bg-violet-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-800 dark:bg-violet-600 dark:hover:bg-violet-500',
  },
  sagelink: {
    shell:
      'min-h-full bg-slate-50 text-slate-900 selection:bg-sky-200/60 dark:bg-slate-950 dark:text-slate-100 dark:selection:bg-sky-500/25',
    inner: 'mx-auto max-w-2xl px-6 py-12 sm:py-16',
    back: 'mb-8 inline-flex text-sm font-medium text-sky-700 underline-offset-4 hover:underline dark:text-sky-400',
    logoWrap:
      'mb-8 flex justify-center rounded-2xl border border-sky-200 bg-white p-6 text-sky-900 shadow-sm dark:border-sky-900/40 dark:bg-slate-900/80 dark:text-sky-100',
    badge:
      'inline-flex rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-800 dark:bg-sky-950 dark:text-sky-200',
    title: 'mt-4 text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl',
    role: 'mt-2 text-lg text-sky-700 dark:text-sky-300',
    meta: 'mt-4 text-sm text-slate-500 dark:text-slate-400',
    hr: 'my-8 border-sky-200 dark:border-slate-800',
    sectionLabel: 'text-xs font-semibold uppercase tracking-wider text-sky-600 dark:text-sky-400',
    body: 'mt-3 whitespace-pre-line text-base leading-relaxed text-slate-700 dark:text-slate-300',
    linkPrimary:
      'inline-flex rounded-lg border border-sky-300 bg-white px-4 py-2 text-sm font-medium text-sky-900 transition hover:bg-sky-50 dark:border-sky-700 dark:bg-slate-900 dark:text-sky-100 dark:hover:bg-slate-800',
    linkExternal:
      'inline-flex rounded-lg bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-500',
  },
  henry: {
    shell:
      'min-h-full bg-[#ffef00] text-zinc-900 selection:bg-black/15 dark:bg-zinc-950 dark:text-[#f5e000] dark:selection:bg-yellow-400/20',
    inner: 'mx-auto max-w-2xl px-6 py-12 sm:py-16',
    back: 'mb-8 inline-flex text-sm font-bold text-zinc-800 underline-offset-4 hover:underline dark:text-[#f5e000] dark:hover:text-white',
    logoWrap:
      'mb-8 flex justify-center rounded-2xl border-2 border-black bg-white p-6 text-zinc-900 shadow-[6px_6px_0_0_rgba(0,0,0,1)] dark:border-[#f5e000] dark:bg-zinc-900 dark:text-[#f5e000] dark:shadow-[6px_6px_0_0_rgba(245,224,0,0.5)]',
    badge:
      'inline-flex rounded-full border-2 border-black bg-white px-3 py-1 text-xs font-black uppercase tracking-wide text-zinc-900 dark:border-[#f5e000] dark:bg-zinc-950 dark:text-[#f5e000]',
    title: 'mt-4 text-3xl font-black uppercase tracking-tight text-zinc-900 sm:text-4xl dark:text-[#f5e000]',
    role: 'mt-2 text-lg font-semibold text-zinc-800 dark:text-zinc-300',
    meta: 'mt-4 text-sm font-medium text-zinc-700 dark:text-zinc-500',
    hr: 'my-8 border-2 border-black dark:border-zinc-700',
    sectionLabel: 'text-xs font-black uppercase tracking-wider text-zinc-800 dark:text-zinc-400',
    body: 'mt-3 whitespace-pre-line text-base font-medium leading-relaxed text-zinc-800 dark:text-zinc-300',
    linkPrimary:
      'inline-flex rounded-lg border-2 border-black bg-white px-4 py-2 text-sm font-bold text-zinc-900 shadow-[4px_4px_0_0_rgba(0,0,0,1)] transition hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none dark:border-[#f5e000] dark:bg-zinc-900 dark:text-[#f5e000] dark:shadow-[4px_4px_0_0_rgba(245,224,0,0.45)]',
    linkExternal:
      'inline-flex rounded-lg border-2 border-black bg-black px-4 py-2 text-sm font-bold text-[#ffef00] shadow-[4px_4px_0_0_rgba(0,0,0,0.35)] transition hover:bg-zinc-900 dark:border-[#f5e000] dark:bg-[#f5e000] dark:text-zinc-950 dark:hover:bg-yellow-200',
  },
  gcba: {
    shell:
      'min-h-full bg-[#f4f7fb] text-slate-900 selection:bg-amber-200/80 dark:bg-[#0c1929] dark:text-slate-100 dark:selection:bg-amber-500/20',
    inner: 'mx-auto max-w-2xl px-6 py-12 sm:py-16',
    back: 'mb-8 inline-flex text-sm font-medium text-blue-800 underline-offset-4 hover:underline dark:text-amber-200/90',
    logoWrap:
      'mb-8 flex justify-center rounded-2xl border border-blue-200/80 bg-white p-6 text-blue-950 shadow-sm dark:border-blue-900/50 dark:bg-[#132a45]/90 dark:text-amber-50',
    badge:
      'inline-flex rounded border border-amber-400/80 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-amber-900 dark:border-amber-500/40 dark:bg-amber-950/40 dark:text-amber-100',
    title: 'mt-4 text-3xl font-bold tracking-tight text-blue-950 dark:text-slate-50 sm:text-4xl',
    role: 'mt-2 text-lg text-blue-800 dark:text-blue-200/90',
    meta: 'mt-4 text-sm text-slate-600 dark:text-slate-400',
    hr: 'my-8 border-blue-200 dark:border-blue-900/60',
    sectionLabel: 'text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-amber-200/80',
    body: 'mt-3 whitespace-pre-line text-base leading-relaxed text-slate-700 dark:text-slate-300',
    linkPrimary:
      'inline-flex rounded-md border border-blue-300 bg-white px-4 py-2 text-sm font-semibold text-blue-900 transition hover:bg-blue-50 dark:border-blue-800 dark:bg-[#132a45] dark:text-slate-100 dark:hover:bg-[#1a3554]',
    linkExternal:
      'inline-flex rounded-md bg-blue-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 dark:bg-amber-500 dark:text-blue-950 dark:hover:bg-amber-400',
  },
  'urban-event-marketing': {
    shell:
      'min-h-full bg-zinc-50 text-zinc-900 selection:bg-orange-200/50 dark:bg-zinc-950 dark:text-zinc-100 dark:selection:bg-orange-500/15',
    inner: 'mx-auto max-w-2xl px-6 py-12 sm:py-16',
    back: 'mb-8 inline-flex text-sm font-semibold text-zinc-600 underline-offset-4 hover:text-zinc-900 hover:underline dark:text-zinc-400 dark:hover:text-orange-400',
    logoWrap:
      'mb-8 flex justify-center rounded-2xl border border-zinc-200 bg-white p-6 text-zinc-800 dark:border-zinc-800 dark:bg-zinc-900/60 dark:text-zinc-100',
    badge:
      'inline-flex rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-900 dark:border-orange-500/30 dark:bg-orange-950/40 dark:text-orange-200',
    title: 'mt-4 text-3xl font-extrabold tracking-tight text-zinc-950 sm:text-4xl dark:text-white',
    role: 'mt-2 text-lg font-medium text-zinc-700 dark:text-zinc-300',
    meta: 'mt-4 text-sm text-zinc-500 dark:text-zinc-500',
    hr: 'my-8 border-zinc-200 dark:border-zinc-800',
    sectionLabel: 'text-xs font-bold uppercase tracking-wider text-orange-700 dark:text-orange-400',
    body: 'mt-3 whitespace-pre-line text-base leading-relaxed text-zinc-700 dark:text-zinc-300',
    linkPrimary:
      'inline-flex rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-100 dark:hover:bg-zinc-800',
    linkExternal:
      'inline-flex rounded-lg bg-orange-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-orange-700 dark:bg-orange-500 dark:hover:bg-orange-400',
  },
  'decorline-argentina': {
    shell:
      'min-h-full bg-emerald-50 text-emerald-950 selection:bg-emerald-200/70 dark:bg-emerald-950 dark:text-emerald-50 dark:selection:bg-emerald-400/20',
    inner: 'mx-auto max-w-2xl px-6 py-12 sm:py-16',
    back: 'mb-8 inline-flex text-sm font-medium text-emerald-800 underline-offset-4 hover:underline dark:text-emerald-300',
    logoWrap:
      'mb-8 flex justify-center rounded-3xl border border-emerald-200 bg-white p-8 text-emerald-950 shadow-sm dark:border-emerald-800 dark:bg-emerald-950/40 dark:text-emerald-50',
    badge:
      'inline-flex rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-emerald-900 dark:bg-emerald-900/80 dark:text-emerald-100',
    title: 'mt-4 text-3xl font-semibold tracking-tight text-emerald-950 dark:text-emerald-50 sm:text-4xl',
    role: 'mt-2 text-lg text-emerald-800 dark:text-emerald-200',
    meta: 'mt-4 text-sm text-emerald-700/80 dark:text-emerald-300/80',
    hr: 'my-8 border-emerald-200 dark:border-emerald-800',
    sectionLabel: 'text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-400',
    body: 'mt-3 whitespace-pre-line text-base leading-relaxed text-emerald-900/90 dark:text-emerald-100/85',
    linkPrimary:
      'inline-flex rounded-full border border-emerald-300 bg-white px-5 py-2 text-sm font-medium text-emerald-900 transition hover:bg-emerald-50 dark:border-emerald-600 dark:bg-emerald-900/60 dark:text-emerald-50 dark:hover:bg-emerald-800/80',
    linkExternal:
      'inline-flex rounded-full bg-emerald-700 px-5 py-2 text-sm font-semibold text-white transition hover:bg-emerald-800 dark:bg-emerald-400 dark:text-emerald-950 dark:hover:bg-emerald-300',
  },
  'florida-products': {
    shell:
      'min-h-full bg-sky-100 text-slate-900 selection:bg-fuchsia-300/60 dark:bg-indigo-950 dark:text-sky-50 dark:selection:bg-fuchsia-500/25',
    inner: 'mx-auto max-w-2xl px-6 py-12 sm:py-16',
    back: 'mb-8 inline-flex text-sm font-bold text-indigo-800 underline-offset-4 hover:underline dark:text-sky-300',
    logoWrap:
      'mb-8 flex justify-center rounded-[2rem] border-4 border-white bg-gradient-to-br from-fuchsia-200 via-sky-200 to-amber-200 p-8 text-indigo-950 shadow-lg dark:border-indigo-800 dark:from-fuchsia-900/50 dark:via-sky-900/50 dark:to-amber-900/40 dark:text-sky-100',
    badge:
      'inline-flex rounded-lg bg-white px-3 py-1 text-xs font-bold uppercase tracking-wide text-indigo-700 shadow-sm dark:bg-indigo-900 dark:text-sky-200',
    title: 'mt-4 text-3xl font-black tracking-tight text-indigo-950 dark:text-white sm:text-4xl',
    role: 'mt-2 text-lg font-semibold text-fuchsia-800 dark:text-fuchsia-300',
    meta: 'mt-4 text-sm font-medium text-slate-600 dark:text-slate-400',
    hr: 'my-8 border-dashed border-slate-400/60 dark:border-sky-700/50',
    sectionLabel: 'text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-sky-400',
    body: 'mt-3 whitespace-pre-line text-base font-medium leading-relaxed text-slate-800 dark:text-sky-100/90',
    linkPrimary:
      'inline-flex rounded-xl border-2 border-indigo-400 bg-white px-4 py-2 text-sm font-bold text-indigo-900 transition hover:bg-sky-50 dark:border-sky-600 dark:bg-indigo-900 dark:text-sky-100 dark:hover:bg-indigo-800',
    linkExternal:
      'inline-flex rounded-xl bg-fuchsia-600 px-4 py-2 text-sm font-bold text-white transition hover:bg-fuchsia-700 dark:bg-sky-500 dark:text-indigo-950 dark:hover:bg-sky-400',
  },
  freelance: {
    shell:
      'min-h-full bg-white text-neutral-900 selection:bg-neutral-900/10 dark:bg-neutral-950 dark:text-neutral-100 dark:selection:bg-white/10',
    inner: 'mx-auto max-w-2xl px-6 py-12 sm:py-16',
    back: 'mb-8 inline-flex text-sm font-normal text-neutral-500 underline-offset-4 hover:text-neutral-900 hover:underline dark:hover:text-neutral-100',
    logo: 'h-20 w-auto max-w-[min(100%,320px)] shrink-0 sm:h-24',
    logoWrap:
      'mb-8 flex justify-center border-y border-neutral-200 bg-neutral-50 py-10 text-neutral-800 dark:border-neutral-800 dark:bg-neutral-900/50 dark:text-neutral-100',
    badge:
      'inline-flex border border-neutral-300 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-600 dark:border-neutral-600 dark:text-neutral-400',
    title: 'mt-4 font-serif text-4xl font-normal italic tracking-tight text-neutral-900 dark:text-neutral-50 sm:text-5xl',
    role: 'mt-3 text-base font-normal text-neutral-600 dark:text-neutral-400',
    meta: 'mt-6 text-xs uppercase tracking-widest text-neutral-500',
    hr: 'my-10 border-neutral-200 dark:border-neutral-800',
    sectionLabel: 'text-[10px] font-medium uppercase tracking-[0.25em] text-neutral-500',
    body: 'mt-4 whitespace-pre-line text-base leading-[1.75] text-neutral-700 dark:text-neutral-300',
    linkPrimary:
      'inline-flex border border-neutral-900 px-4 py-2 text-xs font-medium uppercase tracking-widest text-neutral-900 transition hover:bg-neutral-900 hover:text-white dark:border-neutral-100 dark:text-neutral-100 dark:hover:bg-white dark:hover:text-neutral-900',
    linkExternal:
      'inline-flex bg-neutral-900 px-4 py-2 text-xs font-medium uppercase tracking-widest text-white transition hover:bg-neutral-700 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200',
  },
};

/**
 * @param {string} slug
 */
export function getExperienceTheme(slug) {
  const patch = overrides[slug] ?? {};
  return { ...defaultTheme, ...patch };
}

export default getExperienceTheme;
