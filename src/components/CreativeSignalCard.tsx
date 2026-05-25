import Image from "next/image";
import { aiStack, videoHostingOptions } from "@/data/site";
import { GlassCard } from "./GlassCard";

export function CreativeSignalCard() {
  return (
    <GlassCard className="sticky top-3 z-10 mb-6 p-3">
      <div className="flex items-center gap-3">
        <div className="relative min-h-12 min-w-12 overflow-hidden rounded-full bg-[#111113]">
          <Image
            src="/profile/ron-studio-desk.webp"
            alt="R.ON studio workspace"
            fill
            sizes="48px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-[#fff8ea]">
            Creative Signal: AI video · sound · code
          </p>
          <p className="truncate text-xs text-[#b9b1a4]">
            Private reels. No public platform dependency.
          </p>
        </div>
        <div className="flex h-8 items-end gap-1" aria-hidden="true">
          <span className="h-4 w-1 rounded-full bg-[#75a7ff]" />
          <span className="h-7 w-1 rounded-full bg-[#f6f0df]" />
          <span className="h-5 w-1 rounded-full bg-[#d4af5f]" />
        </div>
      </div>
      <div className="mt-3 flex gap-2 overflow-x-auto pb-1 hide-scrollbar">
        {aiStack.slice(0, 5).map((tool) => (
          <span
            key={tool}
            className="shrink-0 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-[#d8d0c4]"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {videoHostingOptions.map((option) => (
          <span
            key={option}
            className="rounded-full border border-[#d8bd74]/20 bg-[#d8bd74]/10 px-3 py-2 text-center text-xs font-semibold text-[#f0dfb3]"
          >
            {option}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
