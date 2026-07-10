import { SiteHeader } from "@/components/site-header";
import { Hero } from "@/components/hero";
import { Scrollytelling } from "@/components/scrolly/scrollytelling";
import { MenuSection } from "@/components/menu-section";
import { LocationSection } from "@/components/location-section";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Scrollytelling />
        <MenuSection />
        <LocationSection />
      </main>
      <SiteFooter />
    </>
  );
}
