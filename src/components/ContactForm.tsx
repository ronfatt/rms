"use client";

import { type FormEvent, useMemo, useState } from "react";
import { siteLinks } from "@/data/site";
import { CTAButton } from "./CTAButton";
import { GlassCard } from "./GlassCard";

const projectTypes = [
  "AI Music Video Package",
  "Creative Direction System",
  "Vibe Coding MVP",
  "Request private reel access",
  "Not sure yet",
];

const budgetRanges = [
  "Under RM 2,000",
  "RM 2,000 - RM 5,000",
  "RM 5,000 - RM 10,000",
  "RM 10,000+",
];

const timelines = ["ASAP", "1 - 2 weeks", "This month", "Flexible"];

const nextSteps = ["Send brief", "Shape direction", "Build the system"];

type BriefState = {
  projectType: string;
  timeline: string;
  budget: string;
  demoLink: string;
  contact: string;
  message: string;
};

const initialBrief: BriefState = {
  projectType: projectTypes[0],
  timeline: timelines[2],
  budget: budgetRanges[1],
  demoLink: "",
  contact: "",
  message: "",
};

export function ContactForm() {
  const [brief, setBrief] = useState<BriefState>(initialBrief);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [statusMessage, setStatusMessage] = useState("");

  const whatsappHref = useMemo(() => {
    const text = buildBriefText(brief);
    return `https://wa.me/${siteLinks.whatsappNumber}?text=${encodeURIComponent(
      text,
    )}`;
  }, [brief]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setStatusMessage("Sending brief...");

    const response = await fetch("/api/brief", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(brief),
    });

    if (response.ok) {
      setStatus("sent");
      setStatusMessage("Brief sent to R.ON.");
      return;
    }

    setStatus("error");
    setStatusMessage(
      "Direct email needs RESEND_API_KEY. WhatsApp is ready with your brief.",
    );
  }

  function updateBrief(key: keyof BriefState, value: string) {
    setBrief((current) => ({ ...current, [key]: value }));
  }

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
      <form className="space-y-4" onSubmit={handleSubmit}>
        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#fff8ea]">
            What are you building?
          </span>
          <select
            name="projectType"
            className="min-h-12 w-full rounded-2xl border border-white/10 bg-[#111113] px-4 text-sm text-[#f7f3ea]"
            value={brief.projectType}
            onChange={(event) => updateBrief("projectType", event.target.value)}
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
            value={brief.timeline}
            onChange={(event) => updateBrief("timeline", event.target.value)}
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
            value={brief.budget}
            onChange={(event) => updateBrief("budget", event.target.value)}
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
            value={brief.demoLink}
            onChange={(event) => updateBrief("demoLink", event.target.value)}
          />
        </label>

        <label className="block">
          <span className="mb-2 block text-sm font-semibold text-[#fff8ea]">
            Your email / WhatsApp
          </span>
          <input
            name="contact"
            type="text"
            placeholder="How should R.ON reply?"
            className="min-h-12 w-full rounded-2xl border border-white/10 bg-[#111113] px-4 text-sm text-[#f7f3ea] placeholder:text-[#766f66]"
            value={brief.contact}
            onChange={(event) => updateBrief("contact", event.target.value)}
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
            value={brief.message}
            onChange={(event) => updateBrief("message", event.target.value)}
          />
        </label>

        {statusMessage ? (
          <p
            className={`rounded-2xl border px-4 py-3 text-sm ${
              status === "sent"
                ? "border-[#8fb7ff]/20 bg-[#8fb7ff]/10 text-[#cfe0ff]"
                : "border-[#d8bd74]/20 bg-[#d8bd74]/10 text-[#f0dfb3]"
            }`}
          >
            {statusMessage}
          </p>
        ) : null}

        <div className="grid grid-cols-1 gap-3">
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-[#f3d27d] px-5 text-sm font-semibold text-[#101010] shadow-[0_14px_34px_rgba(211,172,87,0.28)] transition duration-200 hover:bg-[#ffe29a] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Creative Brief"}
          </button>
          <div className="grid grid-cols-2 gap-3">
            <CTAButton href={whatsappHref} tone="secondary" target="_blank">
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

function buildBriefText(brief: BriefState) {
  return [
    "Hi R.ON, I want to build something.",
    "",
    `Project: ${brief.projectType}`,
    `Timeline: ${brief.timeline}`,
    `Budget: ${brief.budget}`,
    `Reference: ${brief.demoLink || "-"}`,
    `Contact: ${brief.contact || "-"}`,
    "",
    `Audience feeling: ${brief.message || "-"}`,
  ].join("\n");
}
