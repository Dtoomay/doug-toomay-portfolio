import type { Metadata } from "next";
import { breadcrumbJsonLd, toJsonLd } from "@/lib/jsonld";
import { FULL_NAME, SITE_NAME, SOCIAL_LINKS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Connect with ${SITE_NAME} (${FULL_NAME}) on LinkedIn to discuss marketing strategy, business development, and executive advisory work.`,
  alternates: {
    canonical: "/contact",
  },
};

const breadcrumb = breadcrumbJsonLd([
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
]);

const linkedIn = SOCIAL_LINKS.find((link) => link.name === "LinkedIn");

export default function Contact() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: toJsonLd(breadcrumb) }}
      />
      <main className="flex w-full max-w-2xl flex-col items-center gap-6 px-8 py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Let&apos;s Connect
        </h1>
        <p className="max-w-md text-lg leading-8 text-white/80">
          The best way to reach Doug Toomay is on LinkedIn — feel free to connect or send a
          message there.
        </p>
        {linkedIn ? (
          <a
            href={linkedIn.url}
            target="_blank"
            rel="me noopener noreferrer"
            className="rounded-full bg-white px-6 py-2.5 text-sm font-semibold tracking-wide text-black transition-colors hover:bg-white/90"
          >
            Connect on LinkedIn
          </a>
        ) : null}
      </main>
    </div>
  );
}
