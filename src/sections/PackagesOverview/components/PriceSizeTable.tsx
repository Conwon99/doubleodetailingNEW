import type { SizePricing } from "../../../data/packages";

type PriceSizeTableRow = { label: string; prices: SizePricing };

type PriceSizeTableProps = {
  rows: PriceSizeTableRow[];
  /** Use light styling for dark backgrounds (e.g. package detail card) */
  dark?: boolean;
};

const SIZE_LABELS: { key: keyof SizePricing; label: string }[] = [
  { key: "small", label: "Small" },
  { key: "medium", label: "Medium" },
  { key: "large", label: "Large" },
  { key: "xl", label: "XL / Van" },
];

export const PriceSizeTable = ({ rows, dark = false }: PriceSizeTableProps) => {
  if (rows.length === 0) return null;

  const borderClass = dark ? "border-neutral-700" : "border-neutral-200";
  const headerTextClass = dark ? "text-neutral-300" : "text-gray-600";
  const rowTextClass = dark ? "text-neutral-100" : "text-black";
  const labelTextClass = dark ? "text-white" : "text-black";
  const cardBgClass = dark ? "bg-white/5" : "bg-neutral-50";

  return (
    <div>
      {/* Mobile: stacked cards, no horizontal scroll */}
      <div className="flex flex-col gap-3 md:hidden">
        {rows.map((row) => (
          <div key={row.label} className={`rounded-lg border ${borderClass} ${cardBgClass} p-3`}>
            <p className={`font-figtree font-semibold text-sm ${labelTextClass} mb-2`}>
              {row.label}
            </p>
            <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
              {SIZE_LABELS.map(({ key, label }) => (
                <div key={key} className="flex items-baseline justify-between gap-2">
                  <span className={`font-figtree text-xs ${headerTextClass}`}>{label}</span>
                  <span className={`font-figtree text-sm font-medium ${rowTextClass}`}>
                    {row.prices[key]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop/tablet: full table */}
      <div className={`hidden md:block rounded-xl border ${borderClass} overflow-hidden`}>
        <table className="w-full border-collapse text-left">
          <thead>
            <tr className={`border-b ${borderClass}`}>
              <th className={`font-refrigerator uppercase text-sm font-bold ${headerTextClass} px-4 py-3`}>
                Package
              </th>
              {SIZE_LABELS.map(({ key, label }) => (
                <th
                  key={key}
                  className={`font-refrigerator uppercase text-sm font-bold ${headerTextClass} px-4 py-3`}
                >
                  {label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={row.label}
                className={i < rows.length - 1 ? `border-b ${borderClass}` : undefined}
              >
                <td className={`font-figtree font-semibold text-[15px] ${labelTextClass} px-4 py-3`}>
                  {row.label}
                </td>
                {SIZE_LABELS.map(({ key }) => (
                  <td key={key} className={`font-figtree text-[15px] ${rowTextClass} px-4 py-3`}>
                    {row.prices[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
