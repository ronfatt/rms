import type { Expertise } from "@/data/site";
import { GlassCard } from "./GlassCard";

type ExpertiseCardProps = {
  item: Expertise;
  index: number;
};

export function ExpertiseCard({ item, index }: ExpertiseCardProps) {
  return (
    <GlassCard as="article" className="p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#f3d27d] text-sm font-bold text-[#101010]">
          {String(index + 1).padStart(2, "0")}
        </span>
        <span className="rounded-full border border-[#8fb7ff]/20 bg-[#8fb7ff]/10 px-3 py-2 text-xs font-semibold text-[#cfe0ff]">
          {item.signal}
        </span>
      </div>
      <h3 className="text-xl font-semibold tracking-normal text-[#fff8ea]">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[#c8c1b6]">
        {item.description}
      </p>
    </GlassCard>
  );
}
