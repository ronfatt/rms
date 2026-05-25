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
              Premium Studio
            </p>
            <p className="mt-1 text-xs text-[#b9b1a4]">Kuala Lumpur / Global</p>
          </div>
          <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/12 bg-black/30 text-sm font-bold text-[#f6d47d]">
            R.ON
          </div>
        </div>

        <h1 className="max-w-[10ch] text-5xl font-semibold leading-[0.94] tracking-normal text-[#fff8ea]">
          R.ON Meraki Studio
        </h1>
        <p className="mt-4 text-base font-medium text-[#ead9ab]">
          Music Producer · Songwriter · Composer
        </p>
        <p className="mt-4 max-w-sm text-[15px] leading-7 text-[#d1cabf]">
          Creating premium sound identities for artists, brands, film and
          stories.
        </p>
        <p className="mt-3 text-sm leading-6 text-[#aaa29a]">
          音乐制作 · 词曲创作 · 编曲 · 配乐
          <br />
          为艺人、品牌与影像打造有记忆点的声音。
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {["AI-assisted brief", "Release-ready", "Artist direction"].map(
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
          <CTAButton href="#works">Listen to Works</CTAButton>
          <CTAButton href="#contact" tone="secondary">
            Work With R.ON
          </CTAButton>
        </div>
      </div>
    </GlassCard>
  );
}
