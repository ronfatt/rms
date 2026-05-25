import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ronmerakistudio.com"),
  title: "R.ON Meraki Studio - AI Creative Director, Video, Music & Vibe Coding",
  description:
    "Official website of R.ON Meraki Studio. AI creative direction, video creation, music production, sound identity and vibe-coded digital experiences.",
  openGraph: {
    title:
      "R.ON Meraki Studio - AI Creative Director, Video, Music & Vibe Coding",
    description:
      "AI creative direction, video creation, music production, sound identity and vibe-coded digital experiences.",
    url: "https://ronmerakistudio.com",
    siteName: "R.ON Meraki Studio",
    images: [
      {
        url: "/og-placeholder.svg",
        width: 1200,
        height: 630,
        alt: "R.ON Meraki Studio social preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "R.ON Meraki Studio - AI Creative Director, Video, Music & Vibe Coding",
    description:
      "AI-enhanced video, music, creative direction and app-like prototypes.",
    images: ["/og-placeholder.svg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
