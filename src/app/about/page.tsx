import type { Metadata } from "next";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";
import { BOARD_COMMUNITY, EDUCATION, SUMMARY } from "@/lib/resume";
import { FULL_NAME, JOB_TITLE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: `About ${SITE_NAME} (${FULL_NAME}): ${JOB_TITLE} at Bernstein-Rein Advertising in Kansas City, with 25+ years leading marketing, strategy, and business growth.`,
  alternates: {
    canonical: "/about",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
]);

export default function About() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb) }}
      />
      <main className="w-full max-w-3xl px-6 py-24 sm:px-8 sm:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          About Doug Toomay
        </h1>
        <p className="mt-3 text-sm font-medium tracking-[0.2em] text-white/70">
          EXECUTIVE LEADER &nbsp;|&nbsp; STRATEGIC ADVISOR &nbsp;|&nbsp; COMMUNITY ADVOCATE
        </p>

        <div className="mt-10 space-y-6 text-lg leading-8 text-white/80">
          {SUMMARY.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Board, Advisory &amp; Community Engagement
          </h2>
          <div className="mt-6 space-y-6">
            {BOARD_COMMUNITY.map((item) => (
              <div key={item.org} className="border-l-2 border-white/20 pl-5">
                <p className="text-base font-semibold text-white">
                  {item.org}
                  {item.dates ? (
                    <span className="ml-2 font-normal text-white/60">
                      {item.role} · {item.dates}
                    </span>
                  ) : (
                    <span className="ml-2 font-normal text-white/60">{item.role}</span>
                  )}
                </p>
                <p className="mt-2 text-white/75">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white">Education</h2>
          <p className="mt-4 text-white/80">
            {EDUCATION.degree}, {EDUCATION.concentrations} — {EDUCATION.school}
          </p>
        </section>
      </main>
    </div>
  );
}
