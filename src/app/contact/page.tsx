import type { Metadata } from "next";
import { FULL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE_NAME} (${FULL_NAME}).`,
  alternates: {
    canonical: "/contact",
  },
};

export default function Contact() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center gap-6 px-16 py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Contact
        </h1>
        <p className="max-w-md text-lg leading-8 text-white/80">
          Contact details coming soon.
        </p>
      </main>
    </div>
  );
}
