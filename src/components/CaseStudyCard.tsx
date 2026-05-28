import Image from "next/image";
import type { Work } from "@/data/site";
import { GlassCard } from "./GlassCard";

type CaseStudyCardProps = {
  work: Work;
  index: number;
};

export function CaseStudyCard({ work, index }: CaseStudyCardProps) {
  return (
    <GlassCard as="article" className="overflow-hidden">
      <div className="relative aspect-[16/10] bg-[#111113]">
        <Image
          src={work.image}
          alt={`${work.title} case study artwork`}
          fill
          sizes="(max-width: 480px) calc(100vw - 32px), 448px"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-white/5" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d27d]">
            Case {String(index + 1).padStart(2, "0")} · {work.genre}
          </p>
          <h3 className="mt-1 text-2xl font-semibold tracking-normal text-white">
            {work.title}
          </h3>
        </div>
      </div>
      <div className="p-4">
        <div className="grid gap-3">
          <CaseLine label="Challenge" value={work.goal} />
          <CaseLine label="Direction" value={work.direction} />
          <CaseLine label="Deliverable" value={work.output} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {work.tools.map((tool) => (
            <span
              key={tool}
              className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-[#d8d0c4]"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="mt-4 rounded-2xl border border-[#d8bd74]/20 bg-[#d8bd74]/10 p-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7bc74]">
            Private video access
          </p>
          <p className="mt-2 text-sm leading-6 text-[#f0dfb3]">
            {work.privateReel}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}

function CaseLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-3">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8fb7ff]">
        {label}
      </p>
      <p className="mt-2 text-sm leading-6 text-[#d8d0c4]">{value}</p>
    </div>
  );
}
