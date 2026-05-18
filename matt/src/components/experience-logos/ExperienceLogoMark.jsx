/**
 * Logo per experience slug. Pass `variant="strip"` on the home projects row and `variant="page"` on `/experience/[slug]/`.
 * Uses `public/` SVG when listed in `EXPERIENCE_LOGO_PUBLIC_PATHS` (on the experience page); otherwise inline SVG (`currentColor`).
 * The home strip applies `grayscale` so marks read as monochrome; experience pages keep full color.
 * Urban / Decorline / SuperRare use inlined brand SVGs so `currentColor` follows the theme.
 * SI Tickets (`si-tickets`): home strip uses `SItickets.svg`; experience page uses SeatHQ from `EXPERIENCE_LOGO_PUBLIC_PATHS`.
 */

import { publicUrl } from '@/lib/basePath';
import { getExperienceLogoPublicPath } from '@/data/experiences';
import urbanMarkup from './urbanMarkup';
import decorlineMarkup from './decorlineMarkup';
import superrareMarkup from './superrareMarkup';

const THEMED_SVG_MARKUP = {
  'urban-event-marketing': urbanMarkup,
  'decorline-argentina': decorlineMarkup,
  'superrare-labs': superrareMarkup,
};

function ThemedSvgFromMarkup({ markup, className }) {
  return (
    <span
      aria-hidden
      className={
        className
          ? `inline-flex min-h-0 min-w-0 shrink-0 items-center justify-center overflow-hidden text-current [&>svg]:block [&>svg]:h-full [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:max-w-full [&>svg]:object-contain ${className}`
          : 'inline-flex min-h-0 min-w-0 shrink-0 items-center justify-center overflow-hidden text-current [&>svg]:block [&>svg]:h-full [&>svg]:max-h-full [&>svg]:w-auto [&>svg]:max-w-full [&>svg]:object-contain'
      }
      dangerouslySetInnerHTML={{ __html: markup }}
    />
  );
}

function SvgRoot({ className, children, viewBox }) {
  return (
    <svg
      className={className}
      viewBox={viewBox}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      {children}
    </svg>
  );
}

function Sagelink({ className }) {
  return (
    <SvgRoot className={className} viewBox="0 0 140 32">
      <text x="4" y="22" fontSize="17" fontWeight="700" fontFamily="system-ui,sans-serif" letterSpacing="-0.02em">
        Sagelink
      </text>
    </SvgRoot>
  );
}

function Henry({ className }) {
  return (
    <SvgRoot className={className} viewBox="0 0 118 32">
      <text x="4" y="23" fontSize="21" fontWeight="900" fontFamily="system-ui,sans-serif" letterSpacing="-0.02em">
        HENRY
      </text>
      <line x1="2" y1="15" x2="110" y2="15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
    </SvgRoot>
  );
}

function Gcba({ className }) {
  return (
    <SvgRoot className={className} viewBox="0 0 160 30">
      <text x="4" y="12" fontSize="9.5" fontWeight="600" fontFamily="system-ui,sans-serif" opacity="0.8">
        CIUDAD
      </text>
      <text x="4" y="25" fontSize="15" fontWeight="800" fontFamily="system-ui,sans-serif">
        GCBA
      </text>
    </SvgRoot>
  );
}

function Florida({ className }) {
  /* viewBox matches textLength (84) + x offset so the hit box is not wider than the wordmark */
  return (
    <SvgRoot className={className} viewBox="0 0 92 30">
      <text
        x="4"
        y="17"
        fontSize="18"
        fontWeight="800"
        fontFamily="system-ui,sans-serif"
        textLength="84"
        lengthAdjust="spacing"
      >
        FLORIDA
      </text>
      <text
        x="4"
        y="26.5"
        fontSize="10"
        fontWeight="600"
        fontFamily="system-ui,sans-serif"
        opacity="0.85"
        textLength="84"
        lengthAdjust="spacing"
      >
        PRODUCTS
      </text>
    </SvgRoot>
  );
}

function Freelance({ className }) {
  /* Tight viewBox: wordmark only (avoids empty space on the right of the link hit area). */
  return (
    <SvgRoot className={className} viewBox="0 0 120 40">
      <text x="4" y="29" fontSize="24" fontWeight="600" fontFamily="Georgia,serif" fontStyle="italic">
        freelance
      </text>
    </SvgRoot>
  );
}

const MARKS = {
  sagelink: Sagelink,
  henry: Henry,
  gcba: Gcba,
  'florida-products': Florida,
  freelance: Freelance,
};

/**
 * @param {'strip' | 'page'} [variant='strip'] — `strip`: home projects row (SI Tickets shows SI logo). `page`: experience detail (SI slug shows SeatHQ).
 */
export function ExperienceLogoMark({ slug, className, variant = 'strip' }) {
  const monoClass = variant === 'strip' ? 'grayscale' : '';

  if (slug === 'si-tickets' && variant === 'strip') {
    const src = encodeURI(publicUrl('/Imagenes/SItickets.svg'));
    return (
      <img
        src={src}
        alt=""
        className={['object-contain', monoClass, className].filter(Boolean).join(' ')}
        loading="lazy"
        decoding="async"
      />
    );
  }

  const themedMarkup = THEMED_SVG_MARKUP[slug];
  if (themedMarkup) {
    const decorlineLetter =
      slug === 'decorline-argentina'
        ? '[--decorline-letter:theme(colors.white)] dark:[--decorline-letter:theme(colors.zinc.950)]'
        : '';
    const markClass =
      slug === 'superrare-labs' && variant === 'strip'
        ? 'h-7 w-auto sm:h-8'
        : className;
    return (
      <ThemedSvgFromMarkup
        markup={themedMarkup}
        className={[monoClass, decorlineLetter, markClass].filter(Boolean).join(' ')}
      />
    );
  }
  const publicPath = getExperienceLogoPublicPath(slug);
  if (publicPath) {
    const src = encodeURI(publicUrl(publicPath));
    const imgClasses = ['object-contain', monoClass, className].filter(Boolean).join(' ');
    if (slug === 'si-tickets') {
      return (
        <span
          className={[
            'inline-flex items-center justify-center rounded-md bg-white p-0.5 ring-1 ring-zinc-900/10 dark:bg-white dark:ring-zinc-900/15',
            monoClass,
            className,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <img
            src={src}
            alt=""
            className="h-full max-h-full w-auto max-w-full object-contain"
            loading="lazy"
            decoding="async"
          />
        </span>
      );
    }
    return (
      <img
        src={src}
        alt=""
        className={imgClasses}
        loading="lazy"
        decoding="async"
      />
    );
  }
  const Cmp = MARKS[slug] ?? Freelance;
  return <Cmp className={[monoClass, className].filter(Boolean).join(' ')} />;
}

export default ExperienceLogoMark;
