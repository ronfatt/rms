import Image from "next/image";
import { GlassCard } from "./GlassCard";

const frames = [
  { label: "Concept", image: "/ai/director-concept.webp" },
  { label: "Scene", image: "/ai/director-scene.webp" },
  { label: "Sound", image: "/ai/director-sound.webp" },
];

export function DirectorBoard() {
  return (
    <GlassCard as="section" className="p-4">
      <div className="mb-4 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8fb7ff]">
            Director Board
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-normal text-[#fff8ea]">
            Idea becomes a world.
          </h2>
        </div>
        <span className="rounded-full border border-white/10 px-3 py-2 text-xs font-semibold text-[#d9d0c4]">
          AI-assisted
        </span>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {frames.map((frame) => (
          <div
            key={frame.label}
            className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-[#111113]"
          >
            <Image
              src={frame.image}
              alt={`${frame.label} AI-generated visual frame`}
              fill
              sizes="(max-width: 480px) 31vw, 145px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-white/5" />
            <p className="absolute bottom-3 left-3 right-3 text-sm font-semibold text-white">
              {frame.label}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {["Prompt direction", "Edit rhythm", "Music mood", "Interface feel"].map(
          (item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-black/20 px-3 py-3 text-sm font-medium text-[#d8d0c4]"
            >
              {item}
            </div>
          ),
        )}
      </div>
    </GlassCard>
  );
}
