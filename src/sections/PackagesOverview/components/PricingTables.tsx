import type { PackageData, SizePricing } from "../../../data/packages";
import { PRICING_NOTE_TEXT } from "../../../data/packages";

type PricingTablesProps = { packages: PackageData[] };

const SIZE_LABELS: { key: keyof SizePricing; label: string }[] = [
  { key: "small", label: "Small" },
  { key: "medium", label: "Medium" },
  { key: "large", label: "Large" },
  { key: "xl", label: "XL / Van" },
];

/** "SINGLE-STAGE PAINT CORRECTION" -> "Single-Stage Paint Correction" */
const toTitleCase = (text: string) =>
  text.toLowerCase().replace(/(^|[\s-])([a-z])/g, (_, sep, ch) => sep + ch.toUpperCase());

const tierLabel = (label: string, unitOnly?: boolean) => (unitOnly ? `${label}*` : label);

const PackageName = ({ pkg }: { pkg: PackageData }) => (
  <>
    <span className="block font-figtree font-bold text-[14px] uppercase text-black">
      {pkg.tagline ?? pkg.title}
    </span>
    {pkg.tagline && (
      <span className="block font-figtree font-semibold text-[13px] text-gray-500">
        {toTitleCase(pkg.title)}
      </span>
    )}
  </>
);

const headClass =
  "font-figtree uppercase text-[13px] font-bold text-white bg-black px-4 py-3 border-r border-neutral-700 last:border-r-0";
const cellClass = "font-figtree text-[14px] text-gray-800 px-4 py-3 border-t border-neutral-200";

/** Paint enhancement/correction packages: one row per protection tier */
const TieredTable = ({ packages }: PricingTablesProps) => (
  <div>
    {/* Mobile: stacked cards */}
    <div className="flex flex-col gap-3 md:hidden">
      {packages.map((pkg) => (
        <div key={pkg.id} className="rounded-lg border border-neutral-200 bg-white p-4">
          <PackageName pkg={pkg} />
          <div className="mt-3 flex flex-col gap-3">
            {pkg.pricingTiers?.map((tier) => (
              <div key={tier.label}>
                <p className="font-figtree font-semibold text-sm text-black mb-1">
                  {tierLabel(tier.label, tier.unitOnly)}
                </p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1">
                  {SIZE_LABELS.map(({ key, label }) => (
                    <div key={key} className="flex items-baseline justify-between gap-2">
                      <span className="font-figtree text-xs text-gray-600">{label}</span>
                      <span className="font-figtree text-sm font-medium text-black">
                        {tier.prices[key]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Desktop/tablet: full table */}
    <div className="hidden md:block border border-neutral-200 overflow-hidden">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className={headClass}>Package</th>
            <th className={headClass}>Protection</th>
            {SIZE_LABELS.map(({ key, label }) => (
              <th key={key} className={headClass}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, pkgIndex) => {
            const tiers = pkg.pricingTiers ?? [];
            const rowBg = pkgIndex % 2 === 0 ? "bg-neutral-50" : "bg-neutral-100";
            return tiers.map((tier, i) => (
              <tr key={`${pkg.id}-${tier.label}`} className={rowBg}>
                {i === 0 && (
                  <td
                    rowSpan={tiers.length}
                    className={`${cellClass} border-r align-middle`}
                  >
                    <PackageName pkg={pkg} />
                  </td>
                )}
                <td className={`${cellClass} border-r`}>{tierLabel(tier.label, tier.unitOnly)}</td>
                {SIZE_LABELS.map(({ key }) => (
                  <td key={key} className={`${cellClass} border-r last:border-r-0`}>
                    {tier.prices[key]}
                  </td>
                ))}
              </tr>
            ));
          })}
        </tbody>
      </table>
    </div>
  </div>
);

/** Single-price packages: one row per package */
const SimpleTable = ({ packages }: PricingTablesProps) => (
  <div>
    {/* Mobile: stacked cards */}
    <div className="flex flex-col gap-3 md:hidden">
      {packages.map((pkg) => (
        <div key={pkg.id} className="rounded-lg border border-neutral-200 bg-white p-4">
          <PackageName pkg={pkg} />
          <div className="mt-3 grid grid-cols-2 gap-x-3 gap-y-1">
            {SIZE_LABELS.map(({ key, label }) => (
              <div key={key} className="flex items-baseline justify-between gap-2">
                <span className="font-figtree text-xs text-gray-600">{label}</span>
                <span className="font-figtree text-sm font-medium text-black">
                  {pkg.pricingBySize?.[key]}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Desktop/tablet: full table */}
    <div className="hidden md:block border border-neutral-200 overflow-hidden">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className={headClass}>Package</th>
            {SIZE_LABELS.map(({ key, label }) => (
              <th key={key} className={headClass}>
                {label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {packages.map((pkg, i) => (
            <tr key={pkg.id} className={i % 2 === 0 ? "bg-white" : "bg-neutral-100"}>
              <td className={`${cellClass} border-r`}>
                <PackageName pkg={pkg} />
              </td>
              {SIZE_LABELS.map(({ key }) => (
                <td key={key} className={`${cellClass} border-r last:border-r-0`}>
                  {pkg.pricingBySize?.[key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const PricingTables = ({ packages }: PricingTablesProps) => {
  const tiered = packages.filter((p) => p.pricingTiers);
  const simple = packages.filter((p) => !p.pricingTiers && p.pricingBySize);
  const hasUnitOnly = tiered.some((p) => p.pricingTiers?.some((t) => t.unitOnly));

  return (
    <div className="flex flex-col gap-10 max-w-[900px] mx-auto w-full">
      {tiered.length > 0 && (
        <div>
          <h3 className="font-figtree text-xl md:text-2xl font-bold text-black mb-4">
            Paint Enhancement, Correction &amp; Ceramic Coatings
          </h3>
          <TieredTable packages={tiered} />
          {hasUnitOnly && (
            <p className="mt-3 font-figtree text-[13px] text-gray-500">
              *Three-year ceramic coatings are carried out at the private unit and require overnight
              curing.
            </p>
          )}
        </div>
      )}

      {simple.length > 0 && (
        <div>
          <h3 className="font-figtree text-xl md:text-2xl font-bold text-black mb-4">
            Premium Detailing &amp; Maintenance
          </h3>
          <SimpleTable packages={simple} />
        </div>
      )}

      <div className="border border-neutral-200 bg-neutral-50 p-5 md:p-6">
        <h4 className="font-figtree text-base md:text-lg font-bold text-black mb-2">Pricing note</h4>
        <p className="font-figtree text-[15px] text-gray-700 leading-6">{PRICING_NOTE_TEXT}</p>
      </div>
    </div>
  );
};
