"use client";

import { useEffect, useState } from "react";
import {
  aiSignals,
  artists,
  expertise,
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
import { DirectorBoard } from "./DirectorBoard";
import { ExpertiseCard } from "./ExpertiseCard";
import { FeaturedBuildCard } from "./FeaturedBuildCard";
import { GlassCard } from "./GlassCard";
import { HeroCard } from "./HeroCard";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { StudioMetrics } from "./StudioMetrics";
import { TrustBadge } from "./TrustBadge";
import { WorkCard } from "./WorkCard";

const tabs = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "works", label: "Builds", icon: "♪" },
  { id: "ai", label: "AI OS", icon: "✧" },
  { id: "services", label: "Offers", icon: "◈" },
  { id: "contact", label: "Brief", icon: "↗" },
];

export function AppShell() {
  const [activeTab, setActiveTab] = useState("home");

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

  return (
    <div className="min-h-dvh bg-[#050506] text-[#f7f3ea]">
      <div className="mx-auto min-h-dvh w-full max-w-[480px] overflow-hidden border-x border-white/[0.06] bg-[linear-gradient(180deg,#101014_0%,#070708_42%,#050506_100%)] shadow-[0_0_80px_rgba(0,0,0,0.55)]">
        <main className="px-4 pb-[calc(112px+env(safe-area-inset-bottom))] pt-[calc(18px+env(safe-area-inset-top))]">
          <section id="home" className="scroll-mt-6">
            <HeroCard />
            <StudioMetrics metrics={studioMetrics} />
            <AudioPreviewCard work={works[0]} />

            <div className="mt-8">
              <DirectorBoard />
            </div>

            <div className="mt-8">
              <AISoundBrief signals={aiSignals} />
            </div>

            <div className="mt-8">
              <SectionHeader
                eyebrow="What I amplify"
                title="AI makes me faster. Taste makes it powerful."
                copy="Director thinking, music, video and code in one system."
              />
              <div className="grid gap-3">
                {expertise.map((item, index) => (
                  <ExpertiseCard
                    key={item.title}
                    item={item}
                    index={index}
                  />
                ))}
              </div>
            </div>

            <div className="mt-8">
              <SectionHeader
                eyebrow="Featured Builds"
                title="One creative system."
                copy="Three lanes: video, sound and product."
              />
              <div className="grid gap-3">
                {works.map((work, index) => (
                  <FeaturedBuildCard
                    key={work.title}
                    work={work}
                    index={index}
                  />
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
                Collaboration
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal">
                Bring me the idea. I will shape the world around it.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#c8c1b6]">
                AI video, music and app-like prototypes for stronger ideas.
              </p>
              <CTAButton href="#contact" className="mt-5 w-full">
                Start a Build
              </CTAButton>
            </GlassCard>
          </section>

          <section id="ai" className="mt-12 scroll-mt-6">
            <SectionHeader
              eyebrow="AI Director OS"
              title="I use AI like a production crew."
              copy="AI accelerates. Human taste directs."
            />
            <AISoundBrief signals={aiSignals} />
            <GlassCard className="mt-4 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7bc74]">
                Workflow
              </p>
              <div className="mt-4 grid gap-3">
                {[
                  "Find the idea, emotion and world.",
                  "Explore scenes, sound and interface fast.",
                  "Direct the final output with taste.",
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
              eyebrow="Build Library"
              title="Proof across mediums."
              copy="AI video, music and vibe-coded work."
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
              title="Built for creators, brands and bold ideas."
              copy="Three clear ways to build with me."
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
              title="Tell me what you want to build."
              copy="Send the idea. I will shape the direction."
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
                R.ON is an AI creative director, video creator, music producer
                and vibe coder using AI, directing technique and sound design
                to turn ideas into premium creative systems.
              </p>
              <p className="mt-3 text-sm leading-6 text-[#a9a095]">
                Long-form bio, showreel, project decks, logo files and approved
                profile assets can be connected here when final press materials
                are ready.
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

        <BottomNav activeTab={activeTab} />
      </div>
    </div>
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
