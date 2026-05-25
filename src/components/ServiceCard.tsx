import type { Service } from "@/data/site";
import { GlassCard } from "./GlassCard";
import { CTAButton } from "./CTAButton";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <GlassCard as="article" className="p-4">
      <h3 className="text-xl font-semibold tracking-normal text-[#fff8ea]">
        {service.title}
      </h3>
      <p className="mt-2 text-sm font-medium text-[#d7bc74]">{service.for}</p>
      <p className="mt-3 text-sm leading-6 text-[#c4bbb0]">
        {service.description}
      </p>
      <div className="mt-4 rounded-2xl border border-[#d8bd74]/20 bg-[#d8bd74]/10 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#d7bc74]">
          Best for
        </p>
        <p className="mt-2 text-sm leading-6 text-[#f0dfb3]">
          {service.bestFor}
        </p>
      </div>
      <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-3">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#8eaef8]">
          You receive
        </p>
        <p className="mt-2 text-sm leading-6 text-[#ddd4c7]">
          {service.receives}
        </p>
      </div>
      <CTAButton href="#contact" tone="secondary" className="mt-4 w-full">
        Start Brief
      </CTAButton>
    </GlassCard>
  );
}
