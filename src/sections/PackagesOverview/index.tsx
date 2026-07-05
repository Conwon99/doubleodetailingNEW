import {
  packagesData,
  categoryLabels,
  PRICE_DISCLAIMER_TEXT,
  vehicleSizeGuide,
  getPricingRows,
} from "../../data/packages";
import type { PackageData } from "../../data/packages";
import { PriceSizeTable } from "./components/PriceSizeTable";

const categoryOrder: PackageData["category"][] = [
  "machine-polishing",
  "deep-clean",
  "maintenance",
];

/** Gallery image for packages hero background */
const PACKAGES_HERO_IMAGE = "/landrover.jpeg";

/** Service section images from home page - used as section headers */
const categoryImages: Record<PackageData["category"], string> = {
  "machine-polishing": "/Machine polishing.png",
  "deep-clean": "/Deep clean detailing.png",
  maintenance: "/Maintenance.png",
};

export const PackagesOverview = () => {
  const byCategory = categoryOrder.map((cat) => ({
    categoryId: cat,
    label: categoryLabels[cat],
    packages: packagesData.filter((p) => p.category === cat),
    imageUrl: categoryImages[cat],
  }));

  const allPricingRows = packagesData.flatMap(getPricingRows);

  return (
    <>
      {/* Hero with background image from gallery - pt clears fixed navbar */}
      <section
        className="relative min-h-[280px] md:min-h-[360px] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-[120px] md:pt-[150px]"
        style={{ backgroundImage: `url("${PACKAGES_HERO_IMAGE.replace(/"/g, "%22")}")` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-5">
          <div className="inline-block border border-white/80 px-3 py-1 rounded-[1000px] mb-4">
            <span className="font-medium leading-[22px] text-white">Packages & Pricing</span>
          </div>
          <h2 className="text-3xl font-bold tracking-[-0.52px] leading-tight md:text-5xl md:leading-tight font-refrigerator uppercase text-white">
            Packages Overview
          </h2>
          <a
            href="/packages/find-my-package"
            className="mt-6 inline-flex items-center gap-2 text-center text-black font-refrigerator uppercase text-sm md:text-base font-bold py-4 px-8 rounded-full bg-white hover:bg-cta hover:text-white shadow-lg shadow-black/40 transition hover:scale-105"
          >
            <svg
              className="w-5 h-5 shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
            Find Which Package Is Best For Me
          </a>
        </div>
      </section>

      <section className="box-border py-[60px] md:py-[100px]">
        <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
          <div className="box-border flex flex-col gap-y-16 md:gap-y-20">
            {byCategory.map(({ categoryId, label, packages, imageUrl }) => (
              <div key={categoryId}>
                {/* Section header with image */}
                <div className="relative rounded-xl overflow-hidden border border-neutral-700 shadow-lg bg-[#282828] min-h-[100px] md:min-h-[120px] flex items-center justify-center p-6 md:p-8 mb-6 md:mb-8">
                  <img
                    src={imageUrl}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    aria-hidden
                  />
                  <div className="absolute inset-0 bg-[#282828]/85" />
                  <h3 className="relative font-refrigerator uppercase text-xl md:text-2xl lg:text-3xl font-bold leading-tight text-white text-center">
                    {label}
                  </h3>
                </div>

                {/* Package summary cards - full width, stacked vertically */}
                <div className="flex flex-col gap-6 md:gap-8">
                  {packages.map((pkg) => (
                    <div
                      key={pkg.id}
                      className="rounded-xl border border-neutral-200 bg-white shadow-sm overflow-hidden flex flex-col w-full md:flex-row"
                    >
                      {pkg.imageUrl && (
                        <div className="relative w-full md:w-[320px] lg:w-[380px] md:min-h-[200px] md:shrink-0 aspect-[4/3] md:aspect-auto bg-neutral-100 overflow-hidden">
                          {pkg.id === "casino-royale" ? (
                            <div className="grid grid-cols-3 gap-1 h-full w-full p-1 bg-black">
                              {[
                                "/packages/casino-royale-gallery-1.jpeg",
                                "/packages/casino-royale-gallery-2.jpeg",
                                "/packages/casino-royale-gallery-3.jpeg",
                              ].map((src, index) => (
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
                      <div className="p-5 md:p-6 flex-1 flex flex-col min-w-0">
                        <div className="mb-3">
                          <h4 className="font-refrigerator uppercase text-base md:text-lg font-bold text-black leading-tight">
                            {pkg.title}
                          </h4>
                          {pkg.tagline && (
                            <p className="font-refrigerator uppercase text-sm text-gray-600 mt-0.5">
                              &ldquo;{pkg.tagline}&rdquo;
                            </p>
                          )}
                        </div>
                        <p className="font-figtree text-[15px] text-gray-700 leading-6 flex-1">
                          {pkg.summary}
                        </p>
                        <div className="mt-4 flex flex-col gap-1">
                          {pkg.pricingTiers
                            ? pkg.pricingTiers.map((tier) => (
                                <p
                                  key={tier.label}
                                  className="font-figtree text-xs md:text-sm text-gray-600"
                                >
                                  <span className="font-semibold text-black">{tier.label}:</span>{" "}
                                  {tier.duration}
                                </p>
                              ))
                            : pkg.durationDisplay && (
                                <p className="font-figtree text-xs md:text-sm text-gray-600">
                                  {pkg.durationDisplay}
                                </p>
                              )}
                        </div>
                        <a
                          href={`/packages/${categoryId}/${pkg.id}`}
                          className="mt-4 inline-block text-center text-white font-figtree text-sm font-medium py-2.5 px-4 rounded-lg bg-cta hover:bg-cta-dark border border-transparent transition w-full"
                        >
                          View Our Pricing and Size Guide
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Pricing table */}
            <div>
              <h3 className="font-refrigerator uppercase text-xl md:text-2xl font-bold text-black mb-6 text-center">
                Pricing
              </h3>
              <PriceSizeTable rows={allPricingRows} />
            </div>

            {/* Vehicle size guide */}
            <div id="size-guide" className="scroll-mt-[120px] md:scroll-mt-[160px] max-w-[860px] mx-auto">
              <h4 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-4 text-center">
                Vehicle Size Guide
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {vehicleSizeGuide.map(({ size, examples }) => (
                  <div key={size} className="rounded-lg border border-neutral-200 bg-white p-4">
                    <p className="font-refrigerator uppercase text-sm font-bold text-black">{size}</p>
                    <p className="font-figtree text-sm text-gray-700 mt-1">{examples}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Special services */}
            <div className="mt-10 md:mt-14 border-t border-neutral-200 pt-8 md:pt-10">
              <h3 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-4">
                Special Services
              </h3>
              <ul className="space-y-3 list-none pl-0">
                <li>
                  <span className="font-refrigerator uppercase text-base md:text-lg font-bold text-black">
                    Headlight Restoration{" "}
                    <span className="font-normal normal-case text-[13px] md:text-sm text-gray-600">
                      (Starts from £80)
                    </span>
                  </span>
                  <span className="font-figtree text-[15px] text-gray-700 leading-6">
                    {" "}
                    — Restore cloudy or yellowed headlights for improved visibility and a like-new appearance. Professional polishing and UV protection.
                  </span>
                </li>
                <li>
                  <span className="font-refrigerator uppercase text-base md:text-lg font-bold text-black">
                    Soft Top Coating{" "}
                    <span className="font-normal normal-case text-[13px] md:text-sm text-gray-600">
                      (Starts from £140)
                    </span>
                  </span>
                  <span className="font-figtree text-[15px] text-gray-700 leading-6">
                    {" "}
                    — Revive and protect convertible and soft tops with specialist cleaning, restoration, and durable coating for lasting finish.
                  </span>
                </li>
                <li>
                  <span className="font-refrigerator uppercase text-base md:text-lg font-bold text-black">
                    Engine Bay Detailing{" "}
                    <span className="font-normal normal-case text-[13px] md:text-sm text-gray-600">
                      (Starts from £50)
                    </span>
                  </span>
                  <span className="font-figtree text-[15px] text-gray-700 leading-6">
                    {" "}
                    — Thorough cleaning and dressing of the engine bay. Safe, professional treatment to showcase and protect under-bonnet areas.
                  </span>
                </li>
                <li>
                  <span className="font-refrigerator uppercase text-base md:text-lg font-bold text-black">
                    Fabric Coating (Interior){" "}
                    <span className="font-normal normal-case text-[13px] md:text-sm text-gray-600">
                      (Starts from £75)
                    </span>
                  </span>
                  <span className="font-figtree text-[15px] text-gray-700 leading-6">
                    {" "}
                    — Protect upholstery, carpets, and mats with fabric coating. Repels stains and moisture while keeping interiors looking fresh.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-10 md:mt-14 text-center max-w-[720px] mx-auto">
              <h3 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-4">
                WHICH PACKAGE IS RIGHT FOR YOU?
              </h3>
              <img
                src="/packageoverview.png"
                alt="Which package is right for you"
                className="mx-auto mb-4 max-w-[680px] w-full h-auto rounded-lg border border-neutral-200 bg-white"
                loading="lazy"
              />
              <p className="font-figtree text-[15px] text-gray-600 md:text-base leading-6">
                We know choosing a package isn't the easiest for most to decipher, so we have created a section to know what is best
                for your vehicle. Explore our detailing packages to find the right level of protection and finish for your vehicle,
                with a clear price list and package breakdown to help you choose confidently. Below is a summary of main packages,
                but be sure to check out our special services as well.
              </p>
            </div>

            <div className="mt-10 md:mt-14 max-w-[860px] mx-auto">
              <h4 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-4">
                Here is a summary of our services:
              </h4>
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-2">
                    Maintenance
                  </h4>
                  <p className="font-figtree text-[15px] text-gray-700 leading-6">
                    Designed for clients who want their vehicle consistently presented to a high standard without compromise.
                  </p>
                </div>

                <div>
                  <h4 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-2">
                    Premium Detailing*
                  </h4>
                  <p className="font-figtree text-[15px] text-gray-700 leading-6">
                    A comprehensive interior and exterior detail designed to safely restore cleanliness, remove
                    contamination, add 6 months paint protection, and prepare your vehicle for ongoing maintenance or
                    protection.
                  </p>
                </div>

                <div>
                  <h4 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-2">
                    Machine Polishing & Ceramic Protection
                  </h4>
                  <p className="font-figtree text-[15px] text-gray-700 leading-6">
                    Focused on gloss, clarity, defect reduction, and durable protection for owners who value the finish and
                    long-term condition of their vehicle.
                  </p>
                </div>

                <div>
                  <h4 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-2">
                    Unit & Mobile Services
                  </h4>
                  <p className="font-figtree text-[15px] text-gray-700 leading-6">
                    Select services are available both mobile and from our private detailing unit, with advanced correction and
                    long-term ceramic packages carried out in controlled indoor conditions for optimal results.
                  </p>
                </div>
              </div>
            </div>

            <p className="mt-10 md:mt-14 font-figtree text-[14px] text-gray-600 md:text-[15px] leading-6 text-center max-w-[860px] mx-auto">
              {PRICE_DISCLAIMER_TEXT}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
