import type { Work } from "@/data/site";
import { GlassCard } from "./GlassCard";

type AudioPreviewCardProps = {
  work: Work;
};

export function AudioPreviewCard({ work }: AudioPreviewCardProps) {
  return (
    <GlassCard className="sticky top-3 z-10 mb-6 flex items-center gap-3 p-3">
      <button
        type="button"
        aria-label={`Preview ${work.title}`}
        className="grid min-h-12 min-w-12 place-items-center rounded-full bg-[#f3d27d] text-[#101010] transition active:scale-95"
      >
        <span aria-hidden="true" className="ml-0.5 text-base">
          ▶
        </span>
      </button>
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-[#fff8ea]">
          Featured: {work.title}
        </p>
        <p className="truncate text-xs text-[#b9b1a4]">
          Preview UI only · No autoplay
        </p>
      </div>
      <div className="flex h-8 items-end gap-1" aria-hidden="true">
        <span className="h-3 w-1 rounded-full bg-[#d4af5f]" />
        <span className="h-6 w-1 rounded-full bg-[#f6f0df]" />
        <span className="h-4 w-1 rounded-full bg-[#75a7ff]" />
        <span className="h-7 w-1 rounded-full bg-[#d4af5f]" />
      </div>
    </GlassCard>
  );
}
