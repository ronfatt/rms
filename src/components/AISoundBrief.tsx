import type { AiSignal } from "@/data/site";
import { GlassCard } from "./GlassCard";

type AISoundBriefProps = {
  signals: AiSignal[];
};

export function AISoundBrief({ signals }: AISoundBriefProps) {
  return (
    <GlassCard
      as="section"
      className="relative isolate overflow-hidden p-5"
      aria-labelledby="ai-sound-brief-title"
    >
      <div className="absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-[#8fb7ff] to-transparent" />
      <div className="absolute right-[-34px] top-[-28px] h-28 w-28 rounded-full bg-[#75a7ff]/18 blur-2xl" />
      <div className="relative">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8fb7ff]">
              AI Sound Brief
            </p>
            <h2
              id="ai-sound-brief-title"
              className="mt-2 text-2xl font-semibold tracking-normal text-[#fff8ea]"
            >
              Turn references into direction.
            </h2>
          </div>
          <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#8fb7ff]/25 bg-[#8fb7ff]/10 text-sm font-bold text-[#cfe0ff]">
            AI
          </div>
        </div>
        <p className="text-sm leading-6 text-[#c8c1b6]">
          A premium intake layer for artists: mood, references, vocal identity
          and release goals become a cleaner creative brief before production
          starts.
        </p>

        <div className="mt-5 grid gap-3">
          {signals.map((signal) => (
            <div
              key={signal.label}
              className="rounded-3xl border border-white/10 bg-black/20 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7bc74]">
                  {signal.label}
                </p>
                <span className="rounded-full bg-[#8fb7ff]/10 px-3 py-1 text-[11px] font-semibold text-[#cfe0ff]">
                  Assisted
                </span>
              </div>
              <p className="mt-2 text-sm font-semibold text-[#fff8ea]">
                {signal.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-[#ada69d]">
                {signal.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </GlassCard>
  );
}
