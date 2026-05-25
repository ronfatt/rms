import Image from "next/image";
import type { Work } from "@/data/site";
import { GlassCard } from "./GlassCard";

type FeaturedBuildCardProps = {
  work: Work;
  index: number;
};

const buildLabels = ["AI Video", "Music", "Code"];

export function FeaturedBuildCard({ work, index }: FeaturedBuildCardProps) {
  return (
    <GlassCard as="article" className="overflow-hidden">
      <div className="flex min-h-[132px]">
        <div className="relative w-[30%] min-w-[104px] overflow-hidden bg-[#111113]">
          <Image
            src={work.image}
            alt={`${work.title} AI-generated artwork`}
            fill
            sizes="104px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-black/45" />
        </div>
        <div className="flex min-w-0 flex-1 flex-col justify-between p-4">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="rounded-full bg-[#f3d27d] px-2.5 py-1 text-[11px] font-bold text-[#101010]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] font-semibold text-[#cfc7bb]">
                {buildLabels[index] ?? work.genre}
              </span>
            </div>
            <h3 className="text-xl font-semibold leading-tight tracking-normal text-[#fff8ea]">
              {work.title}
            </h3>
            <p className="mt-2 text-sm leading-5 text-[#bdb5aa]">
              {work.role}
            </p>
          </div>
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-[#d5ccbf]">
            {work.description}
          </p>
        </div>
      </div>
    </GlassCard>
  );
}
