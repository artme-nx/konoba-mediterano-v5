type MenuGroup = {
  title: string;
  items: string[];
};

const MENU: MenuGroup[] = [
  {
    title: "Iz mora",
    items: [
      "Lignje s roštilja",
      "Škampi na buzaru",
      "Brancin i orada s gradela",
      "Riblja juha",
      "Hobotnica ispod peke",
    ],
  },
  {
    title: "Tjestenine i rižoti",
    items: [
      "Špageti sa plodovima mora",
      "Crni rižoto",
      "Rižoto od škampa",
    ],
  },
  {
    title: "Salate i prilozi",
    items: ["Salata od hobotnice", "Blitva s krumpirom", "Miješana salata"],
  },
  {
    title: "Meso i ostalo",
    items: ["Biftek na žaru", "Miješano meso s roštilja", "Veg / vegan opcije"],
  },
  {
    title: "Vino i piće",
    items: [
      "Kućna vinska karta",
      "Craft pivo",
      "Koktel karta",
      "Kava i domaći kolači",
    ],
  },
];

export function MenuSection() {
  return (
    <section id="jelovnik" className="border-t border-border bg-card">
      <div className="mx-auto max-w-5xl px-4 py-20 md:px-8 md:py-28">
        <span className="text-label text-terracotta">Jelovnik</span>
        <h2 className="font-display mt-3 max-w-xl text-balance text-4xl leading-tight md:text-5xl">
          Kratak jelovnik, dugo pamćenje
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          Ponuda prati ulov, pa se mijenja iz dana u dan — ovo su stalnice oko
          kojih je jelovnik građen.
        </p>

        <div className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {MENU.map((group) => (
            <div key={group.title}>
              <h3 className="font-display text-xl italic text-marine">
                {group.title}
              </h3>
              <ul className="mt-4 divide-y divide-border">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="py-3 text-lg leading-snug text-foreground first:pt-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
