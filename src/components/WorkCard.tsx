import type { Work } from "@/data/site";
import { GlassCard } from "./GlassCard";

type WorkCardProps = {
  work: Work;
  compact?: boolean;
};

export function WorkCard({ work, compact = false }: WorkCardProps) {
  return (
    <GlassCard
      as="article"
      className={`group shrink-0 overflow-hidden transition duration-200 hover:-translate-y-1 active:scale-[0.99] ${
        compact ? "w-[78%] max-w-[310px]" : ""
      }`}
    >
      <div
        className={`relative aspect-square bg-gradient-to-br ${work.coverTone}`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.22),transparent_27%),linear-gradient(140deg,transparent,rgba(0,0,0,0.38))]" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/72">
            {work.genre}
          </p>
          <h3 className="mt-1 text-2xl font-semibold tracking-normal text-white">
            {work.title}
          </h3>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[#fff8ea]">
              {work.artist}
            </p>
            <p className="mt-1 text-xs text-[#d7bc74]">{work.role}</p>
          </div>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[#cfc7bb]">
            {work.genre}
          </span>
        </div>
        <p className="mt-3 text-sm leading-6 text-[#bdb5aa]">
          {work.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {Object.entries(work.platforms).map(([platform, href]) =>
            href ? (
              <a
                key={platform}
                href={href}
                className="min-h-11 rounded-full border border-white/10 bg-white/[0.06] px-3 py-3 text-xs font-semibold capitalize text-[#f7f3ea] transition hover:bg-white/[0.11]"
              >
                {platform === "apple" ? "Apple Music" : platform}
              </a>
            ) : null,
          )}
        </div>
      </div>
    </GlassCard>
  );
}
