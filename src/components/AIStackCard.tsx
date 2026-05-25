import { aiStack } from "@/data/site";
import { GlassCard } from "./GlassCard";

export function AIStackCard() {
  return (
    <GlassCard as="section" className="p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8fb7ff]">
        AI Stack
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-normal text-[#fff8ea]">
        Tools are not the flex. Workflow is.
      </h2>
      <div className="mt-4 flex flex-wrap gap-2">
        {aiStack.map((tool) => (
          <span
            key={tool}
            className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-[#d8d0c4]"
          >
            {tool}
          </span>
        ))}
      </div>
    </GlassCard>
  );
}
