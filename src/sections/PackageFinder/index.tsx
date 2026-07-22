import { useState } from "react";
import { packagesData, vehicleSizeGuide } from "../../data/packages";
import type { SizePricing } from "../../data/packages";

type SizeKey = keyof SizePricing;

const sizeOptions = vehicleSizeGuide.map((g) => ({
  key: g.size.toLowerCase() as SizeKey,
  label: g.size,
  examples: g.examples,
}));

type NeedOption = { packageId: string; label: string; description: string };

const needOptions: NeedOption[] = [
  {
    packageId: "007",
    label: "Routine upkeep wash",
    description:
      "Your vehicle is generally well kept and just needs a safe, regular wash to stay that way.",
  },
  {
    packageId: "spectre",
    label: "Deeper refresh for a well-kept vehicle",
    description:
      "A more thorough interior & exterior reset. Only suitable if your vehicle has had a Full Detail, Maintenance Detail, or Paint Enhancement within the last 2–8 weeks.",
  },
  {
    packageId: "shaken-not-stirred",
    label: "Neglected vehicle needing a full reset",
    description:
      "Heavily used, dirty, or overdue for attention — a full interior & exterior detail with 6 months paint protection.",
  },
  {
    packageId: "no-time-to-die",
    label: "Improve gloss & shine, plus protection",
    description:
      "Paintwork looks dull or lightly swirled and you want a visual refresh with 12 months of protection.",
  },
  {
    packageId: "casino-royale",
    label: "Paint correction + long-term ceramic protection",
    description:
      "You want defect correction paired with a durable 2-year or 3-year ceramic coating.",
  },
];

export const PackageFinder = () => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [size, setSize] = useState<SizeKey | null>(null);
  const [packageId, setPackageId] = useState<string | null>(null);
  const [tierLabel, setTierLabel] = useState<string | null>(null);

  const pkg = packageId ? packagesData.find((p) => p.id === packageId) ?? null : null;
  const isMultiTier = !!pkg?.pricingTiers;
  const selectedTier = isMultiTier
    ? pkg!.pricingTiers!.find((t) => t.label === tierLabel) ?? null
    : null;

  const price = (() => {
    if (!pkg || !size) return null;
    if (isMultiTier) return selectedTier ? selectedTier.prices[size] : null;
    return pkg.pricingBySize ? pkg.pricingBySize[size] : null;
  })();

  const duration = isMultiTier ? selectedTier?.duration : pkg?.durationDisplay;
  const sizeLabel = sizeOptions.find((s) => s.key === size)?.label ?? "";

  const selectSize = (key: SizeKey) => {
    setSize(key);
    setStep(2);
  };

  const selectNeed = (id: string) => {
    setPackageId(id);
    const newPkg = packagesData.find((p) => p.id === id);
    setStep(newPkg?.pricingTiers ? 3 : 4);
  };

  const selectTier = (label: string) => {
    setTierLabel(label);
    setStep(4);
  };

  const goBack = () => {
    if (step === 4 && isMultiTier) setStep(3);
    else if (step === 4 || step === 3) setStep(2);
    else if (step === 2) setStep(1);
  };

  const reset = () => {
    setStep(1);
    setSize(null);
    setPackageId(null);
    setTierLabel(null);
  };

  const cardBase =
    "text-left rounded-xl border border-neutral-200 bg-white p-4 md:p-5 hover:border-cta hover:shadow-sm transition w-full";

  return (
    <>
      <section
        className="relative min-h-[240px] md:min-h-[320px] flex items-center justify-center bg-cover bg-center bg-no-repeat pt-[120px] md:pt-[150px]"
        style={{ backgroundImage: `url("/landrover.jpeg")` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-5">
          <a
            href="/packages"
            className="inline-block text-sm font-figtree text-white/90 hover:text-white mb-4"
          >
            ← Back to Packages
          </a>
          <div className="inline-block border border-white/80 px-3 py-1 rounded-[1000px] mb-4">
            <span className="font-medium leading-[22px] text-white">Packages & Pricing</span>
          </div>
          <h1 className="text-3xl font-bold tracking-[-0.52px] leading-tight md:text-5xl md:leading-tight font-refrigerator uppercase text-white">
            Find Which Package Is Best For Me
          </h1>
        </div>
      </section>

      <section className="box-border py-[60px] md:py-[100px]">
        <div className="box-border max-w-[700px] mx-auto px-5 md:px-8">
          {step === 1 && (
            <div>
              <h2 className="font-refrigerator uppercase text-xl md:text-2xl font-bold text-black mb-2 text-center">
                What size is your vehicle?
              </h2>
              <p className="font-figtree text-[15px] text-gray-600 text-center mb-6">
                Not sure? Match your car to the closest examples below.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {sizeOptions.map((opt) => (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => selectSize(opt.key)}
                    className={cardBase}
                  >
                    <p className="font-refrigerator uppercase text-sm font-bold text-black">
                      {opt.label}
                    </p>
                    <p className="font-figtree text-sm text-gray-600 mt-1">{opt.examples}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <button
                type="button"
                onClick={goBack}
                className="font-figtree text-sm text-gray-600 hover:text-black mb-4"
              >
                ← Back
              </button>
              <h2 className="font-refrigerator uppercase text-xl md:text-2xl font-bold text-black mb-2 text-center">
                What are you looking for?
              </h2>
              <p className="font-figtree text-[15px] text-gray-600 text-center mb-6">
                Choose the option that best matches your vehicle's current condition and your goal.
              </p>
              <div className="flex flex-col gap-3">
                {needOptions.map((opt) => (
                  <button
                    key={opt.packageId}
                    type="button"
                    onClick={() => selectNeed(opt.packageId)}
                    className={cardBase}
                  >
                    <p className="font-figtree font-semibold text-[15px] text-black">
                      {opt.label}
                    </p>
                    <p className="font-figtree text-sm text-gray-600 mt-1">{opt.description}</p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 3 && pkg?.pricingTiers && (
            <div>
              <button
                type="button"
                onClick={goBack}
                className="font-figtree text-sm text-gray-600 hover:text-black mb-4"
              >
                ← Back
              </button>
              <h2 className="font-refrigerator uppercase text-xl md:text-2xl font-bold text-black mb-2 text-center">
                2-Year or 3-Year Ceramic Coating?
              </h2>
              <p className="font-figtree text-[15px] text-gray-600 text-center mb-6">
                The 3-Year option is unit-only and includes an upgraded, longer-lasting coating.
              </p>
              <div className="flex flex-col gap-3">
                {pkg.pricingTiers.map((tier) => (
                  <button
                    key={tier.label}
                    type="button"
                    onClick={() => selectTier(tier.label)}
                    className={cardBase}
                  >
                    <p className="font-figtree font-semibold text-[15px] text-black">
                      {tier.label}
                    </p>
                    {tier.duration && (
                      <p className="font-figtree text-sm text-gray-600 mt-1">{tier.duration}</p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 4 && pkg && (
            <div>
              <button
                type="button"
                onClick={goBack}
                className="font-figtree text-sm text-gray-600 hover:text-black mb-4"
              >
                ← Back
              </button>
              <div className="rounded-xl border border-neutral-200 bg-white p-6 md:p-8 text-center">
                <p className="font-figtree text-sm text-gray-600 mb-1">We recommend</p>
                <h2 className="font-refrigerator uppercase text-2xl md:text-3xl font-bold text-black">
                  {pkg.title}
                </h2>
                {pkg.tagline && (
                  <p className="font-refrigerator uppercase text-base text-gray-600 mt-1">
                    &ldquo;{pkg.tagline}&rdquo;{selectedTier ? ` — ${selectedTier.label}` : ""}
                  </p>
                )}

                <div className="mt-5 pt-5 border-t border-neutral-200">
                  <p className="font-figtree text-sm text-gray-600">
                    Price for a {sizeLabel} vehicle
                  </p>
                  <p className="font-refrigerator uppercase text-3xl font-bold text-black mt-1">
                    {price === "Quote" ? "Custom Quote" : price}
                  </p>
                  {duration && (
                    <p className="font-figtree text-sm text-gray-600 mt-1">{duration}</p>
                  )}
                </div>

                {pkg.note && (
                  <div className="mt-5 p-3 bg-neutral-50 rounded-lg border border-neutral-200 text-left">
                    <p className="font-figtree text-xs md:text-sm text-gray-700">
                      <span className="font-semibold text-black">Note: </span>
                      {pkg.note}
                    </p>
                  </div>
                )}

                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href="https://clienthub.getjobber.com/hubs/a44bef51-533c-4e99-b56c-1a3b824ae502/public/requests/4921090/new"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-center text-white font-figtree text-sm font-medium py-3 px-4 rounded-lg bg-cta hover:bg-cta-dark border border-transparent transition w-full"
                  >
                    Book Now
                  </a>
                  <a
                    href={`/packages/${pkg.category}/${pkg.id}`}
                    className="inline-block text-center text-black font-figtree text-sm font-medium py-3 px-4 rounded-lg border border-neutral-300 hover:border-black transition w-full"
                  >
                    View Full Package Details
                  </a>
                  <button
                    type="button"
                    onClick={reset}
                    className="font-figtree text-sm text-gray-600 hover:text-black mt-1"
                  >
                    Start Over
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
