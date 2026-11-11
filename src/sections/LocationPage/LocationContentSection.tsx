import type { Location } from "@/data/locations";
import { getLocationContent } from "@/data/locationContent";
import { services } from "@/data/services";

export type LocationContentSectionProps = {
  location: Location;
};

export const LocationContentSection = ({
  location,
}: LocationContentSectionProps) => {
  const content = getLocationContent(location.slug);
  if (!content) return null;

  const focus = content.focusServices
    .map((slug) => services.find((s) => s.slug === slug))
    .filter((s): s is (typeof services)[number] => Boolean(s));

  return (
    <section className="bg-white box-border py-[60px] md:py-[100px]">
      <div className="box-border max-w-[1204px] mx-auto px-5 md:px-8">
        <div className="max-w-[800px] prose prose-neutral">
          <h2 className="text-2xl font-bold tracking-tight text-black mb-3 font-refrigerator uppercase">
            {content.heading}
          </h2>
          {content.paragraphs.map((p, i) => (
            <p key={i} className="text-[15px] text-gray-700 leading-6 md:text-base mb-6">
              {p}
            </p>
          ))}

          {focus.length > 0 && (
            <>
              <h2 className="text-2xl font-bold tracking-tight text-black mt-12 mb-3 font-refrigerator uppercase">
                Most useful for {location.name} cars
              </h2>
              <ul className="list-disc pl-5 text-[15px] text-gray-700 leading-6 md:text-base">
                {focus.map((s) => (
                  <li key={s.slug} className="mb-2">
                    <a href={`/${s.slug}/`} className="underline font-medium text-black">
                      {s.title}
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {content.recentJobs.length > 0 && (
            <>
              <h2 className="text-2xl font-bold tracking-tight text-black mt-12 mb-3 font-refrigerator uppercase">
                Recent jobs in {location.name}
              </h2>
              {content.recentJobs.map((job, i) => (
                <div key={i} className="mb-8">
                  {job.image && (
                    <img
                      src={job.image}
                      alt={`${job.car} – ${job.service} in ${location.name}`}
                      className="rounded-lg mb-3 w-full"
                      loading="lazy"
                    />
                  )}
                  <h3 className="text-lg font-semibold text-black mb-1">
                    {job.car} – {job.service}
                  </h3>
                  <p className="text-[15px] text-gray-700 leading-6 md:text-base">{job.summary}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  );
};
