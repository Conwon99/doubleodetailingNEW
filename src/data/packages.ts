/**
 * Package data for Packages & Pricing page.
 * Sourced from Double O Detailing package cards (SONAX Professional Detailer).
 */

export type PackageSection = {
  heading: string;
  items: string[];
};

/** Prices for a single package tier across vehicle sizes */
export type SizePricing = {
  small: string;
  medium: string;
  large: string;
  xl: string;
};

/** A named pricing tier (e.g. 2-Year vs 3-Year Ceramic) with its own size pricing */
export type PricingTier = {
  label: string;
  prices: SizePricing;
};

export type PackageData = {
  id: string;
  category: "machine-polishing" | "deep-clean" | "maintenance";
  title: string;
  tagline?: string;
  subtitle?: string;
  /** Short summary for the packages overview page */
  summary: string;
  sections: PackageSection[];
  /** Optional extras section (e.g. Upgraded Coating, Engine Bay) */
  extras?: PackageSection;
  /** Optional pricing options within the card (e.g. coating choices with prices) */
  priceOptions?: string[];
  /** Main price display text (e.g. "Starts from £295 or £350") */
  priceDisplay: string;
  /** Short duration label shown alongside price (e.g. "Typically 10–12 hours") */
  durationDisplay?: string;
  /** Prerequisite note for maintenance packages */
  note?: string;
  /** Optional image for the package (path under /packages/) */
  imageUrl?: string;
  /** Optional ideal-for bullets */
  idealFor?: string[];
  /** Per-vehicle-size pricing for single-tier packages */
  pricingBySize?: SizePricing;
  /** Per-vehicle-size pricing for multi-tier packages (e.g. Casino Royale 2-Year/3-Year) */
  pricingTiers?: PricingTier[];
};

export const PRICE_DISCLAIMER_TEXT =
  "Prices shown are for vehicles in average condition. Heavily contaminated, neglected or oversized vehicles may require additional time and will be quoted accordingly.";

export const vehicleSizeGuide: { size: string; examples: string }[] = [
  { size: "Small", examples: "Fiat 500, MINI, VW Polo, VW Golf" },
  { size: "Medium", examples: "BMW 3 Series, Audi A4, Range Rover Evoque, Audi Q3" },
  { size: "Large", examples: "BMW X5, Audi Q5, Range Rover Sport" },
  { size: "XL", examples: "Vans, 7-seat SUVs, long-wheelbase vehicles" },
];

export const packagesData: PackageData[] = [
  {
    id: "no-time-to-die",
    category: "machine-polishing",
    title: "GLOSS ENHANCEMENT + 12 MONTH PROTECTION",
    tagline: "NO TIME TO DIE",
    summary:
      "A machine polishing package designed to dramatically improve gloss, depth and paint clarity while adding durable long-term protection. Ideal for dull or lightly swirled paintwork needing a visual refresh without full correction.",
    sections: [
      {
        heading: "EXTERIOR PREPARATION",
        items: [
          "Safe wash & decontamination process",
          "Wheels, arches & exhaust tips deep cleaned",
          "Iron, tar & sap removal",
          "Clay treatment",
          "Spot-free drying process",
        ],
      },
      {
        heading: "ENHANCEMENT",
        items: [
          "Single-stage machine polish",
          "Oxidation & haze reduction",
          "Increased gloss, clarity & depth",
          "Paintwork refined for a sharper finish",
        ],
      },
      {
        heading: "PROTECTION",
        items: [
          "12-month ceramic paint protection",
          "Glass sealed",
          "Tyres & trims dressed",
        ],
      },
    ],
    idealFor: [
      "Dull or lightly swirled paintwork",
      "Enthusiast vehicles",
      "Vehicles needing a visual refresh",
      "Owners wanting high gloss without full correction",
    ],
    priceDisplay: "From £275 to £350 (XL: Quote)",
    durationDisplay: "Approx. 7–8 hours",
    imageUrl: "/packages/snow-time-to-die.jpeg",
    pricingBySize: { small: "£275", medium: "£310", large: "£350", xl: "Quote" },
  },
  {
    id: "casino-royale",
    category: "machine-polishing",
    title: "STAGE 1 PAINT CORRECTION + CERAMIC COATING",
    tagline: "CASINO ROYALE",
    summary:
      "Professional paint correction paired with durable ceramic protection for maximum gloss, easier maintenance, and long-lasting results. Available as 2-year ceramic coating or upgraded 3-year unit-only package.",
    sections: [
      {
        heading: "2-YEAR CERAMIC COATING",
        items: [
          "Full safe wash & decontamination",
          "Clay bar treatment",
          "Stage 1 machine correction",
          "Swirl mark reduction",
          "Increased gloss & paint clarity",
          "Ceramic coating applied to paintwork",
          "Glass cleaned & protected",
          "Tyres & trims dressed",
        ],
      },
      {
        heading: "3-YEAR CERAMIC COATING (UNIT ONLY)",
        items: [
          "Everything included in the 2-Year Ceramic Package",
          "Upgraded long-term ceramic coating",
          "Enhanced chemical & environmental resistance",
          "Additional durability & gloss retention",
          "Unit only – optimal coating conditions and curing time",
        ],
      },
      {
        heading: "OPTIONAL ADD-ON",
        items: [
          "Wheels-Off Ceramic Protection (Unit Only) – Starts from £125",
          "Wheels safely removed",
          "Inner barrels deep cleaned & decontaminated",
          "Ceramic coating applied to wheels & calipers",
          "Easier maintenance & brake dust removal",
        ],
      },
    ],
    priceOptions: [
      "2-Year Ceramic Coating – Starts from £375 (Approx. 1 full day)",
      "3-Year Ceramic Coating (Unit Only) – Starts from £450 (Approx. 1.5–2 days, cure time required)",
      "Wheels-Off Ceramic Protection (Unit Only) – Starts from £125",
    ],
    priceDisplay: "From £375 to £625+",
    durationDisplay: "Approx. 1 full day – 2 days (3-year unit)",
    imageUrl: "/packages/casino-royale-cover.jpeg",
    pricingTiers: [
      {
        label: "2-Year Ceramic Coating",
        prices: { small: "£375", medium: "£425", large: "£475", xl: "£550+" },
      },
      {
        label: "3-Year Ceramic Coating (Unit Only)",
        prices: { small: "£450", medium: "£500", large: "£550", xl: "£625+" },
      },
    ],
  },
  {
    id: "shaken-not-stirred",
    category: "deep-clean",
    title: "DEEP CLEAN DETAIL",
    tagline: "SHAKEN, NOT STIRRED",
    summary:
      "A comprehensive interior and exterior transformation designed to restore heavily used or neglected vehicles back to a high standard. Typical duration from 4 hours.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Safe multi-stage wash process",
          "Wheels, arches & exhaust tips deep cleaned",
          "Full chemical decontamination",
          "Tar, iron & sap removal",
          "6-month paint protection applied",
          "Tyres, trims & arches dressed",
          "Spot-free drying process",
        ],
      },
      {
        heading: "INTERIOR",
        items: [
          "Full deep vacuum including boot",
          "Compressed air dust removal",
          "Detailed cleaning of all interior surfaces",
          "Carpets & mats shampooed & extracted",
          "Seats, vents, switches & consoles detailed",
          "UV-protective interior dressing applied",
          "Interior & exterior glass cleaned",
          "Door shuts & jambs deep cleaned",
        ],
      },
    ],
    idealFor: [
      "Neglected vehicles (add-ons recommended)",
      "Seasonal resets",
      "End-of-lease returns",
    ],
    extras: {
      heading: "OPTIONAL ADD-ONS",
      items: [
        "Engine Bay Detail – Starts from £50",
        "Ozone Odour Treatment – POA",
        "Excessive Pet Hair Removal – POA",
      ],
    },
    priceDisplay: "From £170 to £230",
    durationDisplay: "Approx. from 4 hours",
    imageUrl: "/packages/shaken-not-stirred.png",
    pricingBySize: { small: "£170", medium: "£185", large: "£200", xl: "£230" },
  },
  {
    id: "spectre",
    category: "maintenance",
    title: "MAINTENANCE DETAIL",
    tagline: "SPECTRE",
    summary:
      "A more thorough interior and exterior reset designed to keep your vehicle consistently clean, protected, and easy to maintain. Typical duration 2.5–3 hours.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Everything included in the Exterior Safe Wash",
          "Paintwork decontamination where necessary",
          "Additional protection top-up",
        ],
      },
      {
        heading: "INTERIOR",
        items: [
          "Full interior vacuum including boot",
          "Carpets & mats deep cleaned",
          "Interior surfaces detailed",
          "Vents, switches & consoles cleaned",
          "UV-protective interior dressing applied",
          "Interior & exterior glass cleaned",
          "Door shuts & jambs cleaned",
        ],
      },
    ],
    idealFor: [
      "3–8 week maintenance",
      "Family vehicles",
      "Daily drivers",
      "Keeping vehicles at a consistently high standard",
    ],
    note:
      "Vehicle must have received a Deep Clean, Maintenance Detail, or Paint Enhancement package within the last 2–8 weeks.",
    priceDisplay: "From £90 to £120",
    durationDisplay: "Approx. 2.5–3 hours",
    imageUrl: "/packages/spectre.png",
    pricingBySize: { small: "£90", medium: "£95", large: "£100", xl: "£120" },
  },
  {
    id: "007",
    category: "maintenance",
    title: "EXTERIOR SAFE WASH",
    tagline: "007",
    summary:
      "A safe, professional maintenance wash designed to preserve your vehicle's finish using premium products and careful wash methods. Typical duration 1.5–2 hours.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Safe pre-wash & snow foam",
          "Two-bucket contact wash",
          "Wheels, arches & exhaust tips cleaned",
          "Intricate areas cleaned with soft brushes",
          "3-month paint protection applied",
          "Tyres & trims dressed",
          "Plush towel & air-assisted drying process",
        ],
      },
    ],
    idealFor: [
      "Well-maintained vehicles",
      "Weekly, fortnightly or monthly upkeep",
      "Enthusiast-maintained cars",
    ],
    priceDisplay: "From £50 to £75",
    durationDisplay: "Approx. 1.5–2 hours",
    imageUrl: "/packages/exterior-wash.png",
    pricingBySize: { small: "£50", medium: "£55", large: "£60", xl: "£75" },
  },
];

export const categoryLabels: Record<PackageData["category"], string> = {
  "machine-polishing": "Machine Polishing & Coatings",
  "deep-clean": "Deep Clean Detailing",
  maintenance: "Maintenance",
};

export function getPackageByCategoryAndId(
  category: PackageData["category"],
  id: string
): PackageData | undefined {
  return packagesData.find((p) => p.category === category && p.id === id);
}

/** Flattens a package's pricing into labelled rows for a Small/Medium/Large/XL table */
export function getPricingRows(
  pkg: PackageData
): { label: string; prices: SizePricing }[] {
  const name = pkg.tagline ?? pkg.title;
  if (pkg.pricingTiers) {
    return pkg.pricingTiers.map((tier) => ({
      label: `${name} (${tier.label})`,
      prices: tier.prices,
    }));
  }
  if (pkg.pricingBySize) {
    return [{ label: name, prices: pkg.pricingBySize }];
  }
  return [];
}
