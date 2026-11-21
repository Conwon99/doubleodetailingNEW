/**
 * Hand-written content for each town that keeps its own page.
 *
 * Every town page used to share the same templated copy with only the town
 * name swapped in, which is the pattern Google's spam systems treat as doorway
 * pages. Each town now gets its own copy here.
 *
 * `recentJobs` is for real jobs done in that town (car, problem, what was done,
 * result). Leave it empty rather than inventing anything – the section is only
 * shown when there is at least one entry.
 */

export type LocalJob = {
  car: string;
  service: string;
  summary: string;
  image?: string;
};

export type LocationContent = {
  /** Straight-line distance from the Killearn workshop, in miles */
  milesFromWorkshop: number;
  heading: string;
  /** Optional hand-written meta description (otherwise built from the copy) */
  metaDescription?: string;
  paragraphs: string[];
  /** Service slugs most relevant to this town, linked from the page */
  focusServices: string[];
  recentJobs: LocalJob[];
};

export const locationContent: Record<string, LocationContent> = {
  killearn: {
    milesFromWorkshop: 0,
    heading: "Our home village",
    paragraphs: [
      "Killearn is where our workshop is, so it's the easiest place in our area for us to get to. Short notice slots and follow-up visits are simplest to arrange here.",
      "The roads around the village are a mix of the A875, the A81 and narrow country lanes, so cars pick up mud and road film quickly, particularly through autumn and winter. A full detail with a decontamination wash followed by a sealant or ceramic layer makes the next few months of cleaning far quicker.",
    ],
    focusServices: ["deep-cleans", "ceramic-coatings", "maintenance"],
    recentJobs: [],
  },
  balfron: {
    milesFromWorkshop: 2.5,
    heading: "Detailing in Balfron and the Endrick valley",
    paragraphs: [
      "Balfron is a couple of miles up the road from our Killearn workshop, so it's one of the quickest places for us to reach.",
      "A lot of cars here spend time on farm tracks and single-track roads, which means mud in the arches and on the sills and grit in the footwells. Our full detail covers the arches and the interior as well as the paintwork, and an interior fabric coating makes muddy boots and dogs much easier to live with.",
    ],
    focusServices: ["deep-cleans", "interior-fabric-coating", "maintenance"],
    recentJobs: [],
  },
  drymen: {
    milesFromWorkshop: 3.6,
    heading: "Detailing in Drymen",
    paragraphs: [
      "Drymen is just a few miles west of our workshop, on the way towards Balmaha and the east side of Loch Lomond.",
      "Between the A811, the Balmaha road and the trailhead car parks, cars round here see a lot of mud, gravel dust and tree sap. If the paint has gone flat or swirled, a gloss enhancement brings it back, and a ceramic coating keeps sap and dirt from bonding to it afterwards.",
    ],
    focusServices: ["machine-polishing", "ceramic-coatings", "deep-cleans"],
    recentJobs: [],
  },
  milngavie: {
    milesFromWorkshop: 7,
    heading: "Detailing in Milngavie",
    paragraphs: [
      "Milngavie sits between our Killearn workshop and Glasgow, about seven miles away, so it fits easily into our week.",
      "Most cars here are daily drivers doing the school run and the commute into the city, so the usual wear is stone chips on the front, swirls from automatic car washes and well-used interiors. A regular maintenance clean every few weeks keeps on top of it without needing a full detail each time.",
    ],
    focusServices: ["maintenance", "machine-polishing", "deep-cleans"],
    recentJobs: [],
  },
  bearsden: {
    milesFromWorkshop: 8.3,
    heading: "Detailing in Bearsden",
    paragraphs: [
      "Bearsden is about eight miles south of our workshop, on the edge of Glasgow's West End.",
      "With a newer or premium car, the priority is protecting the paint while it's still in good condition. A light correction followed by a ceramic coating suits a new or nearly-new car, and a maintenance plan after that keeps the coating performing.",
    ],
    focusServices: ["ceramic-coatings", "machine-polishing", "maintenance"],
    recentJobs: [],
  },
  balloch: {
    milesFromWorkshop: 8.7,
    heading: "Detailing in Balloch",
    paragraphs: [
      "Balloch sits at the southern tip of Loch Lomond, about nine miles west of our workshop.",
      "Cars here that live outside under trees end up covered in sap and bird droppings, and both will etch into clear coat if they're left. We remove them safely during a full detail, polish out any marks they've left behind and then add a protective layer so the next lot washes off.",
    ],
    focusServices: ["deep-cleans", "machine-polishing", "ceramic-coatings"],
    recentJobs: [],
  },
  dumbarton: {
    milesFromWorkshop: 10.2,
    heading: "Detailing in Dumbarton",
    paragraphs: [
      "Dumbarton is about ten miles from our Killearn workshop, along the A82 corridor.",
      "Cars that do a lot of A82 and Erskine Bridge miles end up with stone chips, tar spots and dull, oxidised headlights. We remove the tar, restore the lenses so the beam pattern isn't scattered, and seal the front end to slow the next round of damage down.",
    ],
    focusServices: ["headlight-restoration", "deep-cleans", "machine-polishing"],
    recentJobs: [],
  },
  helensburgh: {
    milesFromWorkshop: 14,
    heading: "Detailing in Helensburgh",
    paragraphs: [
      "Helensburgh is the furthest of our regular areas, about fourteen miles west of our workshop on the Firth of Clyde.",
      "Being right on the water, cars here are exposed to salt air all year as well as to road salt in winter, and that speeds up corrosion on exposed metal and fading on soft tops and trim. We pay extra attention to the underside of the arches and the brightwork, and for convertibles a soft top clean and re-proof is worth doing every year.",
    ],
    focusServices: ["soft-top-restoration", "ceramic-coatings", "deep-cleans"],
    recentJobs: [],
  },
  alexandria: {
    milesFromWorkshop: 9,
    heading: "Detailing in Alexandria and the Vale of Leven",
    metaDescription: "Car detailing and valeting in Alexandria and the Vale of Leven: full valets from £180 with carpet shampoo, pet hair removal and odour treatment. 9 miles from Killearn.",
    paragraphs: [
      "Alexandria is in the Vale of Leven, between Balloch and Dumbarton, about nine miles west of our Killearn workshop.",
      "If your car doubles as dog transport for walks along the River Leven or up to the loch, the inside probably needs more work than the outside. Our full valet shampoos and extracts the carpets and mats and detail-cleans the seats, with pet hair removal and an ozone odour treatment available as add-ons. An interior fabric coating afterwards makes the next round of muddy paws far easier to clean up.",
    ],
    focusServices: ["deep-cleans", "interior-fabric-coating", "maintenance"],
    recentJobs: [],
  },
  bishopbriggs: {
    milesFromWorkshop: 10.7,
    heading: "Detailing in Bishopbriggs",
    metaDescription: "Mobile car valeting and detailing in Bishopbriggs, Kirkintilloch and Lenzie. Headlight restoration from £80, maintenance valets from £80 and full valets from £180.",
    paragraphs: [
      "Bishopbriggs is on the north edge of Glasgow, about eleven miles south-east of our Killearn workshop, and we also cover nearby Kirkintilloch, Lenzie and Torrance.",
      "Cars here tend to rack up motorway miles on the M80 and through the city, which means traffic film, brake dust baked onto the wheels and headlights that have gone yellow and cloudy. Headlight restoration brings cloudy lenses back to clear, and a mobile maintenance valet every few weeks keeps a daily driver clean without having to go near a brush car wash.",
    ],
    focusServices: ["headlight-restoration", "maintenance", "deep-cleans"],
    recentJobs: [],
  },
  stirling: {
    milesFromWorkshop: 17.5,
    heading: "Detailing for Stirling and Stirlingshire",
    metaDescription: "Car detailing for Stirling and Stirlingshire: paint correction from £470 and ceramic coatings from £320 at our Killearn unit, 30 minutes away on the A811.",
    paragraphs: [
      "Stirling is about half an hour from our Killearn workshop along the A811, so it's an easy drive for customers in the city as well as Bridge of Allan, Dunblane, Kippen and Gargunnock.",
      "Paint correction and three-year ceramic coatings are done at our Killearn unit, because the car needs to stay indoors overnight while the coating cures. That makes it a good fit for Stirling customers who want a proper result rather than a quick wash, especially on cars that do a lot of M9 and A84 miles and come back swirled, tar-spotted and dull. Mobile valets and maintenance visits in Stirling depend on our schedule, so send us your postcode and we'll confirm.",
    ],
    focusServices: ["machine-polishing", "ceramic-coatings", "headlight-restoration"],
    recentJobs: [],
  },
};

export function getLocationContent(slug: string): LocationContent | undefined {
  return locationContent[slug];
}
