"use client";

import { siteLinks } from "@/data/site";
import { CTAButton } from "./CTAButton";
import { GlassCard } from "./GlassCard";

const projectTypes = [
  "AI Music Video Package",
  "Creative Direction System",
  "Vibe Coding MVP",
  "Not sure yet",
];

const budgetRanges = [
  "Under RM 2,000",
  "RM 2,000 - RM 5,000",
  "RM 5,000 - RM 10,000",
  "RM 10,000+",
];

const timelines = [
  "ASAP",
  "1 - 2 weeks",
  "This month",
  "Flexible",
];

const nextSteps = [
  "Send brief",
  "Shape direction",
  "Build the system",
];

export function ContactForm() {
  return (
    <GlassCard as="section" className="p-4">
      <div className="mb-5 rounded-3xl border border-[#8fb7ff]/20 bg-[#8fb7ff]/10 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8fb7ff]">
          Creative Brief
        </p>
        <h3 className="mt-2 text-xl font-semibold text-[#fff8ea]">
          Start with the idea. I will shape the system.
        </h3>
        <p className="mt-2 text-sm leading-6 text-[#c8c1b6]">
          Send references, deadline and feeling. I will turn it into direction.
        </p>
      </div>
      <div className="mb-5 grid grid-cols-3 gap-2">
        {nextSteps.map((step, index) => (
          <div
            key={step}
            className="min-h-[82px] rounded-3xl border border-white/10 bg-black/20 p-3"
          >
            <span className="text-xs font-bold text-[#f3d27d]">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-2 text-xs font-semibold leading-4 text-[#f7f3ea]">
              {step}
            </p>
          </div>
        ))}
      </div>
      <form className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#fff8ea]">
            What are you building?
          </span>
          <select
            name="projectType"
            className="min-h-12 w-full rounded-2xl border border-white/10 bg-[#111113] px-4 text-sm text-[#f7f3ea]"
            defaultValue={projectTypes[0]}
          >
            {projectTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#fff8ea]">
            Timeline
          </span>
          <select
            name="timeline"
            className="min-h-12 w-full rounded-2xl border border-white/10 bg-[#111113] px-4 text-sm text-[#f7f3ea]"
            defaultValue={timelines[2]}
          >
            {timelines.map((timeline) => (
              <option key={timeline}>{timeline}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#fff8ea]">
            Budget range
          </span>
          <select
            name="budget"
            className="min-h-12 w-full rounded-2xl border border-white/10 bg-[#111113] px-4 text-sm text-[#f7f3ea]"
            defaultValue={budgetRanges[1]}
          >
            {budgetRanges.map((range) => (
              <option key={range}>{range}</option>
            ))}
          </select>
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#fff8ea]">
            Reference, demo or file link
          </span>
          <input
            name="demoLink"
            type="url"
            placeholder="YouTube, Drive, Figma, website, song demo..."
            className="min-h-12 w-full rounded-2xl border border-white/10 bg-[#111113] px-4 text-sm text-[#f7f3ea] placeholder:text-[#766f66]"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#fff8ea]">
            What should the audience feel?
          </span>
          <textarea
            name="message"
            rows={5}
            placeholder="Idea, mood, audience, platform, desired result."
            className="w-full resize-none rounded-2xl border border-white/10 bg-[#111113] px-4 py-3 text-sm leading-6 text-[#f7f3ea] placeholder:text-[#766f66]"
          />
        </label>

        <div className="grid grid-cols-1 gap-3">
          <CTAButton
            href={`mailto:${siteLinks.bookingEmail}?subject=Project%20Inquiry%20for%20R.ON%20Meraki%20Studio`}
            className="w-full"
          >
            Send Creative Brief
          </CTAButton>
          <div className="grid grid-cols-2 gap-3">
            <CTAButton href={siteLinks.whatsapp} tone="secondary">
              WhatsApp
            </CTAButton>
            <CTAButton href={siteLinks.instagram} tone="secondary">
              Instagram
            </CTAButton>
          </div>
        </div>
      </form>
    </GlassCard>
  );
}
