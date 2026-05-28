"use client";

import { useEffect, useState } from "react";
import { aiSignals, services, works } from "@/data/site";
import { AIStackCard } from "./AIStackCard";
import { AISoundBrief } from "./AISoundBrief";
import { CaseStudyCard } from "./CaseStudyCard";
import { ContactForm } from "./ContactForm";
import { CTAButton } from "./CTAButton";
import { DirectorBoard } from "./DirectorBoard";
import { FeaturedBuildCard } from "./FeaturedBuildCard";
import { GlassCard } from "./GlassCard";
import { HeroCard } from "./HeroCard";
import { MethodCard } from "./MethodCard";
import { PrivateReelCard } from "./PrivateReelCard";
import { SectionHeader } from "./SectionHeader";
import { ServiceCard } from "./ServiceCard";

const tabs = [
  { id: "home", label: "Home", icon: "⌂" },
  { id: "works", label: "Cases", icon: "♪" },
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

            <div className="mt-6">
              <DirectorBoard />
            </div>

            <div className="mt-8">
              <SectionHeader
                eyebrow="Selected Proof"
                title="Video. Sound. Product feel."
                copy="Three case lanes that show the range."
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

            <GlassCard className="mt-8 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7bc74]">
                Creative Brief
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-normal">
                Bring the idea. I will shape the system around it.
              </h2>
              <p className="mt-3 text-sm leading-6 text-[#c8c1b6]">
                AI video, original sound and app-like prototypes for stronger ideas.
              </p>
              <CTAButton href="#contact" className="mt-5 w-full">
                Start a Creative Brief
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
              <AIStackCard />
            </div>
            <div className="mt-4">
              <AISoundBrief signals={aiSignals} />
            </div>
          </section>

          <section id="works" className="mt-12 scroll-mt-6">
            <SectionHeader
              eyebrow="Case Studies"
              title="Proof across mediums."
              copy="Case-led work across video, sound and interface."
            />
            <PrivateReelCard />
            <div className="grid gap-4">
              {works.map((work, index) => (
                <CaseStudyCard key={work.title} work={work} index={index} />
              ))}
            </div>
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
              eyebrow="Creative Brief"
              title="Send a Creative Brief."
              copy="For video, music and product-like experiences."
            />
            <ContactForm />
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
