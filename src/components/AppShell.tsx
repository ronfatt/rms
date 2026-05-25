"use client";

import { useEffect, useState } from "react";
import {
  aiSignals,
  artists,
  services,
  siteLinks,
  studioMetrics,
  trustBadges,
  works,
} from "@/data/site";
import { AISoundBrief } from "./AISoundBrief";
import { ArtistCard } from "./ArtistCard";
import { AudioPreviewCard } from "./AudioPreviewCard";
import { ContactForm } from "./ContactForm";
import { CTAButton } from "./CTAButton";
import { GlassCard } from "./GlassCard";
import { HeroCard } from "./HeroCard";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { StudioMetrics } from "./StudioMetrics";
import { TrustBadge } from "./TrustBadge";
import { WorkCard } from "./WorkCard";

const tabs = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "works", label: "Works", icon: "♪" },
  { id: "ai", label: "AI", icon: "✧" },
  { id: "services", label: "Services", icon: "◈" },
  { id: "contact", label: "Contact", icon: "↗" },
];

export function AppShell() {
  const [activeTab, setActiveTab] = useState("home");
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const observers = tabs.map(({ id }) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveTab(id);
        },
        { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
      );
      observer.observe(element);
      return observer;
    });

    return () => observers.forEach((observer) => observer?.disconnect());
  }, []);

  useEffect(() => {
    const updateScrollState = () => setHasScrolled(window.scrollY > 560);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <div className="min-h-dvh bg-[#050506] text-[#f7f3ea]">
      <div className="mx-auto min-h-dvh w-full max-w-[480px] overflow-hidden border-x border-white/[0.06] bg-[linear-gradient(180deg,#101014_0%,#070708_42%,#050506_100%)] shadow-[0_0_80px_rgba(0,0,0,0.55)]">
        <main className="px-4 pb-[calc(112px+env(safe-area-inset-bottom))] pt-[calc(18px+env(safe-area-inset-top))]">
          <section id="home" className="scroll-mt-6">
            <HeroCard />
            <StudioMetrics metrics={studioMetrics} />
            <AudioPreviewCard work={works[0]} />

            <div className="mt-8">
              <AISoundBrief signals={aiSignals} />
            </div>

            <div className="mt-8">
              <SectionHeader
                eyebrow="Featured Works"
                title="Sound with a point of view."
                copy="We don't just make songs. We build sound identities."
              />
              <div className="-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-2 hide-scrollbar">
                {works.map((work) => (
                  <div key={work.title} className="snap-center">
                    <WorkCard work={work} compact />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {trustBadges.map((badge) => (
                <TrustBadge key={badge} label={badge} />
              ))}
            </div>

            <GlassCard className="mt-8 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7bc74]">
                Booking
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal">
                From raw idea to release-ready sound.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#c8c1b6]">
                Premium music production for artists serious about their sound.
              </p>
              <CTAButton href="#contact" className="mt-5 w-full">
                Start a Project
              </CTAButton>
            </GlassCard>
          </section>

          <section id="ai" className="mt-12 scroll-mt-6">
            <SectionHeader
              eyebrow="AI Studio OS"
              title="Human taste, AI clarity."
              copy="AI is used as a creative assistant: faster briefs, cleaner references and sharper production decisions. R.ON remains the final taste-maker."
            />
            <AISoundBrief signals={aiSignals} />
            <GlassCard className="mt-4 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7bc74]">
                Workflow
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "Upload references, demo link or voice note.",
                  "AI-assisted brief maps mood, genre, vocal tone and release goal.",
                  "R.ON refines the direction into a premium production plan.",
                ].map((step, index) => (
                  <div key={step} className="flex gap-3">
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#f3d27d] text-xs font-bold text-[#101010]">
                      {index + 1}
                    </span>
                    <p className="pt-1 text-sm leading-6 text-[#d8d0c4]">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </GlassCard>
          </section>

          <section id="works" className="mt-12 scroll-mt-6">
            <SectionHeader
              eyebrow="Works Library"
              title="Proof, not noise."
              copy="A curated view of production, writing, arranging and scoring work."
            />
            <div className="grid gap-4">
              {works.map((work) => (
                <WorkCard key={work.title} work={work} />
              ))}
            </div>
          </section>

          <section id="artists" className="mt-12 scroll-mt-6">
            <SectionHeader
              eyebrow="R.ON Star Network"
              title="Featured collaborators."
              copy="A premium artist roster and collaborator circle shaped around serious creative work."
            />
            <div className="grid gap-4">
              {artists.map((artist) => (
                <ArtistCard key={artist.name} artist={artist} />
              ))}
            </div>
            <CTAButton href="#contact" className="mt-5 w-full">
              Collaborate with R.ON
            </CTAButton>
          </section>

          <section id="services" className="mt-12 scroll-mt-6">
            <SectionHeader
              eyebrow="Services"
              title="Built for artists, brands and stories."
              copy="Clear packages for music that needs taste, structure and commercial finish."
            />
            <div className="grid gap-4">
              {services.map((service) => (
                <ServiceCard key={service.title} service={service} />
              ))}
            </div>
          </section>

          <section id="contact" className="mt-12 scroll-mt-6">
            <SectionHeader
              eyebrow="Contact"
              title="Tell R.ON what you hear."
              copy="Send the idea, reference, demo or brief. The next step should feel clear."
            />
            <ContactForm />
          </section>

          <section id="epk" className="mt-12 scroll-mt-6">
            <SectionHeader
              eyebrow="EPK / Press Kit"
              title="Official press materials."
              copy="A ready base for media, collaborators and booking partners."
            />
            <GlassCard className="p-5">
              <div className="mb-5 grid aspect-[16/10] place-items-center rounded-[24px] border border-white/10 bg-[linear-gradient(135deg,#131313,#272b3f_52%,#c7a85e)]">
                <span className="text-sm font-semibold uppercase tracking-[0.24em] text-white/80">
                  Profile Image
                </span>
              </div>
              <h3 className="text-lg font-semibold text-[#fff8ea]">
                Official Bio
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#c8c1b6]">
                R.ON is a music producer, songwriter, composer and arranger
                leading R.ON Meraki Studio, a premium platform for artists,
                brands and visual stories that need a signature sound.
              </p>
              <p className="mt-3 text-sm leading-6 text-[#a9a095]">
                Long-form bio, logo files, approved profile images and
                downloadable assets can be connected here when final press
                materials are ready.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <a
                  href={`mailto:${siteLinks.email}`}
                  className="min-h-11 rounded-full border border-white/10 px-4 py-3 text-center text-sm font-semibold text-[#f7f3ea]"
                >
                  Press Contact
                </a>
                <a
                  href="#"
                  className="min-h-11 rounded-full border border-white/10 px-4 py-3 text-center text-sm font-semibold text-[#f7f3ea]"
                >
                  Assets
                </a>
              </div>
            </GlassCard>
          </section>
        </main>

        <FloatingCTA activeTab={activeTab} isVisible={hasScrolled} />
        <BottomNav activeTab={activeTab} />
      </div>
    </div>
  );
}

function FloatingCTA({
  activeTab,
  isVisible,
}: {
  activeTab: string;
  isVisible: boolean;
}) {
  if (activeTab === "contact" || !isVisible) return null;

  return (
    <a
      href="#contact"
      aria-label="Book R.ON"
      className="fixed bottom-[calc(78px+env(safe-area-inset-bottom))] right-[max(16px,calc((100vw-480px)/2+16px))] z-30 flex min-h-12 items-center justify-center rounded-full bg-[#f3d27d] px-5 text-sm font-bold text-[#101010] shadow-[0_18px_48px_rgba(211,172,87,0.38)]"
      style={{ animation: "float-cta 4s ease-in-out infinite" }}
    >
      Book
    </a>
  );
}

function BottomNav({ activeTab }: { activeTab: string }) {
  return (
    <nav
      aria-label="Primary"
      className="fixed bottom-0 left-1/2 z-40 w-full max-w-[480px] -translate-x-1/2 border-t border-white/10 bg-[#09090b]/92 px-2 pb-[calc(8px+env(safe-area-inset-bottom))] pt-2 backdrop-blur-xl"
    >
      <div className="grid grid-cols-5 gap-1">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              aria-current={isActive ? "page" : undefined}
              className={`flex min-h-14 flex-col items-center justify-center rounded-2xl text-[11px] font-semibold transition ${
                isActive
                  ? "bg-white/[0.1] text-[#f3d27d]"
                  : "text-[#9b948b] hover:bg-white/[0.06] hover:text-[#f7f3ea]"
              }`}
            >
              <span className="text-base leading-none" aria-hidden="true">
                {tab.icon}
              </span>
              <span className="mt-1">{tab.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
}
