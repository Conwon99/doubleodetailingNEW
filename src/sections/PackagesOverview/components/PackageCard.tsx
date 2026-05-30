import type { PackageData } from "../../../data/packages";
import { PRICE_DISCLAIMER_TEXT } from "../../../data/packages";

type PackageCardProps = { package: PackageData };

export const PackageCard = ({ package: pkg }: PackageCardProps) => {
  const isCasinoRoyale = pkg.id === "casino-royale";
  const casinoRoyaleImages = [
    "/packages/casino-royale-gallery-1.jpeg",
    "/packages/casino-royale-gallery-2.jpeg",
    "/packages/casino-royale-gallery-3.jpeg",
  ];

  return (
    <article className="rounded-xl overflow-hidden bg-black text-white border border-neutral-800 shadow-lg">
      {pkg.imageUrl && (
        <div className="relative w-full aspect-[4/3] bg-neutral-900 overflow-hidden">
          {isCasinoRoyale ? (
            <div className="grid grid-cols-3 gap-1 h-full w-full p-1 bg-black">
              {casinoRoyaleImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt={`Casino Royale image ${index + 1}`}
                  className="w-full h-full object-cover rounded-sm"
                  loading="lazy"
                />
              ))}
            </div>
          ) : (
            <img
              src={pkg.imageUrl}
              alt=""
              className="w-full h-full object-cover"
            />
          )}
        </div>
      )}
      <div className="relative p-6 md:p-8">
        {/* Title & tagline */}
        <div>
          <h3 className="font-refrigerator uppercase text-xl md:text-2xl font-bold leading-tight">
            {pkg.title}
          </h3>
          {pkg.tagline && (
            <p className="font-refrigerator uppercase text-base md:text-lg text-neutral-300 mt-1">
              &ldquo;{pkg.tagline}&rdquo;
            </p>
          )}
          {pkg.subtitle && (
            <p className="font-figtree text-sm text-neutral-400 mt-1">{pkg.subtitle}</p>
          )}
        </div>

        {/* Sections */}
        <div className="mt-6 space-y-5">
          {pkg.sections.map((section) => (
            <div key={section.heading}>
              <h4 className="font-figtree font-bold text-sm uppercase tracking-wide text-white border-b border-neutral-600 pb-1 mb-2">
                {section.heading}
              </h4>
              <ul className="space-y-1.5">
                {section.items.map((item, i) => (
                  <li key={i} className="font-figtree text-sm text-neutral-200 flex gap-2">
                    <span className="text-neutral-500 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          {pkg.idealFor && pkg.idealFor.length > 0 && (
            <div>
              <h4 className="font-figtree font-bold text-sm uppercase tracking-wide text-white border-b border-neutral-600 pb-1 mb-2">
                Ideal For
              </h4>
              <ul className="space-y-1.5">
                {pkg.idealFor.map((item, i) => (
                  <li key={i} className="font-figtree text-sm text-neutral-200 flex gap-2">
                    <span className="text-neutral-500 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {pkg.extras && (
            <div>
              <h4 className="font-figtree font-bold text-sm uppercase tracking-wide text-white border-b border-neutral-600 pb-1 mb-2">
                {pkg.extras.heading}
              </h4>
              <ul className="space-y-1.5">
                {pkg.extras.items.map((item, i) => (
                  <li key={i} className="font-figtree text-sm text-neutral-200 flex gap-2">
                    <span className="text-neutral-500 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Note (maintenance prerequisite) */}
        {pkg.note && (
          <div className="mt-5 p-3 bg-neutral-800/60 rounded-lg border border-neutral-700">
            <p className="font-figtree text-xs md:text-sm text-neutral-300">
              <span className="font-semibold text-white">Note: </span>
              {pkg.note}
            </p>
          </div>
        )}

        {/* Price, time & disclaimer */}
        <div className="mt-6 pt-5 border-t border-neutral-700 flex flex-wrap items-baseline justify-between gap-3">
          <div className="flex flex-col gap-1">
            <span className="font-refrigerator uppercase text-lg md:text-xl font-bold">
              {pkg.priceDisplay}
            </span>
            {pkg.durationDisplay && (
              <span className="font-figtree text-xs md:text-sm text-neutral-300">
                {pkg.durationDisplay}
              </span>
            )}
          </div>
          <p className="font-figtree text-xs text-neutral-500 italic text-right max-w-[280px]">
            {PRICE_DISCLAIMER_TEXT}
          </p>
        </div>

        {/* Book Now - link to contact with package prefill */}
        <div className="mt-5">
          <a
            href={`/contact?package=${encodeURIComponent(`${pkg.category}/${pkg.id}`)}`}
            className="block w-full text-center text-white font-figtree text-sm font-medium py-3 px-4 rounded-lg bg-cta hover:bg-cta-dark border border-transparent transition"
          >
            Book Now
          </a>
        </div>
      </div>
    </article>
  );
};
