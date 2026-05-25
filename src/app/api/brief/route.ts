import { NextResponse } from "next/server";
import { siteLinks } from "@/data/site";

type BriefPayload = {
  projectType?: string;
  timeline?: string;
  budget?: string;
  demoLink?: string;
  contact?: string;
  message?: string;
};

export async function POST(request: Request) {
  const payload = (await request.json()) as BriefPayload;
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail =
    process.env.CONTACT_FROM_EMAIL || "R.ON Meraki Studio <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email service is not configured. Add RESEND_API_KEY to enable direct email delivery.",
      },
      { status: 503 },
    );
  }

  const subject = `Creative Brief: ${payload.projectType || "New inquiry"}`;
  const text = [
    "New creative brief from ronmerakistudio.com",
    "",
    `Project type: ${payload.projectType || "-"}`,
    `Timeline: ${payload.timeline || "-"}`,
    `Budget: ${payload.budget || "-"}`,
    `Reference: ${payload.demoLink || "-"}`,
    `Contact: ${payload.contact || "-"}`,
    "",
    "Audience feeling / message:",
    payload.message || "-",
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [siteLinks.briefEmail],
      subject,
      text,
      reply_to: payload.contact?.includes("@") ? payload.contact : undefined,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Email delivery failed. Please try WhatsApp instead." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
