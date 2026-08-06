import type { Metadata } from "next";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";
import { ACHIEVEMENTS } from "@/lib/resume";
import { FULL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work",
  description: `Selected results from ${SITE_NAME} (${FULL_NAME}), including brand launches and growth campaigns for American National Insurance, Gold's Gym, Flagstar Bank, and Mylo.`,
  alternates: {
    canonical: "/work",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Work", path: "/work" },
]);

export default function Work() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb) }}
      />
      <main className="w-full max-w-4xl px-6 py-24 sm:px-8 sm:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Selected Results
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          A sample of brand, growth, and business development work led throughout Doug&apos;s
          career in marketing and strategy.
        </p>

        <div className="mt-14 space-y-6">
          {ACHIEVEMENTS.map((achievement) => (
            <div
              key={achievement.company}
              className="rounded-2xl border border-white/15 bg-white/5 p-6"
            >
              <h2 className="text-lg font-semibold text-white">{achievement.company}</h2>
              <p className="mt-1 text-sm font-medium tracking-wide text-white/50">
                {achievement.context}
              </p>
              <p className="mt-3 text-white/80 leading-7">{achievement.result}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
