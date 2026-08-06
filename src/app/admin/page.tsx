import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { signOut } from "./actions";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
  alternates: { canonical: "/admin" },
};

export default async function AdminPage() {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (!data.user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center gap-6 px-16 py-32 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white">Admin</h1>
        <p className="max-w-md text-lg leading-8 text-white/80">Signed in as {data.user.email}.</p>
        <form action={signOut}>
          <button
            type="submit"
            className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold tracking-widest text-white/90 transition-colors hover:bg-white/10 hover:text-white"
          >
            SIGN OUT
          </button>
        </form>
      </main>
    </div>
  );
}
