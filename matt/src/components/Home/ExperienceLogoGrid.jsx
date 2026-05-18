'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { getCompaniesForHomeMainStrip } from '@/data/experiences';
import { ExperienceLogoMark } from '@/components/experience-logos/ExperienceLogoMark';

const PX_PER_FRAME = 0.45;

const linkClass =
  'group inline-flex shrink-0 items-center justify-center px-2 text-zinc-600 opacity-90 transition hover:opacity-100 dark:text-zinc-300 sm:px-3';

const ghostClass =
  'inline-flex shrink-0 items-center justify-center px-2 text-zinc-600 opacity-90 dark:text-zinc-300 sm:px-3';

function MarqueeLogoRow({ companies }) {
  const trackRef = useRef(null);
  const firstCopyRef = useRef(null);
  const offsetRef = useRef(0);
  const rafRef = useRef(0);
  const pausedRef = useRef(false);
  const halfWidthRef = useRef(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  const slugKey = companies.map((c) => c.slug).join(',');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener('change', sync);
    return () => mq.removeEventListener('change', sync);
  }, []);

  useEffect(() => {
    const el = firstCopyRef.current;
    if (!el) return;
    const measure = () => {
      halfWidthRef.current = el.offsetWidth;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [slugKey]);

  useEffect(() => {
    offsetRef.current = 0;
    if (trackRef.current) {
      trackRef.current.style.transform = '';
    }
  }, [slugKey]);

  useEffect(() => {
    if (reduceMotion && trackRef.current) {
      trackRef.current.style.transform = '';
      offsetRef.current = 0;
    }
  }, [reduceMotion]);

  const tick = useCallback(() => {
    const track = trackRef.current;
    const hw = halfWidthRef.current;
    if (track && hw > 0 && !pausedRef.current && !reduceMotion) {
      offsetRef.current += PX_PER_FRAME;
      if (offsetRef.current >= hw) {
        offsetRef.current -= hw;
      }
      track.style.transform = `translate3d(${-offsetRef.current}px,0,0)`;
    }
    rafRef.current = requestAnimationFrame(tick);
  }, [reduceMotion]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [tick]);

  const onEnter = () => {
    pausedRef.current = true;
  };

  const onLeave = () => {
    pausedRef.current = false;
  };

  const gapClass = 'gap-x-10 sm:gap-x-12';

  return (
    <div
      role="presentation"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className="relative min-h-[3rem] overflow-hidden py-1 [mask-image:linear-gradient(90deg,transparent_0,black_8%,black_92%,transparent_100%)] [-webkit-mask-image:linear-gradient(90deg,transparent_0,black_8%,black_92%,transparent_100%)] sm:min-h-[3.25rem]"
    >
      <div
        ref={trackRef}
        className={`flex w-max will-change-transform ${reduceMotion ? 'mx-auto' : ''}`}
        style={reduceMotion ? { transform: 'none' } : undefined}
      >
        <div ref={firstCopyRef} className={`flex shrink-0 flex-nowrap items-center ${gapClass}`}>
          {companies.map((c) => (
            <Link
              key={c.slug}
              href={`/experience/${c.slug}/`}
              className={linkClass}
              aria-label={`${c.stripAriaLabel ?? c.name} — view experience`}
            >
              <ExperienceLogoMark slug={c.slug} variant="strip" className="h-10 w-auto sm:h-12" />
            </Link>
          ))}
        </div>
        {!reduceMotion && (
          <div className={`flex shrink-0 flex-nowrap items-center ${gapClass}`} aria-hidden>
            {companies.map((c) => (
              <span key={`${c.slug}-dup`} className={ghostClass}>
                <ExperienceLogoMark slug={c.slug} variant="strip" className="h-10 w-auto sm:h-12" />
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Home: design/engineering/project logo strip (includes Freelance; Henry & Sagelink live under `/experience/freelance/`).
 * Row scrolls horizontally in a continuous loop (ticker) and pauses on hover.
 */
export default function ExperienceLogoGrid() {
  const mainStrip = getCompaniesForHomeMainStrip();

  return (
    <div className="scroll-mt-28 bg-zinc-100 py-16 dark:bg-black sm:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <section id="projects" aria-labelledby="projects-heading" className="text-zinc-600 dark:text-zinc-300">
          <h2
            id="projects-heading"
            className="mb-12 text-center text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-400 sm:text-base"
          >
            Design, engineering, project
          </h2>
          <MarqueeLogoRow companies={mainStrip} />
        </section>
      </div>
    </div>
  );
}
