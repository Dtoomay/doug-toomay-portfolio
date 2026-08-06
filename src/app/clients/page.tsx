import type { Metadata } from "next";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";
import { INDUSTRIES, JOBS } from "@/lib/resume";
import { FULL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clients",
  description: `Industries and organizations ${SITE_NAME} (${FULL_NAME}) has served across a 25+ year career in marketing and strategy, from financial services to healthcare and technology.`,
  alternates: {
    canonical: "/clients",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Clients", path: "/clients" },
]);

const NOTABLE_BRANDS = [
  "American National Insurance Company",
  "Gold's Gym",
  "Flagstar Bank",
  "Mylo (Lockton Companies)",
];

export default function Clients() {
  return (
    <div className="flex flex-1 flex-col items-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb) }}
      />
      <main className="w-full max-w-4xl px-6 py-24 sm:px-8 sm:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Industries &amp; Organizations
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">
          Across agency and client-side roles, Doug has worked with national brands and
          organizations spanning the following industries.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Industries Served
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {INDUSTRIES.map((industry) => (
              <li
                key={industry}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85"
              >
                {industry}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Notable Brands &amp; Campaigns
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {NOTABLE_BRANDS.map((brand) => (
              <li
                key={brand}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85"
              >
                {brand}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-14">
          <h2 className="text-2xl font-semibold tracking-tight text-white">
            Organizations Doug Has Led Work For
          </h2>
          <ul className="mt-6 flex flex-wrap gap-3">
            {JOBS.map((job) => (
              <li
                key={job.company}
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white/85"
              >
                {job.company}
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
