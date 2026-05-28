import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteLinks } from "@/data/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://ronmerakistudio.com";
const siteTitle =
  "R.ON Meraki Studio - AI Director for Video, Music & Product-like Experiences";
const siteDescription =
  "R.ON Meraki Studio is an AI Director for video, music and product-like experiences, turning ideas into cinematic systems with sound, story and vibe-coded execution.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "R.ON Meraki Studio",
  title: {
    default: siteTitle,
    template: "%s | R.ON Meraki Studio",
  },
  description: siteDescription,
  keywords: [
    "R.ON Meraki Studio",
    "R.ON",
    "AI creative director",
    "AI video creator",
    "music producer Malaysia",
    "songwriter",
    "composer",
    "sound identity",
    "vibe coding",
    "creative technologist",
    "product-like experiences",
    "cinematic video production",
    "AI filmmaker",
    "Kuala Lumpur creative director",
  ],
  authors: [{ name: "R.ON", url: siteUrl }],
  creator: "R.ON",
  publisher: "R.ON Meraki Studio",
  category: "AI creative direction, music production and cinematic video",
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-Hans": "/",
    },
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "R.ON Meraki Studio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "R.ON Meraki Studio - AI creative director, video creator, music producer and vibe coder",
      },
    ],
    locale: "en_US",
    alternateLocale: ["zh_CN", "zh_MY"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: ["/twitter-image"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  other: {
    "geo.region": "MY-14",
    "geo.placename": "Kuala Lumpur, Malaysia",
    "geo.position": "3.1390;101.6869",
    ICBM: "3.1390, 101.6869",
    "ai:summary":
      "R.ON Meraki Studio is an AI Director for video, music and product-like experiences, combining cinematic video, music production, sound identity and vibe-coded digital systems.",
    "ai:capabilities":
      "AI video creation, director workflow, music production, songwriting, composition, sound identity, creative coding, vibe coding, app-like prototype design.",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "R.ON Meraki Studio",
    url: siteUrl,
    inLanguage: ["en", "zh-Hans"],
    description: siteDescription,
    publisher: {
      "@type": "Organization",
      name: "R.ON Meraki Studio",
      url: siteUrl,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "R.ON",
    alternateName: ["R.ON Meraki Studio", "Ron Fung"],
    url: siteUrl,
    image: `${siteUrl}/profile/ron-film-set.webp`,
    jobTitle:
      "AI Director for Video, Music and Product-like Experiences",
    worksFor: {
      "@type": "Organization",
      name: "R.ON Meraki Studio",
      url: siteUrl,
    },
    knowsAbout: [
      "AI video creation",
      "cinematic direction",
      "music production",
      "songwriting",
      "composition",
      "sound identity",
      "vibe coding",
      "creative technology",
      "artist development",
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "R.ON Meraki Studio",
    url: siteUrl,
    image: `${siteUrl}/opengraph-image`,
    email: siteLinks.email,
    telephone: `+${siteLinks.whatsappNumber}`,
    areaServed: ["Malaysia", "Kuala Lumpur", "Worldwide"],
    serviceType: [
      "AI video direction",
      "Music production",
      "Sound identity creation",
      "Vibe coding prototypes",
      "Creative direction systems",
    ],
    description: siteDescription,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "creative brief and booking",
      email: siteLinks.bookingEmail,
      telephone: `+${siteLinks.whatsappNumber}`,
      availableLanguage: ["English", "Chinese", "Malay"],
    },
  },
];

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
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
