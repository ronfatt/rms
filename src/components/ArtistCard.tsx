import type { Artist } from "@/data/site";
import { GlassCard } from "./GlassCard";

type ArtistCardProps = {
  artist: Artist;
};

export function ArtistCard({ artist }: ArtistCardProps) {
  return (
    <GlassCard as="article" className="p-4 transition duration-200 hover:-translate-y-1">
      <div className="flex items-center gap-3">
        <div
          className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl ${artist.accent} text-base font-bold text-black`}
          aria-hidden="true"
        >
          {artist.name
            .split(" ")
            .map((part) => part[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-[#fff8ea]">
            {artist.name}
          </h3>
          <p className="text-sm text-[#bdb5aa]">{artist.lane}</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-[#d7bc74]">
        Latest release: {artist.latestRelease}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {artist.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-white/[0.07] px-3 py-2 text-xs text-[#d9d0c4]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-4 flex gap-2">
        {Object.entries(artist.links).map(([label, href]) =>
          href ? (
            <a
              key={label}
              href={href}
              className="min-h-11 rounded-full border border-white/10 px-3 py-3 text-xs font-semibold capitalize text-[#f7f3ea]"
            >
              {label}
            </a>
          ) : null,
        )}
      </div>
    </GlassCard>
  );
}
