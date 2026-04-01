import { packagesData, categoryLabels } from "../../data/packages";
import type { PackageData } from "../../data/packages";

const categoryOrder: PackageData["category"][] = [
  "machine-polishing",
  "deep-clean",
  "maintenance",
];

/** Gallery image for packages hero background */
const PACKAGES_HERO_IMAGE = "/gallery/WhatsApp Image 2026-02-02 at 11.18.23 PM (3).jpeg";

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
                          <img
                            src={pkg.imageUrl}
                            alt=""
                            className="w-full h-full object-cover"
                          />
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
                          <p className="font-refrigerator uppercase text-lg font-bold text-black">
                            {pkg.priceDisplay}
                          </p>
                          {pkg.durationDisplay && (
                            <p className="font-figtree text-xs md:text-sm text-gray-600">
                              {pkg.durationDisplay}
                            </p>
                          )}
                        </div>
                        <a
                          href={`/packages/${categoryId}/${pkg.id}`}
                          className="mt-4 inline-block text-center text-white font-figtree text-sm font-medium py-2.5 px-4 rounded-lg bg-cta hover:bg-cta-dark border border-transparent transition w-full"
                        >
                          View details
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

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
                src="/Picture1.png"
                alt="Which package is right for you"
                className="mx-auto mb-4 max-w-[680px] w-full h-auto rounded-lg border border-neutral-200 bg-white"
                loading="lazy"
              />
              <p className="font-figtree text-[15px] text-gray-600 md:text-base leading-6">
                We know choosing a package isn't the easiest for most to decipher, so we have created a section to know what is best
                for your vehicle. All packages are crafted with care to deliver optimal results for your vehicle. Below is a summary
                of main packages, but be sure to check out our special services as well.
              </p>
            </div>

            <div className="mt-10 md:mt-14 max-w-[860px] mx-auto">
              <div className="flex flex-col gap-6">
                <div>
                  <h4 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-2">
                    MACHINE POLISHING AND COATING
                  </h4>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="font-figtree text-[15px] text-gray-700 leading-6">
                      ● Revive dull, hazy, or swirl marked paintwork to provide better protection than dealership options, and protection for your asset.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-2">
                    DEEP CLEANING
                  </h4>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="font-figtree text-[15px] text-gray-700 leading-6">
                      ● Every inch covered inside and outside, restoring a showroom valeting finish.
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-refrigerator uppercase text-lg md:text-xl font-bold text-black mb-2">
                    MAINTENANCE
                  </h4>
                  <ul className="space-y-2 list-none pl-0">
                    <li className="font-figtree text-[15px] text-gray-700 leading-6">
                      ● To achieve the same results over and over again, and keep paintwork shiny.
                    </li>
                    <li className="font-figtree text-[15px] text-gray-700 leading-6">
                      ● If you’re too busy to keep on top of keeping your vehicle.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
