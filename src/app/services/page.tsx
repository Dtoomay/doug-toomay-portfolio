import type { Metadata } from "next";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";
import { CORE_COMPETENCIES } from "@/lib/resume";
import { FULL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Areas of expertise for ${SITE_NAME} (${FULL_NAME}): strategic planning, stakeholder leadership, marketing, business development, and budget stewardship.`,
  alternates: {
    canonical: "/services",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
]);

export default function Services() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb) }}
      />
      <main className="w-full max-w-4xl px-6 py-24 sm:px-8 sm:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Areas of Expertise
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          More than 25 years of experience across strategic planning, marketing, and
          organizational leadership, applied to help executives and teams turn complex
          priorities into measurable outcomes.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {CORE_COMPETENCIES.map((competency) => (
            <div
              key={competency.name}
              className="rounded-2xl border border-white/15 bg-white/5 p-6"
            >
              <h2 className="text-lg font-semibold text-white">{competency.name}</h2>
              <p className="mt-2 text-white/75 leading-7">{competency.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
