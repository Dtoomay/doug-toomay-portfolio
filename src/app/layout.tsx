import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { toJsonLd } from "@/lib/jsonld";
import { CORE_COMPETENCIES, EDUCATION } from "@/lib/resume";
import { FULL_NAME, JOB_TITLE, SITE_NAME, SITE_URL, SOCIAL_LINKS } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${SITE_NAME} | ${FULL_NAME}`;
const description = `${SITE_NAME} (${FULL_NAME}) — ${JOB_TITLE}. Official portfolio and professional profile.`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${SITE_NAME}`,
  },
  description,
  keywords: [
    "Doug Toomay",
    "Douglas Toomay",
    "Doug Toomay portfolio",
    "Douglas Toomay portfolio",
    "Doug Toomay Bernstein-Rein",
    "Doug Toomay Kansas City",
    "Doug Toomay marketing executive",
    "Douglas Toomay Lenexa Kansas",
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title,
    description,
  },
  twitter: {
    card: "summary",
    title,
    description,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: SITE_NAME,
  alternateName: FULL_NAME,
  url: SITE_URL,
  image: `${SITE_URL}/doug-toomay-douglas-toomay-headshot-white.jpeg`,
  jobTitle: JOB_TITLE,
  description,
  worksFor: {
    "@type": "Organization",
    name: "Bernstein-Rein Advertising",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kansas City",
      addressRegion: "MO",
    },
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: EDUCATION.school,
  },
  knowsAbout: CORE_COMPETENCIES.map((competency) => competency.name),
  homeLocation: {
    "@type": "Place",
    name: "Lenexa, Kansas",
  },
  sameAs: SOCIAL_LINKS.map((link) => link.url),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: toJsonLd(personJsonLd) }}
        />
        <div className="fixed inset-0 -z-10 bg-zinc-900" />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
