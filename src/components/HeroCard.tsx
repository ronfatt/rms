import Image from "next/image";
import { CTAButton } from "./CTAButton";
import { GlassCard } from "./GlassCard";

export function HeroCard() {
  return (
    <GlassCard
      as="section"
      className="relative isolate overflow-hidden px-5 pb-5 pt-6 fade-up"
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#d4af5f] via-[#f5f0df] to-[#75a7ff]" />
      <div className="absolute right-[-42px] top-10 h-44 w-44 rounded-[44px] bg-gradient-to-br from-[#d4af5f]/28 via-[#4d65ff]/18 to-transparent blur-2xl" />
      <div className="relative">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.26em] text-[#d7bc74]">
              AI Creative Director
            </p>
            <p className="mt-1 text-xs text-[#b9b1a4]">Kuala Lumpur / Global</p>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/12 bg-black/30 text-sm font-bold text-[#f6d47d]">
            R.ON
          </div>
        </div>

        <h1 className="max-w-[11ch] text-5xl font-semibold leading-[0.94] tracking-normal text-[#fff8ea]">
          AI + Director Creative Studio
        </h1>
        <p className="mt-4 text-base font-medium text-[#ead9ab]">
          Video Creator · Music Producer · Vibe Coder
        </p>
        <p className="mt-4 rounded-3xl border border-[#d8bd74]/20 bg-[#d8bd74]/10 px-4 py-3 text-xl font-semibold leading-tight text-[#fff3cf]">
          I turn ideas into cinematic systems.
        </p>
        <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#d1cabf]">
          AI video, music and app-like builds with director-level taste.
        </p>
        <p className="mt-3 text-sm leading-6 text-[#aaa29a]">
          AI影像创作 · 音乐制作 · 导演思维 · Vibe Coding
          <br />
          把创意变成影像、声音与产品体验。
        </p>

        <div className="mt-5 overflow-hidden rounded-[28px] border border-white/10 bg-black/30">
          <div className="relative aspect-[16/9]">
            <Image
              src="/ai/director-concept.webp"
              alt="AI-generated cinematic director visual"
              fill
              priority
              sizes="(max-width: 480px) calc(100vw - 56px), 424px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-white/5" />
            <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#f3d27d]">
                  AI Visual System
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Concept · Scene · Sound
                </p>
              </div>
              <span className="rounded-full bg-white/12 px-3 py-2 text-xs font-semibold text-white backdrop-blur-md">
                Directed
              </span>
            </div>
          </div>
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {["AI video", "Music", "Vibe coding", "Creative direction"].map(
            (tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-[#e7decd]"
              >
                {tag}
              </span>
            ),
          )}
        </div>

        <div className="mt-7 grid grid-cols-2 gap-3">
          <CTAButton href="#works">View Capabilities</CTAButton>
          <CTAButton href="#contact" tone="secondary">
            Build With Me
          </CTAButton>
        </div>
      </div>
    </GlassCard>
  );
}
