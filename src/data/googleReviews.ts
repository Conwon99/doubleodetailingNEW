/**
 * Google reviews for Double O Detailing (5.0, 50 reviews), copied from the
 * Google Business Profile on 21 Nov 2026. Tags map each review to the
 * service pages it supports.
 */
export type ReviewTag =
  | "paint-correction"
  | "ceramic"
  | "full-valet"
  | "maintenance"
  | "valeting"
  | "headlight"
  | "engine-bay"
  | "interior"
  | "general";

export type GoogleReview = { name: string; text: string; tags: ReviewTag[] };

export { GOOGLE_REVIEW_COUNT } from "./business";

export const googleReviews: GoogleReview[] = [
  { name: "Gary Cowan", tags: ["paint-correction", "ceramic"], text: "Great job! Gordie done 3 winter protection package deals for me, single stage polish and a coating, good communication and turned up when he said he would, can't ask for more!" },
  { name: "Brian Cunningham", tags: ["paint-correction"], text: "Contacted Gordie from Double O Detailing regarding scratches I had on my car, which dealerships mentioned when I was getting a valuation. I was told about his business from a friend who recommended him. After providing a price he arrived at a convenient time to carry out the machine polishing to take out the scratches. It was an excellent job and it looked brand new. I will certainly use this business again for any other scratches on my car but also use the car valeting and detailing services. Highly recommended." },
  { name: "Mark Lindsay", tags: ["paint-correction", "maintenance"], text: "Got in contact with Gordie regarding the sale of my BMW Estate, he detailed the interior and exterior to a showroom finish! So much so that I booked him in to fix the paintwork on my son’s VW Golf. He performed a machine polish and waxed the car. This transformed its appearance brilliantly. We now get him to visit our house and maintain our cars." },
  { name: "Sean Anderson", tags: ["paint-correction", "full-valet"], text: "Gordie prepped my work vehicle for lease return and the result was excellent. Full interior and exterior deep clean, graphic removal, and machine polish — genuinely lease-return ready. Would 100% recommend." },
  { name: "stratofaster01", tags: ["paint-correction"], text: "Gordie done a cracking job bringing the finish back to life. 10/10 highly recommend." },
  { name: "Jamie Anderson", tags: ["paint-correction", "ceramic"], text: "My Audi RS3 went into Gordie for his ‘Casino Royale’ package. Whole experience was brilliant, through Gordie’s communication and total pride and professionalism in what he does. Car came out better than ever expected, the single stage polish and paint enhancement along with a ceramic coating has really made the car feel showroom fresh, and now has a level of protection. Couldn’t recommend Gordie’s services enough." },
  { name: "Paul Mosley", tags: ["ceramic"], text: "Gordie made a brand new car look even better. I invested in a ceramic coating and not only did the finish look superb I now know the car will look great every time it gets cleaned." },
  { name: "Jonny Reid", tags: ["ceramic"], text: "Great service from Gordie - provided a ceramic coating on new car, done a fantastic job and would highly recommend. Will be using his services again in the future." },
  { name: "davieboy75", tags: ["ceramic"], text: "Great work and what a hard worker. My car looks amazing, can’t wait for it to rain to see the effects 😃" },
  { name: "rachel degan", tags: ["full-valet"], text: "Amazing and brilliant car detailing service from Gordy at Double O Detailing. Gordy done a full deep clean on my BMW and made it look brand new. I honestly couldn't recommend him enough." },
  { name: "Jess Mahoney", tags: ["full-valet", "interior"], text: "Wow what can I say, my car was absolutely filthy I’m ashamed to say, 4 years of dog hairs and dirt and grind you’d find in a tractor! Double O Detailing brought it back to looking brand new for its return to the lease company. It honestly looked like a brand new car. The attention to detail is superb. Thank you so much" },
  { name: "Dawn Adams", tags: ["full-valet", "interior"], text: "I didn’t expect the detailing to bring the car up so brilliantly. Every nook and cranny has been cleaned, polished and is gleaming. The carpets and upholstery are fantastic. Genuinely it looks like the day it arrived 3 years ago. Highly recommend this company. Very personable, great communications, professional service and exceptional attention to detail." },
  { name: "Lizzie MacLeod", tags: ["full-valet", "interior"], text: "I can highly recommend Gordie and Double-O Detailing. Dog hairs, grandchildren's crumbs and muddy footprints on the back of the front seats all gone. My car looked as if it had just come from a show room." },
  { name: "David Smith", tags: ["full-valet", "valeting"], text: "I decided to give my dad in Killearn a comprehensive valet and detail for Christmas for his RAV 4. Gordie was such a pleasure to deal with. Polite, responsive and punctual arriving when he said. The quote was well explained and my dad is absolutely thrilled. The car is in showroom condition. I would have no hesitation recommending and I absolutely would use him again." },
  { name: "Hassan Javed", tags: ["full-valet", "engine-bay", "interior"], text: "This was the first time I booked a professional detailer to have my BMW M4 deep cleaned which included an engine bay detail, interior detail and a safe wash. Gordie was exactly that, professional, from start to finish. He talked me through the packages and recommended the one that was best for my needs. The interior detail was spot on with my Silverstone merino leather seats looking shiny and new. The engine bay detail really makes the car stand out and the safe wash was done to perfection. Overall, a 5/5 service and a detail exceeding my expectations." },
  { name: "Arryn_ Embe1ton", tags: ["full-valet", "interior"], text: "Gordie detailed our Saab and at the start of the job it was beat up on the inside and at the end of the job the inside was immaculate. Highly rate Gordie. Cheers" },
  { name: "Gab M", tags: ["full-valet"], text: "Amazing service and job with the full detail, the main guy Gordie is very friendly and offers great advice, would recommend 100%." },
  { name: "Jackie Davies", tags: ["full-valet"], text: "Great job on my old car, which needed more than a little TLC. Gordon was there most of the day cleaning it, so fantastic value for the money, and the car looks like new. Definitely recommend and will use again." },
  { name: "Gareth Bourhill", tags: ["full-valet"], text: "Gordy has just completed deep cleans and detailing on three cars for me. What can I say, fantastic service and work, not a crumb or spec of dust left anywhere!! In fact Gordy was cleaning areas on the cars I didn't even know about or consider." },
  { name: "Baxter", tags: ["full-valet", "valeting"], text: "Amazing and brilliant car detailing service from Gordy at Double O Detailing. He arrived on time, was polite and professional, and the full interior and exterior detail has made the car look brand new. If you’re looking for mobile car detailing in the local area, I honestly couldn’t recommend him enough." },
  { name: "John Queen", tags: ["maintenance", "valeting"], text: "Gordie gives my car a monthly maintenance clean on exterior and interior and his attention to detail is exceptional. He is very flexible with having his mobile valeting van too which is ideal for me as he comes to my work and does everything from there. Would highly recommend to anyone! 👍" },
  { name: "Tanya Alexander", tags: ["maintenance"], text: "We’ve just had our second visit from Gordie, for a maintenance visit, and I can honestly say our car looks even better than when we bought it! Our Discovery is a bit of a work horse, used for horsey events, dog walking, and family days out, so it’s no easy feat trying to keep it clean. Thank you!" },
  { name: "Chelsea", tags: ["maintenance", "valeting"], text: "Attention to detail 10/10, returning customer every 4 weeks for at home valet and wouldn’t go anywhere else." },
  { name: "Deborah Dorrian", tags: ["maintenance", "valeting"], text: "Gordon is brilliant at what he does, all my cars are spotless every time he leaves and his attention to detail is outstanding. I would highly recommend to anyone looking to get booked in!" },
  { name: "Kenneth Wilkinson", tags: ["maintenance", "general"], text: "The number 1 detailer. An excellent, professional job and extremely fair costs on the 3 cars we have. We have been using Double O Detailing for a number of years now, and will continue to do so for many years to come. Highly, highly recommend." },
  { name: "Ryan Walker", tags: ["valeting"], text: "I booked my Ford Fiesta ST in for a mini detail, Gordie arrived on time and got straight to work, he was pleasant and efficient in his work and my car was left in factory condition once he was finished." },
  { name: "Michelle Anderson", tags: ["valeting"], text: "Car is absolutely spotless! There’s not a single spot that’s not been cleaned! Very organised and professional." },
  { name: "Kathryn Bennett", tags: ["valeting"], text: "Excellent service from Gordie. Car was spotless inside and out. Will definitely use Double O Detailing again." },
  { name: "Drew McLaren", tags: ["headlight"], text: "Gordie took the time to send me an extensive message packed with information and guidance regarding my headlamps. Seems like a very honest and genuine guy! All the best in the future." },
  { name: "Ross Faichnie", tags: ["interior"], text: "Lovely guy, really professional and clearly knows what he’s doing. Seats look amazing, came up like new. Very happy with the result and would definitely recommend." },
  { name: "Alan Gibson", tags: ["interior"], text: "Great, thorough job on the interior detail. Punctual, polite and professional. I’d definitely use Gordon’s services again" },
  { name: "Elaine Langlands", tags: ["general"], text: "The standard of service was 1st class. From early contact and detailed estimate to the finished product. I am absolutely delighted with the care and attention given to my car. My car looks as if it just came out the showroom and immaculate standard of cleaning." },
  { name: "Katie Lindsay", tags: ["general"], text: "5 Star rating. Gordie’s attention to detail is second to none. I know my car is in good hands when he’s about. I wouldn’t use anyone else to detail my car. My car always feels like a new car when Gordie is finished. 10/10" },
  { name: "shazaad arif", tags: ["general"], text: "Absolute master of his trade. Literally back to showroom condition every time. I wouldn't let anyone else touch my car." },
  { name: "W H", tags: ["general"], text: "Gordie did an excellent job. Really good attention to detail and went the extra mile putting an exceptional detail on the car. Well worth it and highly recommended." },
  { name: "Kevin Mitchell", tags: ["general"], text: "Have now had a few cars and a boat detailed by Gordy and his service is first class. I will not use anywhere else going forward and cannot recommend enough." },
  { name: "Evelyn Anderson", tags: ["general"], text: "If there were 007 stars Gordie would definitely be worthy. My cars have never looked as good. He takes pride in what he’s doing and it shows with the results. I can highly recommend Double-0 Detailing 🤩" },
  { name: "alastair easton", tags: ["general"], text: "Amazing standard of work, my car was totally transformed by this friendly and professional service. Every detail was perfect. You will not be disappointed." },
  { name: "David Mackie", tags: ["full-valet"], text: "Asked Gordie to detail a couple of vehicles. As well as a van that had not been cleaned in years. Truly superb service and finished results were excellent. Highly recommended." },
  { name: "Katie Graham", tags: ["valeting"], text: "Highly recommend Gordie and Double O Detailing. Gordie’s attention to detail is second to none and my car is sparkling inside and out!" },
  { name: "Larry Winning", tags: ["maintenance"], text: "Having used this company a number of times now, both my wife and myself are delighted at the perfection to detail with this company, every single time. Really, really excellent and reliable. A friend used them when selling his car and was enthusing about them too." },
  { name: "Chantal Robinson", tags: [], text: "Absolutely fantastic job, car looks amazing. Thank you." },
  { name: "Robert Brew", tags: [], text: "Top job! My car looks awesome! 100% recommendation." },
  { name: "Cameron Brown", tags: [], text: "Great service with excellent attention to detail, professional and efficient. Not your average detailer 💪🏻" },
  { name: "Andy Lennox", tags: [], text: "Excellent service from Double O Detailing. Would highly recommend. Very thorough service, delighted with result. Car looking better than new." },
  { name: "Kayleigh Hopkinson", tags: [], text: "Really good service! Car was spotless and like new! Thanks again. Highly recommend" },
  { name: "Sean Odonnell", tags: [], text: "5 star, great service and very professional, will definitely recommend and book again." },
  { name: "Graham Martlew", tags: [], text: "Very efficient and a first class job" },
  { name: "Harry Hutchison", tags: [], text: "Amazing service, charming and efficient team! Would highly recommend" },
];

/** Reviews for a service page: tagged ones first, topped up with general reviews */
export function reviewsFor(tag: ReviewTag, opts: { exclude?: string[]; min?: number; max?: number } = {}) {
  const { exclude = [], min = 3, max = 8 } = opts;
  const ok = (r: GoogleReview) => !exclude.some((e) => r.name.toLowerCase().startsWith(e.toLowerCase()));
  const tagged = googleReviews.filter((r) => r.tags.includes(tag) && ok(r));
  const general = googleReviews.filter((r) => r.tags.includes("general") && !r.tags.includes(tag) && ok(r));
  return [...tagged, ...general.slice(0, Math.max(0, min - tagged.length))].slice(0, max);
}
