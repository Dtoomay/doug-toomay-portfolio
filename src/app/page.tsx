import type { Metadata } from "next";
import Link from "next/link";
import { SUMMARY } from "@/lib/resume";
import { FULL_NAME, JOB_TITLE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  description: `${SITE_NAME} (${FULL_NAME}) is ${JOB_TITLE} at Bernstein-Rein Advertising in Kansas City, with 25+ years in marketing, strategy, and business leadership.`,
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div className="fixed inset-0 -z-10">
        <img
          src="/kansas-city-background.png"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/62 to-black/80" />
      </div>
      <main className="flex w-full max-w-3xl flex-col items-center gap-6 px-8 py-32 text-center">
        <img
          src="/doug-toomay-douglas-toomay-headshot-white.jpeg"
          alt="Doug Toomay"
          className="h-32 w-32 rounded-full border-4 border-white/90 object-cover shadow-lg"
        />
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Hi, I&apos;m Doug Toomay
          <span className="sr-only"> (Douglas Toomay)</span>
        </h1>
        <p className="text-sm font-medium tracking-[0.2em] text-white/80 sm:text-base">
          VICE PRESIDENT, GROUP ACCOUNT DIRECTOR
        </p>
        <p className="max-w-xl text-lg leading-8 text-white/80">
          {SUMMARY.short}
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/about"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-white/90"
          >
            About Doug
          </Link>
          <Link
            href="/experience"
            className="rounded-full border border-white/40 px-6 py-2.5 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white/10"
          >
            View Experience
          </Link>
        </div>
      </main>
    </div>
  );
}
