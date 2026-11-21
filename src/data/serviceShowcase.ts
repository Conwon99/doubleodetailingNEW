/**
 * Before & afters, recent jobs, testimonials and FAQs for each service page.
 * Job descriptions, reviews and FAQ answers are Gordie's own wording (Nov 2026).
 * Images live in /static/jobs/.
 */

export type ShowcaseImage = { src: string; alt: string; width: number; height: number };

export type Job = {
  title: string;
  services: string;
  intro: string;
  /** Optional sub-heading before a bullet group (e.g. "Ongoing mobile maintenance:") */
  bulletGroups: { heading?: string; items: string[] }[];
  outcome: string;
  images: ShowcaseImage[];
};

export type Testimonial = {
  quote: string;
  name: string;
  service: string;
  vehicle: string;
};

export type Faq = { question: string; answer: string };

export type ServiceShowcase = {
  /** H2 for the jobs block, e.g. "Recent paint correction jobs" */
  label: string;
  beforeAfter: ShowcaseImage[];
  jobs: Job[];
  testimonials: Testimonial[];
  faqs: Faq[];
};

const img = (name: string, alt: string, width: number, height: number): ShowcaseImage => ({
  src: `/jobs/${name}.webp`,
  alt,
  width,
  height,
});

const COATING_BENEFIT_UV = "Added protection against UV exposure and environmental contamination.";

export const paintCorrection: ServiceShowcase = {
  label: "Paint correction",
  beforeAfter: [
    img("paint-correction-before-after", "Paintwork before and after single-stage paint correction under inspection lights", 1080, 926),
  ],
  jobs: [
    {
      title: "Volkswagen Passat R36",
      services: "Single-stage paint correction + 3-year ceramic coating",
      intro:
        "A well-maintained example of the Volkswagen Passat R36, brought in to refine minor swirling and preserve its paintwork for the years ahead.",
      bulletGroups: [
        {
          items: [
            "Single-stage machine polish to reduce light swirls and improve paintwork clarity.",
            "CARPRO CQuartz 3.0 ceramic coating applied for 3-year protection.",
            COATING_BENEFIT_UV,
            "Easier, safer routine washing and improved gloss retention between washes.",
          ],
        },
      ],
      outcome:
        "A focus on preserving the finish of a well-kept older vehicle, rather than chasing unnecessary levels of correction.",
      images: [
        img("vw-passat-r36-paint-correction-1", "Blue Volkswagen Passat R36 in the Double O Detailing unit after paint correction", 1400, 1384),
        img("vw-passat-r36-paint-correction-2", "Side of the Volkswagen Passat R36 showing corrected, glossy blue paintwork", 939, 1400),
      ],
    },
    {
      title: "Vauxhall Corsa (75-plate)",
      services: "Single-stage paint correction + 3-year ceramic coating",
      intro:
        "This 75-plate Vauxhall Corsa arrived with paintwork imperfections from dealership preparation, requiring refinement before long-term ceramic protection could be applied.",
      bulletGroups: [
        {
          items: [
            "Single-stage machine correction to reduce visible paintwork imperfections.",
            "Paintwork prepared and refined ahead of coating application.",
            "CARPRO CQuartz 3.0 ceramic coating applied for 3-year protection.",
            "Improved resistance to UV exposure and environmental contamination.",
            "Easier ongoing washing and improved gloss retention.",
          ],
        },
      ],
      outcome:
        "An example of why even newer vehicles can benefit from professional paintwork preparation before ceramic coating.",
      images: [
        img("vauxhall-corsa-paint-correction-1", "Black Vauxhall Corsa after single-stage paint correction and ceramic coating", 1400, 862),
        img("vauxhall-corsa-paint-correction-inspection", "Inspection light on the Corsa's paintwork showing dealership swirl marks before correction", 1197, 1301),
        img("vauxhall-corsa-paint-correction-2", "Corsa paintwork under detailing lights after correction", 1340, 1400),
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "My Audi RS3 went into Gordie for his ‘Casino Royale’ package. Whole experience was brilliant, through Gordie’s communication and total pride and professionalism in what he does. Car came out better than ever expected, the single stage polish along with a ceramic coating has really made the car feel showroom fresh, and now has a level of protection. Couldn’t recommend Gordie’s services enough.",
      name: "Jamie A.",
      service: "Paint correction and coating",
      vehicle: "Audi RS3",
    },
    {
      quote:
        "Have now had a few cars and a boat detailed by Gordie and his service is first class. I will not use anywhere else going forward and cannot recommend enough.",
      name: "Kevin M.",
      service: "Paint correction and coatings",
      vehicle: "Various cars",
    },
  ],
  faqs: [
    {
      question: "What is paint correction?",
      answer:
        "Paint correction uses machine polishing to reduce swirl marks, light scratches, oxidation and other imperfections, improving the paintwork's clarity, gloss and overall appearance.",
    },
    {
      question: "Will paint correction remove every scratch?",
      answer:
        "Not always. Results depend on the depth of the defects and the condition of the paintwork. Our Single Stage Correction aims for a significant improvement while preserving the clear coat.",
    },
    {
      question: "What's the difference between Paint Correction and Gloss Enhancement?",
      answer:
        "Gloss Enhancement focuses on improving gloss and reducing very light imperfections. Paint Correction uses a more intensive polishing process to address more noticeable defects and swirling.",
    },
    {
      question: "How long will the results last?",
      answer:
        "The polishing improvements are permanent unless new defects are introduced. Our packages include ceramic protection, while correct washing and regular maintenance help preserve the finish.",
    },
  ],
};

export const glossEnhancement: ServiceShowcase = {
  label: "Gloss enhancement",
  beforeAfter: [
    img("gloss-enhancement-before-after", "Door handle area before and after gloss enhancement, showing removed haze and swirls", 1080, 1080),
  ],
  jobs: [
    {
      title: "MINI Cooper S",
      services: "Gloss enhancement + 3-year ceramic coating",
      intro:
        "A brand-new MINI Cooper S brought in for paintwork refinement and long-term protection, ensuring the finish was properly prepared from the outset.",
      bulletGroups: [
        {
          items: [
            "Single-stage machine enhancement to refine very fine paintwork imperfections.",
            "Improved gloss, clarity and depth of finish.",
            "Paintwork prepared to promote proper ceramic coating bonding.",
            "CARPRO CQuartz 3.0 ceramic coating applied for 3-year protection.",
            "Added UV and environmental protection, with easier routine washing and improved gloss retention.",
          ],
        },
      ],
      outcome:
        "A great example of how even brand-new vehicles can benefit from professional paintwork preparation and protection.",
      images: [
        img("mini-cooper-s-gloss-enhancement-1", "Red MINI Cooper S in the Double O Detailing unit after gloss enhancement", 1400, 1287),
        img("mini-cooper-s-gloss-enhancement-2", "Side of the red MINI Cooper S showing deep gloss after enhancement and ceramic coating", 1050, 1400),
      ],
    },
    {
      title: "Mercedes-Benz GLC",
      services: "Gloss enhancement + 3-year ceramic coating",
      intro:
        "Recently purchased by its new owner, this Mercedes-Benz GLC received a gloss enhancement to reduce light swirling and prepare the paintwork for long-term ceramic protection.",
      bulletGroups: [
        {
          items: [
            "Single-stage machine enhancement to reduce minor swirl marks and surface haze.",
            "Improved paintwork gloss, clarity and overall appearance.",
            "Thorough preparation ahead of ceramic coating application.",
            "CARPRO CQuartz 3.0 ceramic coating applied for 3-year protection.",
            "Added UV and environmental protection, helping maintain a glossy finish with easier ongoing washing.",
          ],
        },
      ],
      outcome:
        "An ideal treatment for owners looking to improve their vehicle's appearance and make future maintenance more straightforward.",
      images: [
        img("mercedes-glc-gloss-enhancement-1", "White Mercedes-Benz GLC in the detailing unit after gloss enhancement", 1400, 1292),
        img("mercedes-glc-gloss-enhancement-2", "Front of the white Mercedes-Benz GLC after gloss enhancement and ceramic coating", 1170, 1330),
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Gordie made a brand new car look even better. I invested in a ceramic coating and not only did the finish look superb I now know the car will look great every time it gets cleaned.",
      name: "Paul M.",
      service: "Enhancement and ceramic coating",
      vehicle: "MINI Cooper S",
    },
    {
      quote: "Great work and what a hard worker. My car looks amazing, can’t wait for it to rain to see the effects",
      name: "David A.",
      service: "Enhancement and ceramic coating",
      vehicle: "BYD Sealion 7",
    },
  ],
  faqs: [
    {
      question: "Is Gloss Enhancement suitable for a brand-new car?",
      answer:
        "Absolutely. Even new vehicles can have minor imperfections from transportation or dealership preparation. A gloss enhancement helps refine the finish before ceramic protection is applied.",
    },
    {
      question: "Will Gloss Enhancement remove swirl marks?",
      answer:
        "It can reduce very light swirling and surface haze, but it isn't designed for heavier defects. Vehicles requiring more extensive improvement may benefit from Paint Correction.",
    },
    {
      question: "Does Gloss Enhancement include ceramic protection?",
      answer:
        "Yes. All our Gloss Enhancement packages include CARPRO ceramic paintwork protection, with 12-month, 2-year and 3-year options available.",
    },
    {
      question: "How long does Gloss Enhancement take?",
      answer:
        "Typically one to two days, depending on the vehicle and chosen coating. This includes preparation, polishing, coating application and appropriate curing time.",
    },
  ],
};

export const ceramicCoating: ServiceShowcase = {
  label: "Ceramic coating",
  beforeAfter: [
    img("ferrari-ceramic-coating-water-beading", "Water beading on a freshly ceramic-coated white Ferrari", 1171, 1400),
    img("ferrari-ceramic-coating-bonnet", "Ferrari rear deck beading water after ceramic coating", 1050, 1400),
  ],
  jobs: [
    {
      title: "Land Rover Defender 90",
      services: "Gloss enhancement + 2-year ceramic coating",
      intro:
        "This Land Rover Defender 90 received a single-stage gloss enhancement to address light imperfections from dealership preparation and routine washing before applying long-term ceramic protection.",
      bulletGroups: [
        {
          items: [
            "Single-stage machine enhancement to reduce minor swirling and improve paintwork clarity.",
            "Thorough preparation to ensure a suitable surface for coating application.",
            "2-year ceramic coating applied for longer-lasting protection.",
            COATING_BENEFIT_UV,
            "Easier routine washing and improved gloss retention between maintenance washes.",
          ],
        },
      ],
      outcome: "A great example of preparing and protecting a vehicle that will continue to see regular use.",
      images: [
        img("land-rover-defender-90-ceramic-coating-1", "Gordie applying ceramic coating to a green Land Rover Defender 90", 1328, 1400),
        img("land-rover-defender-90-ceramic-coating-2", "Panel wipe on the Land Rover Defender 90 before ceramic coating", 1400, 881),
        img("land-rover-defender-90-ceramic-coating-3", "Ceramic coating being levelled on the Defender 90 bodywork", 1400, 1145),
      ],
    },
    {
      title: "Aston Martin V8 Vantage",
      services: "Gloss enhancement + 2-year ceramic coating",
      intro:
        "An older Aston Martin V8 Vantage, owned and enjoyed for several years, brought in to refresh its appearance and protect the paintwork for continued ownership.",
      bulletGroups: [
        {
          items: [
            "Single-stage machine enhancement to reduce light swirling and improve gloss and clarity.",
            "Paintwork carefully prepared for ceramic coating application.",
            "2-year ceramic coating applied for longer-term protection.",
            "Added resistance to UV exposure and environmental contamination.",
            "Easier ongoing maintenance to help preserve the vehicle's appearance and condition.",
          ],
        },
      ],
      outcome:
        "A considered approach to maintaining the finish of a cherished performance car, helping protect its presentation and potential future resale appeal.",
      images: [
        img("aston-martin-v8-vantage-ceramic-coating", "Grey Aston Martin V8 Vantage after gloss enhancement and 2-year ceramic coating", 1400, 1209),
      ],
    },
    {
      title: "Mazda 3",
      services: "3-year ceramic coating + mobile maintenance",
      intro:
        "This Mazda 3 originally visited our detailing unit when brand-new for a gloss enhancement and long-term ceramic protection. It now receives ongoing maintenance through our mobile detailing service.",
      bulletGroups: [
        {
          heading: "Initial preparation and protection:",
          items: [
            "Single-stage machine enhancement to refine very fine paintwork imperfections and improve gloss.",
            "Thorough paintwork preparation before coating application.",
            "CARPRO CQuartz 3.0 ceramic coating applied for 3-year protection.",
          ],
        },
        {
          heading: "Ongoing mobile maintenance:",
          items: [
            "Careful exterior cleaning using coating-safe washing methods.",
            "Regular upkeep to help maintain the coating's performance and appearance.",
            "Convenient maintenance appointments at the customer's location.",
          ],
        },
      ],
      outcome:
        "A great example of how professional ceramic protection and regular maintenance work together to keep a vehicle looking its best over the years.",
      images: [img("mazda-3-ceramic-coating", "Dark blue Mazda 3 with a 3-year ceramic coating after a mobile maintenance wash", 1400, 1060)],
    },
  ],
  testimonials: [
    {
      quote:
        "Great service from Gordie - provided a ceramic coating on new car, done a fantastic job and would highly recommend. Will be using his services again in the future.",
      name: "Jonny R.",
      service: "New car detail with coating",
      vehicle: "BMW iX3",
    },
    {
      quote: "Great job! Single stage polish and a coating.",
      name: "Gary C.",
      service: "Paint correction and coating",
      vehicle: "VW Passat R36",
    },
  ],
  faqs: [
    {
      question: "What are the benefits of a ceramic coating?",
      answer:
        "Ceramic coatings provide a durable protective layer that helps resist environmental contamination and UV exposure, improves water repellency and makes regular washing easier.",
    },
    {
      question: "How long does a ceramic coating last?",
      answer:
        "We offer 12-month, 2-year and 3-year CARPRO ceramic paintwork protection. Actual durability depends on vehicle usage, environmental exposure and ongoing maintenance.",
    },
    {
      question: "Will a ceramic coating prevent scratches?",
      answer:
        "No. Ceramic coatings aren't scratch-proof and won't prevent stone chips or damage from incorrect washing. They help protect the finish and make routine cleaning easier.",
    },
    {
      question: "Does my ceramic-coated car still need washing?",
      answer:
        "Yes. Regular safe washing helps prevent contamination buildup and maintain coating performance. We also offer mobile maintenance services for ceramic-coated vehicles.",
    },
  ],
};

export const fullDetail: ServiceShowcase = {
  label: "Full detail",
  beforeAfter: [
    img("bentley-full-detail-before-after", "Bentley Continental GT before and after a full detail", 1080, 1080),
    img("wheel-full-detail-before-after", "Alloy wheel before and after deep cleaning during a full detail", 1080, 1080),
    img("interior-full-detail-before-after", "Rear seats and carpets before and after an interior deep clean", 1080, 1080),
  ],
  jobs: [
    {
      title: "Porsche Macan GTS",
      services: "Full interior and exterior detail",
      intro:
        "This Porsche Macan GTS is used regularly, with the owner looking for a thorough interior and exterior refresh without the need for machine paint correction.",
      bulletGroups: [
        {
          items: [
            "Comprehensive exterior deep clean and decontamination where required.",
            "Paintwork cleaned and protected to help maintain its existing finish.",
            "Thorough interior detail, including upholstery, carpets and frequently touched surfaces.",
            "Interior surfaces refreshed to maintain a clean, comfortable cabin.",
            "Protection applied to help make future maintenance easier.",
          ],
        },
      ],
      outcome:
        "A practical option for owners who want to keep their everyday vehicle looking and feeling its best without committing to a paint correction package.",
      images: [
        img("porsche-macan-gts-full-detail-1", "Blue Porsche Macan GTS after a full interior and exterior detail", 1400, 1058),
        img("porsche-macan-gts-full-detail-interior", "Porsche Macan GTS rear cabin after an interior deep clean", 1050, 1400),
      ],
    },
    {
      title: "Audi Q7",
      services: "Full detail, family vehicle care",
      intro:
        "A family-used Audi Q7 brought in for a comprehensive interior and exterior detail, focusing on keeping the vehicle clean, comfortable and protected against everyday use.",
      bulletGroups: [
        {
          items: [
            "Thorough exterior wash and decontamination where necessary.",
            "Paintwork protection applied to help preserve the finish.",
            "Detailed interior cleaning, including seats, carpets, mats and frequently used areas.",
            "Removal of accumulated everyday dirt and grime.",
            "Interior refreshed for a cleaner, more comfortable driving environment.",
          ],
        },
      ],
      outcome:
        "An ideal service for busy families wanting to maintain their vehicle's condition without the need for machine polishing.",
      images: [
        img("audi-q7-full-detail-1", "White Audi Q7 after a full detail", 787, 1400),
        img("audi-q7-full-detail-interior-1", "Audi Q7 front cabin with the door open after interior detailing", 1400, 1333),
        img("audi-q7-full-detail-interior-2", "Audi Q7 rear seats after a family-car interior deep clean", 1050, 1400),
      ],
    },
    {
      title: "Mercedes-Benz GLE",
      services: "Full detail, ceramic coating refresh",
      intro:
        "This Mercedes-Benz GLE demonstrates how a Full Detail can also benefit vehicles already protected with a ceramic coating. Over time, road film and contamination can build up on the surface, reducing the coating's water-repellent behaviour and making it appear less effective.",
      bulletGroups: [
        {
          items: [
            "Thorough exterior deep clean using coating-safe methods.",
            "Appropriate chemical decontamination to help remove accumulated road film and bonded contamination.",
            "Existing ceramic protection refreshed where appropriate, helping restore water repellency.",
            "Comprehensive interior detail to bring the cabin back to a high standard.",
            "Vehicle prepared for easier ongoing maintenance.",
          ],
        },
      ],
      outcome:
        "A useful service for ceramic-coated vehicles requiring more attention than a routine maintenance wash, without automatically needing a new coating.",
      images: [
        img("mercedes-gle-full-detail", "Black Mercedes-Benz GLE after a full detail and ceramic coating refresh", 1174, 952),
        img("mercedes-gle-full-detail-carpet", "Mercedes-Benz GLE floor mat after interior detailing", 1050, 1400),
      ],
    },
  ],
  testimonials: [
    {
      quote:
        "Gordy has just completed deep cleans and detailing on three cars for me. What can I say fantastic service and work, not a crumb or spec of dust left anywhere!! In fact Gordy was cleaning areas on the cars I didnt even know about or consider. …lots of great tips from Gordy, and wont be the last time I use Double O Detailing",
      name: "Gareth B.",
      service: "Coatings and maintenance",
      vehicle: "Various cars",
    },
    {
      quote:
        "Amazing and brilliant car detailing service from Gordy at Double O Detailing. He arrived on time, was polite and professional, and the full interior and exterior detail has made the car look brand new. If you’re looking for mobile car detailing in the local area, I honestly couldn’t recommend him enough. One of the best professional car detailers I’ve used.",
      name: "Bax G.",
      service: "Deep cleans and maintenance",
      vehicle: "Land Rover Defender 110",
    },
  ],
  faqs: [
    {
      question: "What's included in a Full Detail?",
      answer:
        "A comprehensive interior and exterior clean, including exterior decontamination, interior deep cleaning and a hand-applied protection with up to three months' paint protection.",
    },
    {
      question: "What's the difference between a Full Detail and Maintenance Detail?",
      answer:
        "A Full Detail is designed to bring a vehicle up to a higher cleanliness standard. Maintenance Details are for vehicles already in good condition that require regular upkeep.",
    },
    {
      question: "Can you Full Detail a ceramic-coated vehicle?",
      answer:
        "Yes. A Full Detail can help remove accumulated contamination and refresh the appearance and water-repellent performance of an existing coating, where the coating remains in good condition.",
    },
    {
      question: "What if my vehicle is particularly dirty?",
      answer:
        "Our starting prices assume vehicles in average condition. Heavily soiled interiors, excessive contamination or additional restoration work may require a separate quotation.",
    },
  ],
};

/** Shared across service pages and /about/ */
export const training = [
  {
    title: "SONAX Detailing Academy – 3-Day Professional Detailing Course",
    body: "Comprehensive training covering professional exterior and interior detailing, paintwork decontamination, machine polishing, paint correction and protective coatings. Developing practical skills in vehicle assessment, product selection, safe polishing techniques and ceramic coating application.",
    badges: ["SONAX and PROFILINE Coating Trained", "SONAX and PROFILINE Expert Trained"],
    logo: { src: "/certs/SONAX.png", alt: "SONAX" },
  },
  {
    title: "UK Detailing Academy – One-to-One Machine Polishing Course",
    body: "Specialist hands-on training focused on paintwork assessment, defect identification, paint thickness measurement and machine polishing. Developing greater precision in selecting polishing pads, compounds and techniques to safely improve paintwork clarity and finish.",
    badges: ["Machine Polishing Technique — UKDA Trained"],
    logo: { src: "/certs/ukDA.png", alt: "UK Detailing Academy" },
  },
  {
    title: "CM Pristine Detailing – Practical Ceramic Coating Training",
    body: "Additional hands-on experience in professional ceramic coating preparation and application within a controlled indoor detailing environment, with an emphasis on correct application techniques and finishing standards.",
    badges: ["Paint Correction, Coating and Business Skills Trained"],
    logo: { src: "/certs/cmpristine.jpg", alt: "CM Pristine Detailing" },
  },
];

export const localConnections = [
  "Killearn Garage",
  "Balfron Auto Centre",
  "Lorimer and Findlay Performance and Prestige Specialists",
  "Dalvait Garage",
];
