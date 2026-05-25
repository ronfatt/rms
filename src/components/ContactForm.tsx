"use client";

import { siteLinks } from "@/data/site";
import { CTAButton } from "./CTAButton";
import { GlassCard } from "./GlassCard";

const projectTypes = [
  "Full song production",
  "Songwriting",
  "Arrangement",
  "Vocal production",
  "Brand music / jingle",
  "Film scoring",
];

const budgetRanges = [
  "Under RM 2,000",
  "RM 2,000 - RM 5,000",
  "RM 5,000 - RM 10,000",
  "RM 10,000+",
];

export function ContactForm() {
  return (
    <GlassCard as="section" className="p-4">
      <form className="space-y-4">
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#fff8ea]">
            Project type
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
            Demo or file link
          </span>
          <input
            name="demoLink"
            type="url"
            placeholder="Google Drive, YouTube, SoundCloud..."
            className="min-h-12 w-full rounded-2xl border border-white/10 bg-[#111113] px-4 text-sm text-[#f7f3ea] placeholder:text-[#766f66]"
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#fff8ea]">
            Message
          </span>
          <textarea
            name="message"
            rows={5}
            placeholder="Tell R.ON what you are building, your timeline and what kind of sound you hear."
            className="w-full resize-none rounded-2xl border border-white/10 bg-[#111113] px-4 py-3 text-sm leading-6 text-[#f7f3ea] placeholder:text-[#766f66]"
          />
        </label>

        <div className="grid grid-cols-1 gap-3">
          <CTAButton
            href={`mailto:${siteLinks.bookingEmail}?subject=Project%20Inquiry%20for%20R.ON%20Meraki%20Studio`}
            className="w-full"
          >
            Email Booking
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
