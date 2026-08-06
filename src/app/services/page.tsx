import type { Metadata } from "next";
import { FULL_NAME, JOB_TITLE, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Services offered by ${SITE_NAME} (${FULL_NAME}), ${JOB_TITLE}.`,
  alternates: {
    canonical: "/services",
  },
};

export default function Services() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center gap-6 px-16 py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Services
        </h1>
        <p className="max-w-md text-lg leading-8 text-white/80">
          Services coming soon.
        </p>
      </main>
    </div>
  );
}
