export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-lg italic text-foreground">
            Konoba Mediterano
          </p>
          <p className="mt-1 text-sm text-muted-foreground">
            Obala Vladimira Nazora 15, 22211 Vodice, Hrvatska
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <a
            href="tel:+38598235985"
            className="transition-colors duration-(--duration-micro) hover:text-terracotta"
          >
            +385 98 235 985
          </a>
          <a
            href="#pocetak"
            className="transition-colors duration-(--duration-micro) hover:text-terracotta"
          >
            Na vrh
          </a>
          <span>Otvoreno 10:00 – 02:00</span>
        </div>
      </div>
    </footer>
  );
}
