import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { login } from "./actions";

export const metadata: Metadata = {
  title: "Log In",
  robots: { index: false, follow: false },
  alternates: { canonical: "/login" },
};

export default async function LoginPage({
  searchParams,
}: PageProps<"/login">) {
  const supabase = await createClient();
  const { data } = await supabase.auth.getUser();

  if (data.user) {
    redirect("/admin");
  }

  const params = await searchParams;
  const hasError = params.error !== undefined;

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="flex w-full max-w-sm flex-col gap-8 px-8 py-32">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white">Log In</h1>
          <p className="mt-2 text-sm text-white/70">Sign in to access the admin area.</p>
        </div>
        <form action={login} className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-xs font-semibold tracking-widest text-white/90">EMAIL</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-xs font-semibold tracking-widest text-white/90">PASSWORD</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="rounded-md border border-white/10 bg-white/5 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none"
            />
          </div>
          {hasError && (
            <p role="alert" className="text-sm text-red-400">Invalid email or password.</p>
          )}
          <button
            type="submit"
            className="mt-2 rounded-md border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold tracking-widest text-white transition-colors hover:bg-white/20"
          >
            LOG IN
          </button>
        </form>
      </main>
    </div>
  );
}
