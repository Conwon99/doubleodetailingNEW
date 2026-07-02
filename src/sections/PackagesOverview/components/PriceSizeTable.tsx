import type { SizePricing } from "../../../data/packages";

type PriceSizeTableRow = { label: string; prices: SizePricing };

type PriceSizeTableProps = {
  rows: PriceSizeTableRow[];
  /** Use light styling for dark backgrounds (e.g. package detail card) */
  dark?: boolean;
};

export const PriceSizeTable = ({ rows, dark = false }: PriceSizeTableProps) => {
  if (rows.length === 0) return null;

  const borderClass = dark ? "border-neutral-700" : "border-neutral-200";
  const headerTextClass = dark ? "text-neutral-300" : "text-gray-600";
  const rowTextClass = dark ? "text-neutral-100" : "text-black";
  const labelTextClass = dark ? "text-white" : "text-black";

  return (
    <div className={`overflow-x-auto rounded-xl border ${borderClass}`}>
      <table className="w-full min-w-[560px] border-collapse text-left">
        <thead>
          <tr className={`border-b ${borderClass}`}>
            <th
              className={`font-refrigerator uppercase text-xs md:text-sm font-bold ${headerTextClass} px-3 py-2.5 md:px-4 md:py-3`}
            >
              Package
            </th>
            {["Small", "Medium", "Large", "XL / Van"].map((size) => (
              <th
                key={size}
                className={`font-refrigerator uppercase text-xs md:text-sm font-bold ${headerTextClass} px-3 py-2.5 md:px-4 md:py-3`}
              >
                {size}
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
              <td
                className={`font-figtree font-semibold text-sm md:text-[15px] ${labelTextClass} px-3 py-2.5 md:px-4 md:py-3`}
              >
                {row.label}
              </td>
              <td className={`font-figtree text-sm md:text-[15px] ${rowTextClass} px-3 py-2.5 md:px-4 md:py-3`}>
                {row.prices.small}
              </td>
              <td className={`font-figtree text-sm md:text-[15px] ${rowTextClass} px-3 py-2.5 md:px-4 md:py-3`}>
                {row.prices.medium}
              </td>
              <td className={`font-figtree text-sm md:text-[15px] ${rowTextClass} px-3 py-2.5 md:px-4 md:py-3`}>
                {row.prices.large}
              </td>
              <td className={`font-figtree text-sm md:text-[15px] ${rowTextClass} px-3 py-2.5 md:px-4 md:py-3`}>
                {row.prices.xl}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
