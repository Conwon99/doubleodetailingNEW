/**
 * Package data for Packages & Pricing page.
 * Sourced from Double O Detailing package cards (SONAX Professional Detailer).
 */

export type PackageSection = {
  heading: string;
  items: string[];
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
};

const PRICE_DISCLAIMER =
  "Price/time vary by vehicle size and condition.";

export const PRICE_DISCLAIMER_TEXT = PRICE_DISCLAIMER;

export const packagesData: PackageData[] = [
  {
    id: "casino-royale",
    category: "machine-polishing",
    title: "SINGLE STAGE PAINT ENHANCEMENT + CERAMIC COATING",
    tagline: "CASINO ROYALE",
    summary:
      "Single-stage paint enhancement to remove light defects, oxidation and light swirl marks (typically 60–80% correction), followed by a durable ceramic coating for long-lasting gloss and protection. Ideal for vehicles needing a noticeable uplift in clarity and depth without a full multi-stage correction. Typical duration from 10–12 hours.",
    sections: [
      {
        heading: "EXTERIOR PREP",
        items: [
          "Wheel arches, alloys, exhaust tips deep cleaned & decontaminated",
          "Safe multi-stage wash using prewash, snow foam & 2-bucket method",
          "Paint chemically decontaminated (iron, sap & tar removal) and clay treated",
          "Dried with plush towels & air blow-dry to reduce water spotting",
        ],
      },
      {
        heading: "PAINT ENHANCEMENT",
        items: [
          "Single-stage machine polish to remove light defects, oxidation & light swirl marks (60–80% correction)",
          "Glass, exhaust tips & chrome polished",
          "Two IPA panel wipe-downs for coating prep",
        ],
      },
      {
        heading: "CERAMIC COATING OPTIONS",
        items: [
          "Paint Enhancement + 2-Year Ceramic Coating – Starts from £325",
          "Paint Enhancement + 3-Year Ceramic Coating – Starts from £400",
          "Wheels off service (Unit only) – Starts from £125",
        ],
      },
      {
        heading: "SERVICE AVAILABILITY",
        items: [
          "Mobile Service: April to September",
          "Unit Service: All Year",
        ],
      },
    ],
    priceOptions: [
      "Paint Enhancement + 2-Year Ceramic Coating – Starts from £325",
      "Paint Enhancement + 3-Year Ceramic Coating – Starts from £400",
      "Wheels off service (Unit only) – Starts from £125",
    ],
    priceDisplay: "Starts from £325 / £400",
    durationDisplay: "Typically 10–12 hours",
    imageUrl: "/packages/casino-royale.png",
  },
  {
    id: "snow-time-to-die",
    category: "machine-polishing",
    title: "LIGHT MACHINE POLISH + CERAMIC WAX",
    tagline: "SNOW TIME TO DIE",
    subtitle: "Light machine polish + ceramic wax",
    summary:
      "Light machine polish and ceramic wax package designed to enhance gloss and depth while adding durable protection. Ideal for vehicles needing a refresh without a full correction. Typical duration from 8 hours.",
    sections: [
      {
        heading: "EXTERIOR PREP",
        items: [
          "Wheel arches, alloys, tyres & exhaust tips deep cleaned and decontaminated",
          "Safe prewash, snow foam & 2-bucket wash using soft mitts and brushes",
        ],
      },
      {
        heading: "DECONTAMINATION",
        items: [
          "Chemical decontamination (iron, tar & sap removal)",
          "Clay bar treatment for bonded contaminants",
          "Rinsed, towel dried & air blown to prevent spotting",
        ],
      },
      {
        heading: "POLISH & PROTECTION",
        items: [
          "Light machine polish to enhance gloss and depth",
          "Glass, exhaust tips & chrome refined",
          "Paintwork prepped with panel wipe for coating adhesion",
          "Glass sealed, trims & tyres dressed",
        ],
      },
    ],
    priceDisplay: "Starts from £240",
    durationDisplay: "Typically 8 hours",
    imageUrl: "/packages/snow-time-to-die.jpeg",
  },
  {
    id: "shaken-not-stirred",
    category: "deep-clean",
    title: "DEEP CLEAN DETAIL",
    tagline: "SHAKEN, NOT STIRRED",
    summary:
      "Our ultimate reset detail. A full deep clean of the interior and exterior, including safe wash, decontamination, SONAX ceramic protection, and thorough interior detail. Brings your car back to a highly refined, fresh condition and sets the foundation for ongoing maintenance. Typical duration from 5 hours.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Wheel arches, alloys, exhaust tips deep cleaned and protected",
          "Safe multi-stage wash using prewash, snow foam, and 2-bucket method",
          "Paintwork chemically decontaminated (iron, sap & tar removal)",
          "SONAX 6-month ceramic sealant for gloss & protection",
          "Dried with plush towels & air blow-dry to avoid water spots",
          "Trim, arches & tyres dressed (Satin or Gloss finish)",
        ],
      },
      {
        heading: "INTERIOR",
        items: [
          "Full deep vacuum including boot",
          "Compressed air dust removal & detailed cleaning of all surfaces",
          "Carpets & mats shampooed and wet-vac extracted",
          "Seats, consoles, vents, belts, and switches thoroughly detailed",
          "Matte UV-protective interior dressing applied",
          "Glass cleaned inside & out",
          "Door shuts and jambs cleaned & protected",
        ],
      },
    ],
    extras: {
      heading: "EXTRAS",
      items: [
        "Engine Detail – £50",
        "Fabric Coating – £70",
        "Upgraded Coating – POA",
        "Ozone Machine Treatment for Odours – POA",
        "Excessive Pet Hair Removal – POA",
      ],
    },
    priceDisplay: "Starts from £170",
    durationDisplay: "Typically 5 hours",
    imageUrl: "/packages/shaken-not-stirred.png",
  },
  {
    id: "spectre",
    category: "maintenance",
    title: "MAINTENANCE DETAIL",
    tagline: "SPECTRE",
    summary:
      "A maintenance detail designed to keep your vehicle looking its best between full details. Includes a thorough exterior safe wash with protection and an interior refresh to maintain a clean, well-presented finish. Typical duration from 3 hours.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Wheel arches, alloys & exhaust tips cleaned and decontaminated",
          "Safe multi-stage wash using prewash, snow foam & 2-bucket method",
          "SONAX 3-month ceramic sealant for gloss & protection",
          "Dried with plush towels & air blow-dry to avoid water spots",
          "Trim, arches & tyres dressed (Matte, Satin, or Gloss finish)",
        ],
      },
      {
        heading: "INTERIOR",
        items: [
          "Full vacuum including upholstery & boot",
          "Compressed air dust removal & detailed surface cleaning",
          "Carpets & mats deep cleaned",
          "Seats, consoles, vents, and switches detailed",
          "Matte UV-protective interior dressing topped up",
          "Glass cleaned inside & out",
          "Door shuts & jambs cleaned and protected",
        ],
      },
    ],
    priceDisplay: "Starts from £90",
    durationDisplay: "Typically 3 hours",
    imageUrl: "/packages/spectre.png",
  },
  {
    id: "q",
    category: "maintenance",
    title: "MAINTENANCE VALET",
    tagline: "Q",
    summary:
      "A lighter upkeep valet covering all standard cleaning inside and out. Ideal for maintaining cleanliness between full details, available only after a recent detail with Double O Detailing. Typical duration from 2 hours.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Wheel arches, alloys & tyres cleaned",
          "Safe prewash & 2-bucket contact wash",
          "Liquid wax applied for added gloss",
          "Dried with soft microfibre towels",
          "Tyres dressed (Satin or Gloss finish)",
        ],
      },
      {
        heading: "INTERIOR",
        items: [
          "Full vacuum (boot included if empty)",
          "Dust removal & wipe-down of all surfaces",
          "Carpets & mats vacuumed, cleaned & dried",
          "Glass cleaned inside & out",
          "Door sills pressure washed & dried",
        ],
      },
    ],
    note:
      'Must have had "Shaken, Not Stirred", "Spectre" or "Casino Royale" within 2–8 weeks to book.',
    priceDisplay: "Starts from £60",
    durationDisplay: "Typically 2 hours",
    imageUrl: "/packages/q.png",
  },
  {
    id: "007",
    category: "maintenance",
    title: "EXTERIOR SAFE WASH",
    tagline: "007",
    summary:
      "An exterior-only safe wash designed to minimise swirls and scratches while protecting your paintwork. Includes thorough cleaning, decontamination, protection, and dressing. Typical duration from 1.5–2 hours.",
    sections: [
      {
        heading: "EXTERIOR",
        items: [
          "Wheel arches, alloys & exhaust tips deep cleaned and decontaminated",
          "Safe prewash, snow foam & 2-bucket wash with soft brushes including intricate areas",
          "SONAX 3-month ceramic sealant for gloss & protection",
          "Dried with plush towels & air blow-dry to avoid spotting",
          "Trim, arches & tyres dressed (Satin or Gloss finish)",
        ],
      },
    ],
    extras: {
      heading: "EXTRAS",
      items: ["Upgraded Coating (POA)", "Engine Bay Maintenance"],
    },
    priceDisplay: "Starts from £50",
    durationDisplay: "Typically 1.5–2 hours",
    imageUrl: "/packages/exterior-wash.png",
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
