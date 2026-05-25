import { siteLinks, works } from "@/data/site";
import { CTAButton } from "./CTAButton";
import { GlassCard } from "./GlassCard";

export function PrivateReelCard() {
  return (
    <GlassCard as="section" className="p-5">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#d7bc74]">
        Private Reel
      </p>
      <h2 className="mt-2 text-2xl font-semibold tracking-normal text-[#fff8ea]">
        Not public. Curated access.
      </h2>
      <p className="mt-3 text-sm leading-6 text-[#c8c1b6]">
        Selected video works are shared privately to protect client context,
        unreleased material and creative strategy.
      </p>
      <div className="mt-4 grid gap-2">
        {works.map((work) => (
          <div
            key={work.title}
            className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-black/20 px-3 py-3"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-[#fff8ea]">
                {work.title}
              </p>
              <p className="truncate text-xs text-[#b9b1a4]">
                {work.privateReel}
              </p>
            </div>
            <a
              href={privateReelMailto(work.title)}
              className="shrink-0 rounded-full border border-[#d8bd74]/20 bg-[#d8bd74]/10 px-3 py-2 text-xs font-semibold text-[#f0dfb3] transition hover:bg-[#d8bd74]/15"
            >
              Request
            </a>
          </div>
        ))}
      </div>
      <CTAButton
        href={`mailto:${siteLinks.bookingEmail}?subject=Request%20Private%20Reel%20Access&body=Hi%20R.ON%2C%0A%0AI%20would%20like%20to%20request%20private%20reel%20access.%0A%0AProject%20type%3A%0ACompany%20%2F%20name%3A%0AWhat%20I%20want%20to%20build%3A%0A%0AThanks.`}
        className="mt-5 w-full"
      >
        Request Private Reel
      </CTAButton>
    </GlassCard>
  );
}

function privateReelMailto(title: string) {
  const subject = encodeURIComponent(`Request Private Reel Access: ${title}`);
  const body = encodeURIComponent(
    `Hi R.ON,\n\nI would like to request private reel access for: ${title}.\n\nProject type:\nCompany / name:\nWhat I want to build:\n\nThanks.`,
  );

  return `mailto:${siteLinks.bookingEmail}?subject=${subject}&body=${body}`;
}
