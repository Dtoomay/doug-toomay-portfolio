import type { Metadata } from "next";
import { FULL_NAME, SITE_NAME } from "@/lib/site";

export const metadata: Metadata = {
  title: "Clients",
  description: `Clients of ${SITE_NAME} (${FULL_NAME}).`,
  alternates: {
    canonical: "/clients",
  },
};

export default function Clients() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center gap-6 px-16 py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white">
          Clients
        </h1>
        <p className="max-w-md text-lg leading-8 text-white/80">
          Client list coming soon.
        </p>
      </main>
    </div>
  );
}
