import { GlassCard } from "./GlassCard";

const methods = [
  {
    title: "Direct",
    copy: "Find the idea, emotion and world.",
  },
  {
    title: "Generate",
    copy: "Explore scenes, sound and interface fast.",
  },
  {
    title: "Build",
    copy: "Ship the strongest version with taste.",
  },
];

export function MethodCard() {
  return (
    <GlassCard as="section" className="p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7bc74]">
        Method
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-normal text-[#fff8ea]">
        Think like a director. Move like a system.
      </h2>
      <div className="mt-5 grid gap-3">
        {methods.map((method, index) => (
          <div key={method.title} className="flex gap-3">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#f3d27d] text-xs font-bold text-[#101010]">
              {index + 1}
            </span>
            <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <p className="text-sm font-semibold text-[#fff8ea]">
                {method.title}
              </p>
              <p className="mt-1 text-sm leading-6 text-[#c8c1b6]">
                {method.copy}
              </p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}
