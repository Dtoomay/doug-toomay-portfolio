export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <main className="flex w-full max-w-3xl flex-col items-center gap-6 px-8 py-32 text-center">
        <img
          src="/profile-placeholder.svg"
          alt="Doug Toomay"
          className="h-32 w-32 rounded-full border-4 border-white/90 object-cover shadow-lg"
        />
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Hi, I&apos;m Doug Toomay
        </h1>
        <p className="text-sm font-medium tracking-[0.2em] text-white/80 sm:text-base">
          VICE PRESIDENT, GROUP ACCOUNT DIRECTOR
        </p>
      </main>
    </div>
  );
}
