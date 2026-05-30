/**
 * Location data for location landing pages and area-served schema.
 */

export type Location = {
  slug: string;
  name: string;
  /** For schema and meta */
  addressLocality?: string;
  /** Optional lat/lng for LocalBusiness geo */
  geo?: { latitude: string; longitude: string };
  /** Nearby areas for meta description and content */
  neighborhoods?: string[];
  /** Coverage region label */
  region?: string;
};

export const WORKSHOP_BASE = "Killearn";

export const COVERAGE_HEADLINE =
  "Workshop based in Killearn, covering Loch Lomond, Glasgow West End & surrounding areas.";

export const COVERAGE_FAQ_ANSWER =
  "We're workshop-based in Killearn and provide mobile detailing across Loch Lomond, Glasgow West End, and surrounding premium areas. Contact us with your location and we'll confirm we can reach you.";

export const locationRegions: { name: string; slugs: string[] }[] = [
  {
    name: "Loch Lomond & West Dunbartonshire",
    slugs: [
      "killearn",
      "drymen",
      "balmaha",
      "gartocharn",
      "balloch",
      "alexandria",
      "dumbarton",
      "helensburgh",
      "rhu",
      "cardross",
    ],
  },
  {
    name: "Endrick & Countryside Villages",
    slugs: ["balfron", "buchlyvie", "fintry", "strathblane", "aberfoyle"],
  },
  {
    name: "Glasgow North & West",
    slugs: ["bearsden", "milngavie", "jordanhill", "hyndland"],
  },
];

export const locations: Location[] = [
  {
    slug: "killearn",
    name: "Killearn",
    addressLocality: "Stirlingshire",
    region: "Loch Lomond & West Dunbartonshire",
    geo: { latitude: "56.0392", longitude: "-4.3686" },
    neighborhoods: ["Balfron", "Drymen", "Strathblane", "Bearsden"],
  },
  {
    slug: "drymen",
    name: "Drymen",
    addressLocality: "Stirlingshire",
    region: "Loch Lomond & West Dunbartonshire",
    geo: { latitude: "56.0650", longitude: "-4.4500" },
    neighborhoods: ["Balfron", "Killearn", "Balloch", "Balmaha"],
  },
  {
    slug: "balmaha",
    name: "Balmaha",
    addressLocality: "Stirlingshire",
    region: "Loch Lomond & West Dunbartonshire",
    geo: { latitude: "56.0767", longitude: "-4.5400" },
    neighborhoods: ["Drymen", "Balloch", "Gartocharn"],
  },
  {
    slug: "gartocharn",
    name: "Gartocharn",
    addressLocality: "West Dunbartonshire",
    region: "Loch Lomond & West Dunbartonshire",
    geo: { latitude: "56.0417", longitude: "-4.5333" },
    neighborhoods: ["Balloch", "Alexandria", "Balmaha"],
  },
  {
    slug: "balloch",
    name: "Balloch",
    addressLocality: "West Dunbartonshire",
    region: "Loch Lomond & West Dunbartonshire",
    geo: { latitude: "56.0025", longitude: "-4.5833" },
    neighborhoods: ["Alexandria", "Dumbarton", "Drymen", "Helensburgh"],
  },
  {
    slug: "alexandria",
    name: "Alexandria",
    addressLocality: "West Dunbartonshire",
    region: "Loch Lomond & West Dunbartonshire",
    geo: { latitude: "55.9850", longitude: "-4.5800" },
    neighborhoods: ["Balloch", "Dumbarton", "Gartocharn"],
  },
  {
    slug: "dumbarton",
    name: "Dumbarton",
    addressLocality: "West Dunbartonshire",
    region: "Loch Lomond & West Dunbartonshire",
    geo: { latitude: "55.9443", longitude: "-4.5705" },
    neighborhoods: ["Balloch", "Helensburgh", "Alexandria", "Cardross"],
  },
  {
    slug: "helensburgh",
    name: "Helensburgh",
    addressLocality: "Argyll and Bute",
    region: "Loch Lomond & West Dunbartonshire",
    geo: { latitude: "56.0062", longitude: "-4.7265" },
    neighborhoods: ["Dumbarton", "Balloch", "Rhu", "Cardross"],
  },
  {
    slug: "rhu",
    name: "Rhu",
    addressLocality: "Argyll and Bute",
    region: "Loch Lomond & West Dunbartonshire",
    geo: { latitude: "56.0167", longitude: "-4.7667" },
    neighborhoods: ["Helensburgh", "Cardross"],
  },
  {
    slug: "cardross",
    name: "Cardross",
    addressLocality: "Argyll and Bute",
    region: "Loch Lomond & West Dunbartonshire",
    geo: { latitude: "55.9600", longitude: "-4.6500" },
    neighborhoods: ["Helensburgh", "Dumbarton", "Rhu"],
  },
  {
    slug: "balfron",
    name: "Balfron",
    addressLocality: "Stirlingshire",
    region: "Endrick & Countryside Villages",
    geo: { latitude: "56.0711", longitude: "-4.3356" },
    neighborhoods: ["Killearn", "Drymen", "Fintry", "Buchlyvie"],
  },
  {
    slug: "buchlyvie",
    name: "Buchlyvie",
    addressLocality: "Stirlingshire",
    region: "Endrick & Countryside Villages",
    geo: { latitude: "56.1167", longitude: "-4.3000" },
    neighborhoods: ["Balfron", "Killearn", "Fintry"],
  },
  {
    slug: "fintry",
    name: "Fintry",
    addressLocality: "Stirlingshire",
    region: "Endrick & Countryside Villages",
    geo: { latitude: "56.0833", longitude: "-4.2167" },
    neighborhoods: ["Balfron", "Strathblane", "Killearn"],
  },
  {
    slug: "strathblane",
    name: "Strathblane",
    addressLocality: "Stirlingshire",
    region: "Endrick & Countryside Villages",
    geo: { latitude: "56.0333", longitude: "-4.3000" },
    neighborhoods: ["Killearn", "Milngavie", "Bearsden"],
  },
  {
    slug: "aberfoyle",
    name: "Aberfoyle",
    addressLocality: "Stirlingshire",
    region: "Endrick & Countryside Villages",
    geo: { latitude: "56.1783", longitude: "-4.3867" },
    neighborhoods: ["Drymen", "Balfron", "Killearn"],
  },
  {
    slug: "bearsden",
    name: "Bearsden",
    addressLocality: "East Dunbartonshire",
    region: "Glasgow North & West",
    geo: { latitude: "55.9206", longitude: "-4.3353" },
    neighborhoods: ["Milngavie", "Jordanhill", "Strathblane"],
  },
  {
    slug: "milngavie",
    name: "Milngavie",
    addressLocality: "East Dunbartonshire",
    region: "Glasgow North & West",
    geo: { latitude: "55.9422", longitude: "-4.3175" },
    neighborhoods: ["Bearsden", "Jordanhill", "Strathblane"],
  },
  {
    slug: "jordanhill",
    name: "Jordanhill",
    addressLocality: "Glasgow",
    region: "Glasgow North & West",
    geo: { latitude: "55.8828", longitude: "-4.3342" },
    neighborhoods: ["Hyndland", "Bearsden", "Milngavie"],
  },
  {
    slug: "hyndland",
    name: "Hyndland",
    addressLocality: "Glasgow",
    region: "Glasgow North & West",
    geo: { latitude: "55.8772", longitude: "-4.3086" },
    neighborhoods: ["Jordanhill", "Bearsden", "Milngavie"],
  },
];

/** All location slugs for getStaticPaths and sitemap */
export const locationSlugs = locations.map((loc) => loc.slug);

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((loc) => loc.slug === slug);
}
