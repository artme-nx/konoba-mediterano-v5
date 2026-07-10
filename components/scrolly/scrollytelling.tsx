"use client";

import * as React from "react";
import { FACETS } from "./facet-data";

/**
 * Vertical scrollytelling with a pinned visual column.
 *
 * Desktop (lg+): the photo + progress rail are `position: sticky` inside a
 * two-column grid that spans the full height of all five facets. As the
 * user scrolls the text column, an IntersectionObserver watching each text
 * panel updates `activeIndex`, which crossfades the matching photo and
 * lights up the corresponding rail dot. Sticky positioning is pure CSS —
 * it works with JavaScript disabled. The crossfade itself is a decorative
 * enhancement: with JS off, facet 0's photo simply stays in view the whole
 * time (see the `.facet-frame` default in globals.css), while every word of
 * the actual story still renders normally in document flow underneath.
 *
 * Mobile (<lg): the sticky column is hidden entirely and each panel gets
 * its own inline photo — a plain stacked scroll, no pin, no observer
 * dependency for readability.
 */
export function Scrollytelling() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const panelRefs = React.useRef<Array<HTMLDivElement | null>>([]);

  React.useEffect(() => {
    const panels = panelRefs.current.filter(
      (el): el is HTMLDivElement => el !== null
    );
    if (panels.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-facet-panel"));
            if (!Number.isNaN(idx)) setActiveIndex(idx);
          }
        });
      },
      {
        // A thin horizontal band through the vertical center of the
        // viewport -- whichever panel crosses it becomes "active".
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    panels.forEach((panel) => observer.observe(panel));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="prica" className="relative bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-8 lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10">
        {/* Pinned visual column -- desktop only */}
        <div className="hidden lg:block">
          <div className="sticky top-0 flex h-screen items-center">
            <div className="relative aspect-[4/5] max-h-[78vh] w-full overflow-hidden rounded-lg bg-accent shadow-[0_30px_60px_-30px_rgba(36,31,26,0.35)]">
              {FACETS.map((facet, i) => (
                <img
                  key={facet.id}
                  src={facet.image.src}
                  alt={facet.image.alt}
                  data-active={i === activeIndex ? "true" : "false"}
                  className="facet-frame absolute inset-0 h-full w-full object-cover"
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[rgba(36,31,26,0.55)] to-transparent" />
              <p className="absolute bottom-5 left-6 font-display text-lg italic" style={{ color: "var(--primary-foreground)" }}>
                {FACETS[activeIndex].kicker}
              </p>
            </div>
          </div>
        </div>

        {/* Progress rail -- desktop only, between columns. Fixed-width
            column (not content-sized) so nothing can overflow into the
            text column next to it. */}
        <div className="hidden lg:flex lg:w-20 lg:justify-center">
          <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center">
            <div className="relative flex h-[50vh] w-full flex-col items-center justify-between py-1">
              {/* Track + fill line, centered in the column */}
              <div
                className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2"
                style={{ background: "var(--rail-track-color)" }}
              />
              <div
                className="rail-line-fill absolute top-0 left-1/2 w-px -translate-x-1/2"
                style={{
                  height: "100%",
                  background: "var(--rail-line-active-color)",
                  transform: `scaleY(${activeIndex / (FACETS.length - 1)})`,
                }}
              />
              {FACETS.map((facet, i) => (
                <div
                  key={facet.id}
                  className="relative z-10 flex flex-col items-center gap-1.5"
                >
                  <span
                    data-active={i === activeIndex ? "true" : "false"}
                    className="rail-dot h-2.5 w-2.5 shrink-0 rounded-full transition-transform duration-300"
                    style={{ background: "var(--rail-dot-color)" }}
                  />
                  <span
                    className="text-label transition-colors duration-300"
                    style={{
                      color:
                        i === activeIndex
                          ? "var(--terracotta)"
                          : "var(--muted-foreground)",
                    }}
                  >
                    {facet.index}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Text column -- always in normal flow */}
        <div>
          {FACETS.map((facet, i) => (
            <div
              key={facet.id}
              ref={(el) => {
                panelRefs.current[i] = el;
              }}
              data-facet-panel={i}
              className="flex min-h-[70vh] flex-col justify-center border-b border-border py-16 last:border-b-0 lg:min-h-screen lg:border-b-0 lg:py-0"
            >
              {/* Mobile-only inline photo: normal stacked scroll, no pin */}
              <img
                src={facet.image.src}
                alt={facet.image.alt}
                className="mb-6 aspect-[4/3] w-full rounded-lg object-cover lg:hidden"
                loading="lazy"
              />

              <span className="text-label text-muted-foreground">
                {facet.index} — {facet.kicker}
              </span>
              <h3 className="font-display mt-3 mb-5 text-3xl leading-tight text-balance md:text-4xl">
                {facet.title}
              </h3>
              {facet.body.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="mb-4 max-w-prose text-lg leading-relaxed text-muted-foreground last:mb-0"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
