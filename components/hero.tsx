export function Hero() {
  return (
    <section id="pocetak" className="relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-8 md:py-24 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:py-28">
        <div className="order-2 lg:order-1">
          <span className="text-label text-terracotta">Vodice, riva</span>
          <h1 className="font-display mt-5 text-balance text-5xl leading-[1.05] text-foreground md:text-6xl lg:text-7xl">
            Konoba <em className="italic text-marine">Mediterano</em>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
            Stol na riječkoj rivi u Vodicama, oči u oči s mandračem. Svježa
            dnevna lovina, roštilj plodova mora i vinska karta koja ne
            pokušava biti pametnija od ribe na tanjuru.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="tel:+38598235985"
              className="rounded-md bg-[var(--button-primary-bg)] px-6 py-3 text-label text-[var(--button-primary-fg)] transition-colors duration-(--duration-micro) hover:bg-[var(--button-primary-hover-bg)] hover:text-[var(--button-primary-hover-fg)]"
            >
              Rezervacija: +385 98 235 985
            </a>
            <a
              href="#prica"
              className="rounded-md border px-6 py-3 text-label text-foreground transition-colors duration-(--duration-micro)"
              style={{ borderColor: "var(--button-ghost-border)" }}
            >
              Otkrij konobu ↓
            </a>
          </div>
          <p className="text-label mt-8 text-muted-foreground">
            Otvoreno svaki dan · 10:00 – 02:00
          </p>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg shadow-[0_40px_80px_-40px_rgba(36,31,26,0.4)] md:aspect-[5/4] lg:aspect-[4/5]">
            <img
              src="https://images.unsplash.com/photo-1727200451554-e1447a55262a?auto=format&fit=crop&w=1600&q=80"
              alt="Restoran s pogledom na more, stolovi i suncobrani na riječkoj rivi"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
