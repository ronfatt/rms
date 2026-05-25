"use client";

import Image from "next/image";
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
import { AIStackCard } from "./AIStackCard";
import { AISoundBrief } from "./AISoundBrief";
import { ArtistCard } from "./ArtistCard";
import { CaseStudyCard } from "./CaseStudyCard";
import { ContactForm } from "./ContactForm";
import { CreativeSignalCard } from "./CreativeSignalCard";
import { CTAButton } from "./CTAButton";
import { DirectorBoard } from "./DirectorBoard";
import { FeaturedBuildCard } from "./FeaturedBuildCard";
import { GlassCard } from "./GlassCard";
import { HeroCard } from "./HeroCard";
import { MethodCard } from "./MethodCard";
import { PrivateReelCard } from "./PrivateReelCard";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";
import { StudioMetrics } from "./StudioMetrics";
import { TrustBadge } from "./TrustBadge";

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
            <CreativeSignalCard />

            <div className="mt-8">
              <DirectorBoard />
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
              title="Think like a director. Move like a system."
              copy="Direct. Generate. Build."
            />
            <MethodCard />
            <div className="mt-4">
              <PrivateReelCard />
            </div>
            <AIStackCard />
            <div className="mt-4">
              <CreativeSignalCard />
            </div>
            <AISoundBrief signals={aiSignals} />
          </section>

          <section id="works" className="mt-12 scroll-mt-6">
            <SectionHeader
              eyebrow="Case Studies"
              title="Proof across mediums."
              copy="Private reels. Case-led presentation."
            />
            <PrivateReelCard />
            <div className="grid gap-4">
              {works.map((work, index) => (
                <CaseStudyCard key={work.title} work={work} index={index} />
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
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-[24px] border border-white/10 bg-[#111113]">
                <Image
                  src="/profile/ron-studio-desk.webp"
                  alt="R.ON official profile portrait"
                  fill
                  sizes="(max-width: 480px) calc(100vw - 72px), 408px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/5" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#f3d27d]">
                    Official Profile Visual
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    R.ON · Creative x Business
                  </p>
                </div>
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
