import type { Metadata } from "next";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";
import { BOARD_COMMUNITY, EDUCATION, JOBS, SUMMARY } from "@/lib/resume";
import { FULL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Experience",
  description: `${SITE_NAME} (${FULL_NAME}) career experience: Bernstein-Rein Advertising, Lockton/Mylo, Hallmark, Cerner, and DataCore Marketing, spanning 25+ years in marketing and strategy.`,
  alternates: {
    canonical: "/experience",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Experience", path: "/experience" },
]);

export default function Experience() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb) }}
      />
      <main className="w-full max-w-3xl px-6 py-24 sm:px-8 sm:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Experience
        </h1>
        <p className="mt-3 text-sm font-medium tracking-[0.2em] text-white/70">
          EXECUTIVE PROFILE
        </p>
        <p className="mt-6 text-lg leading-8 text-white/80">{SUMMARY.short}</p>

        <section className="mt-16">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Professional Experience
          </h2>
          <div className="mt-8 space-y-12">
            {JOBS.map((job) => (
              <article key={job.company} className="border-l-2 border-white/20 pl-5">
                <h3 className="text-xl font-semibold text-white">
                  {job.company}
                  {job.location ? (
                    <span className="ml-2 text-base font-normal text-white/55">
                      {job.location}
                    </span>
                  ) : null}
                </h3>
                <ul className="mt-1 space-y-0.5">
                  {job.positions.map((position) => (
                    <li key={position.title} className="text-white/70">
                      {position.title} <span className="text-white/50">· {position.dates}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-white/80 leading-7">{job.description}</p>
                {job.highlights ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-white/80">
                    {job.highlights.map((highlight) => (
                      <li key={highlight.slice(0, 24)}>{highlight}</li>
                    ))}
                  </ul>
                ) : null}
              </article>
            ))}
          </div>
        </section>

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
