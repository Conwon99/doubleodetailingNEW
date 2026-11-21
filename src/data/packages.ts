/**
 * Package data for Packages & Pricing page.
 * Sourced from Double O Detailing 2027 package cards.
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
      "A single-stage gloss enhancement designed to improve paintwork clarity, depth and overall appearance. Ideal for newer or well-maintained vehicles with minor imperfections.\n\nFinished with your choice of 12-month, 2-year or 3-year CARPRO ceramic paintwork protection, with glass and alloy wheel faces ceramic coated as standard.",
    bestSuitedTo: "newer vehicles and well-maintained or lightly marked paintwork with minor imperfections.",
    serviceTime: "Full day, at our unit. Three-year coatings need suitable curing conditions at the unit.",
    sections: [
      {
        heading: "EXTERIOR PREPARATION",
        items: [
          "Thorough exterior safe wash & decontamination",
          "Wheels, arches & exhaust tips deep cleaned",
          "Iron, tar & sap removal",
          "Clay bar treatment where necessary",
          "Spot-free drying process",
        ],
      },
      {
        heading: "ENHANCEMENT",
        items: [
          "Single-stage light machine polish",
          "Reduction of minor swirling & surface haze",
          "Improved gloss, clarity & depth",
          "Paintwork refined for a sharper finish",
        ],
      },
      {
        heading: "PROTECTION",
        items: [
          "Choice of 12-month, 2-year or 3-year CARPRO ceramic paintwork protection",
          "Exterior glass prepared & ceramic coated",
          "Alloy wheel faces prepared & ceramic coated",
          "Tyres & trims dressed",
        ],
      },
      {
        heading: "ADDITIONAL SURFACE PROTECTION – £100",
        items: [
          "Dedicated CARPRO glass coating for enhanced water repellency & durability",
          "CARPRO DLUX coating on alloy wheel faces for increased resistance to brake dust & road grime",
          "Easier ongoing cleaning & maintenance",
        ],
      },
    ],
    idealFor: [
      "Newer vehicles",
      "Well-maintained or lightly marked paintwork",
      "Vehicles with minor paintwork imperfections",
      "Owners seeking improved gloss and ceramic protection without intensive correction",
    ],
    note:
      "Prices assume vehicles in average condition. Neglected, heavily contaminated or oversized vehicles may require a separate quote. Three-year ceramic coatings are unit-only and need suitable curing conditions. Durability depends on usage and maintenance.",
    durationDisplay: "Full Day Service | Unit Appointment",
    imageUrl: "/packages/gloss-enhancement.jpeg",
    pricingTiers: [
      {
        label: "12 Month – CARPRO Aqua",
        prices: { small: "£320", medium: "£360", large: "£400", xl: "Quote" },
        duration: "Full Day Service",
      },
      {
        label: "2 Year – CARPRO UK 3.0",
        prices: { small: "£360", medium: "£400", large: "£440", xl: "Quote" },
        duration: "Full Day Service",
      },
      {
        label: "3 Year – CARPRO UK 4.0",
        prices: { small: "£420", medium: "£460", large: "£500", xl: "Quote" },
        duration: "Full Day Service + Curing at Unit",
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
      "A more intensive single-stage correction designed to improve paintwork affected by visible swirls, wash damage and lighter defects.\n\nFollowing inspection and machine polishing, the vehicle is finished with your choice of 12-month, 2-year or 3-year CARPRO ceramic paintwork protection, with glass and alloy wheel faces ceramic coated as standard.",
    bestSuitedTo: "vehicles with noticeable swirls, wash damage, light oxidation or surface defects.",
    serviceTime: "Two to three days, at our unit.",
    sections: [
      {
        heading: "EXTERIOR PREPARATION",
        items: [
          "Thorough exterior safe wash & decontamination",
          "Wheels, arches & exhaust tips deep cleaned",
          "Iron, tar & sap removal",
          "Clay bar treatment where necessary",
          "Paintwork inspection & polishing test section",
        ],
      },
      {
        heading: "CORRECTION",
        items: [
          "Single-stage machine paint correction",
          "Reduction of visible swirling, oxidation & wash marring",
          "Reduction of lighter paintwork defects",
          "Improved paint clarity, gloss & depth",
          "Paintwork prepared for ceramic protection",
        ],
      },
      {
        heading: "PROTECTION",
        items: [
          "Choice of 12-month, 2-year or 3-year CARPRO ceramic paintwork protection",
          "Exterior glass prepared & ceramic coated",
          "Alloy wheel faces prepared & ceramic coated",
          "Tyres & trims dressed",
        ],
      },
      {
        heading: "ADDITIONAL SURFACE PROTECTION – £100",
        items: [
          "Dedicated CARPRO glass coating for enhanced water repellency & durability",
          "CARPRO DLUX coating on alloy wheel faces for increased resistance to brake dust & road grime",
          "Easier ongoing cleaning & maintenance",
        ],
      },
      {
        heading: "SPECIALIST ADD-ON: WHEELS-OFF CERAMIC PROTECTION – FROM £150 (UNIT ONLY)",
        items: [
          "Wheels safely removed",
          "Inner barrels deep cleaned & decontaminated",
          "Dedicated ceramic coating applied to wheel faces, barrels & suitable caliper surfaces",
          "Easier cleaning & brake dust removal",
          "Replaces standard alloy-face protection; quoted according to wheel condition & access",
        ],
      },
    ],
    idealFor: [
      "Vehicles with noticeable swirls and wash damage",
      "Paintwork affected by light oxidation or surface defects",
      "Owners seeking a more significant improvement in paint condition",
      "Vehicles being prepared for longer-term ceramic protection",
    ],
    note:
      "Prices assume vehicles in average condition; neglected, heavily contaminated and oversized vehicles may require a separate quote. Correction results depend on defects, paint thickness and condition. Three-year coatings require suitable unit curing. Durability depends on usage and maintenance.",
    durationDisplay: "Two–Three Days | Unit Appointment",
    imageUrl: "/packages/single-stage-paint-correction.jpeg",
    pricingTiers: [
      {
        label: "12 Month – CARPRO Lite 2.0",
        prices: { small: "£470", medium: "£510", large: "£550", xl: "Quote" },
        duration: "Two–Three Days",
      },
      {
        label: "2 Year – CARPRO UK 3.0",
        prices: { small: "£520", medium: "£560", large: "£600", xl: "Quote" },
        duration: "Two–Three Days",
      },
      {
        label: "3 Year – CARPRO UK 4.0",
        prices: { small: "£570", medium: "£620", large: "£670", xl: "Quote" },
        duration: "Two–Three Days + Curing at Unit",
        unitOnly: true,
      },
    ],
  },
  {
    id: "shaken-not-stirred",
    category: "deep-clean",
    title: "FULL DETAILED VALET",
    tagline: "SHAKEN, NOT STIRRED",
    summary:
      "A comprehensive interior and exterior reset for vehicles requiring more than routine maintenance. Thorough cleaning, decontamination and a light hand-applied all-in-one polish help prepare the vehicle for easier ongoing upkeep.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Multi-stage exterior safe wash",
          "Wheels, arches & exhaust tips deep cleaned",
          "Chemical decontamination including iron, tar & sap removal as required",
          "Light clay treatment where necessary",
          "Light hand application of paint protection (3 to 6 months paint, glass & alloy protection)",
          "Tyres, exterior trims & arches finished",
          "Spot-free drying",
        ],
      },
      {
        heading: "INTERIOR",
        items: [
          "Deep vacuum including boot",
          "Compressed-air dust removal where appropriate",
          "Thorough cleaning of interior surfaces, vents, switches & consoles",
          "Carpets & mats shampooed & extracted as required",
          "Seats & upholstery detailed",
          "UV-protective interior dressing where appropriate",
          "Interior & exterior glass cleaned",
          "Door shuts & jambs deep cleaned",
        ],
      },
    ],
    idealFor: [
      "Vehicles needing a comprehensive interior and exterior reset",
      "Owners preparing to join a regular maintenance schedule",
      "Cars with contamination and accumulated everyday dirt",
    ],
    extras: {
      heading: "OPTIONAL ADD-ONS",
      items: [
        "Engine Bay Detail – Starts from £50",
        "Ozone Odour Treatment – POA",
        "Excessive Pet Hair Removal – POA",
      ],
    },
    note:
      "Approximately 4–6 hours for vehicles in average condition. This is a light hand-applied gloss and protection treatment, not a machine paint correction. Excessively dirty vehicles or extensive extraction requirements may need an individual quotation.",
    durationDisplay: "Half Day or Full Day | Mobile or Unit",
    imageUrl: "/packages/shaken-not-stirred.webp",
    pricingBySize: { small: "£180", medium: "£200", large: "£220", xl: "£250" },
  },
  {
    id: "spectre",
    category: "maintenance",
    title: "MAINTENANCE DETAIL",
    tagline: "SPECTRE",
    summary:
      "A regular interior and exterior detail designed to maintain a high standard of cleanliness and protection after an initial preparation service. Typical duration 2.5–3 hours.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Everything included in our 007 Exterior Safe Wash",
          "Paintwork decontamination where necessary",
          "Additional protection top-up as required",
        ],
      },
      {
        heading: "INTERIOR",
        items: [
          "Complete interior vacuum, including boot",
          "Carpets & floor mats cleaned",
          "Dashboard, trims & interior surfaces detailed",
          "Vents, switches & centre console cleaned",
          "UV-protective interior dressing applied where appropriate",
          "Interior & exterior glass cleaned",
          "Door shuts & jambs cleaned & protected",
        ],
      },
    ],
    idealFor: [
      "Vehicles already brought up to an appropriate standard",
      "Customers seeking regular 6–8 week upkeep",
      "Maintaining ceramic coatings and previously protected paintwork",
    ],
    note:
      "Maintenance pricing assumes the vehicle is already in good condition. Deep upholstery extraction, heavy contamination and restoration work are not included as routine maintenance.",
    durationDisplay: "Approx. 2.5–3 Hours | Mobile",
    imageUrl: "/packages/spectre.webp",
    pricingBySize: { small: "£80", medium: "£90", large: "£100", xl: "£120" },
  },
  {
    id: "007",
    category: "maintenance",
    title: "EXTERIOR SAFE WASH",
    tagline: "007",
    summary:
      "A careful exterior maintenance wash for vehicles already prepared and maintained to a high standard. Designed to preserve the finish and existing protection between more comprehensive details. Typical duration 1.5–2 hours.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Safe pre-wash & snow foam",
          "Two-bucket contact wash",
          "Wheels, arches & exhaust tips cleaned",
          "Intricate areas cleaned using soft brushes",
          "Paint protection topped up where required (up to three months of protection)",
          "Tyres & exterior trims dressed",
          "Plush towel & air-assisted drying",
        ],
      },
    ],
    idealFor: [
      "Existing maintenance clients",
      "Well-maintained and previously prepared vehicles",
      "Regular exterior upkeep between more intensive services",
    ],
    note:
      "Available only for vehicles already meeting our maintenance standard. Heavier contamination or neglected finishes require an initial detail or separate quotation.",
    durationDisplay: "Approx. 1.5–2 Hours | Mobile",
    imageUrl: "/packages/exterior-wash.webp",
    pricingBySize: { small: "£50", medium: "£55", large: "£65", xl: "£75" },
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
