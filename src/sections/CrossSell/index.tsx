type CrossSellProps = {
  heading: string;
  intro: string;
};

/** Points visitors on add-on service pages towards the main packages. Prices match src/data/packages.ts. */
export const CrossSell = ({ heading, intro }: CrossSellProps) => {
  const items = [
    {
      href: "/machine-polishing/",
      title: "Gloss enhancement",
      from: "£295",
      text: "Machine polish to lift dull, lightly swirled paint, with 12-month ceramic protection included.",
    },
    {
      href: "/ceramic-coatings/",
      title: "Gloss enhancement + 2-year coating",
      from: "£370",
      text: "Gloss enhancement with a 2-year ceramic coating for longer-lasting gloss and easier washing. 3-year option at our unit.",
    },
    {
      href: "/deep-cleans/",
      title: "Full detail",
      from: "£170",
      text: "Interior and exterior detail with 6-month paint protection. Add headlight restoration to any full detail.",
    },
  ];

  return (
    <section className="bg-white py-[60px] md:py-[80px]">
      <div className="max-w-[1204px] mx-auto px-5 md:px-8">
        <h2 className="text-3xl font-bold tracking-[-0.52px] leading-[35px] md:text-[44px] md:leading-[52px] font-refrigerator uppercase">
          {heading}
        </h2>
        <p className="text-[15px] leading-6 text-gray-700 mt-3 md:text-base max-w-[720px]">{intro}</p>
        <div className="grid gap-4 md:grid-cols-3 mt-8">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="block rounded-2xl p-6 border border-neutral-200 hover:border-black">
              <h3 className="text-xl font-medium">{i.title}</h3>
              <p className="text-gray-700 mt-2 text-[15px] leading-6">{i.text}</p>
              <p className="font-medium mt-4">From {i.from}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
