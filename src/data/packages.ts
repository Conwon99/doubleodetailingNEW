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
  /** Approx. labour time for this tier (e.g. "Approx. 9–10 Hours") */
  duration?: string;
  /** Carried out at the private unit only (overnight curing) */
  unitOnly?: boolean;
};

export type PackageData = {
  id: string;
  category: "machine-polishing" | "deep-clean" | "maintenance";
  title: string;
  tagline?: string;
  subtitle?: string;
  /** Short summary for the packages overview page (paragraphs separated by a blank line) */
  summary: string;
  /** "Best suited to" line shown on the packages overview card */
  bestSuitedTo?: string;
  /** "Service time" line shown on the packages overview card */
  serviceTime?: string;
  sections: PackageSection[];
  /** Optional extras section (e.g. Upgraded Coating, Engine Bay) */
  extras?: PackageSection;
  /** Optional pricing options within the card (e.g. coating choices with prices) */
  priceOptions?: string[];
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

export const PRICING_NOTE_TEXT =
  "Prices shown apply to vehicles in average condition. Final recommendations are based on the condition of the paintwork, the level of improvement required and the vehicle's size. Heavily contaminated, neglected or unusually large vehicles may require additional time and will be quoted accordingly.";

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
    title: "GLOSS ENHANCEMENT",
    tagline: "NO TIME TO DIE",
    summary:
      "A light machine-polishing service designed to noticeably improve gloss, depth and paint clarity while reducing very light swirling and surface haze. Ideal for newer, well-maintained or lightly marked paintwork that would benefit from a visual refresh without requiring heavier correction.\n\nIncludes full paint preparation and 12-month ceramic protection as standard, with 2-year and 3-year ceramic coating upgrades available.",
    bestSuitedTo: "newer vehicles and paintwork with only minor imperfections.",
    serviceTime: "Full day. Three-year coatings require overnight curing at our unit.",
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
          "Light machine polish",
          "Very light swirling & surface haze reduced",
          "Increased gloss, clarity & depth",
          "Paintwork refined for a sharper finish",
        ],
      },
      {
        heading: "PROTECTION",
        items: [
          "12-month ceramic protection as standard",
          "2-year or 3-year ceramic coating upgrades available (3-year at our unit only)",
          "Glass sealed",
          "Tyres & trims dressed",
        ],
      },
    ],
    idealFor: [
      "Newer vehicles",
      "Well-maintained or lightly marked paintwork",
      "Paintwork with only minor imperfections",
      "Owners wanting a visual refresh without heavier correction",
    ],
    durationDisplay: "Full Day Service",
    imageUrl: "/packages/gloss-enhancement.jpeg",
    pricingTiers: [
      {
        label: "12 Month",
        prices: { small: "£295", medium: "£335", large: "£375", xl: "Quote" },
        duration: "Full Day Service",
      },
      {
        label: "2 Year Ceramic",
        prices: { small: "£370", medium: "£410", large: "£450", xl: "Quote" },
        duration: "Full Day Service",
      },
      {
        label: "3 Year Ceramic",
        prices: { small: "£445", medium: "£485", large: "£525", xl: "Quote" },
        duration: "Full Day Service + Overnight Curing",
        unitOnly: true,
      },
    ],
  },
  {
    id: "casino-royale",
    category: "machine-polishing",
    title: "SINGLE-STAGE PAINT CORRECTION",
    tagline: "CASINO ROYALE",
    summary:
      "A more intensive single-stage machine-polishing service designed to achieve a significant improvement in visible swirls, oxidation, wash marring and lighter paint defects. The polishing combination is selected following a paint inspection and test section to achieve the strongest safe result while maintaining a high-quality finish.\n\nIncludes full paint preparation and 12-month ceramic protection as standard, with 2-year and 3-year ceramic coating upgrades available.",
    bestSuitedTo: "visibly swirled, dull or weathered paintwork requiring greater defect reduction.",
    serviceTime:
      "Full day, subject to vehicle size and condition. Three-year coatings require overnight curing at our unit.",
    sections: [
      {
        heading: "EXTERIOR PREPARATION",
        items: [
          "Full safe wash & decontamination",
          "Clay bar treatment",
          "Paint inspection & test section",
        ],
      },
      {
        heading: "CORRECTION",
        items: [
          "Single-stage machine correction",
          "Visible swirls, oxidation & wash marring reduced",
          "Lighter paint defects reduced",
          "Increased gloss & paint clarity",
        ],
      },
      {
        heading: "PROTECTION",
        items: [
          "12-month ceramic protection as standard",
          "2-year ceramic coating upgrade available",
          "3-year ceramic coating upgrade available (unit only – optimal coating conditions and overnight curing)",
          "Glass cleaned & protected",
          "Tyres & trims dressed",
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
      "12-Month Protection – Starts from £350 (Full Day Service)",
      "2-Year Ceramic Coating – Starts from £425 (Full Day Service)",
      "3-Year Ceramic Coating (Unit Only) – Starts from £500 (Full Day Service + Overnight Curing)",
      "Wheels-Off Ceramic Protection (Unit Only) – Starts from £125",
    ],
    durationDisplay: "Full Day Service",
    imageUrl: "/packages/single-stage-paint-correction.jpeg",
    pricingTiers: [
      {
        label: "12 Month",
        prices: { small: "£350", medium: "£400", large: "£450", xl: "£525+" },
        duration: "Full Day Service",
      },
      {
        label: "2 Year Ceramic",
        prices: { small: "£425", medium: "£475", large: "£525", xl: "£600+" },
        duration: "Full Day Service",
      },
      {
        label: "3 Year Ceramic",
        prices: { small: "£500", medium: "£550", large: "£600", xl: "£675+" },
        duration: "Full Day Service + Overnight Curing",
        unitOnly: true,
      },
    ],
  },
  {
    id: "shaken-not-stirred",
    category: "deep-clean",
    title: "FULL DETAIL",
    tagline: "SHAKEN, NOT STIRRED",
    summary:
      "A comprehensive interior and exterior detail designed to safely restore cleanliness, remove contamination, add 6 months paint protection, and prepare your vehicle for ongoing maintenance or protection.",
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
    durationDisplay: "Approx. 4–5 Hours",
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
    durationDisplay: "Approx. 2.5–3 Hours",
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
    durationDisplay: "Approx. 1.5–2 Hours",
    imageUrl: "/packages/exterior-wash.png",
    pricingBySize: { small: "£50", medium: "£55", large: "£60", xl: "£75" },
  },
];

export const categoryLabels: Record<PackageData["category"], string> = {
  "machine-polishing": "Paint Correction and Gloss Enhancements",
  "deep-clean": "Premium Detailing",
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
      label: `${name} (${tier.label}${tier.unitOnly ? " – Unit Only" : ""})`,
      prices: tier.prices,
    }));
  }
  if (pkg.pricingBySize) {
    return [{ label: name, prices: pkg.pricingBySize }];
  }
  return [];
}
