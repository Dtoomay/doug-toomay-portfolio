"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) {
    return (
      <header className="absolute inset-x-0 top-0 z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-8 md:px-12">
          <Link href="/" className="text-lg font-semibold tracking-wide text-white">
            Doug Toomay
          </Link>
          <ul className="flex flex-wrap items-center gap-8 text-xs font-semibold tracking-widest text-white/90">
            {links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-white">
                  {link.label.toUpperCase()}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    );
  }

  return (
    <header className="border-b border-black/[.08] dark:border-white/[.145]">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-16 py-6">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-black dark:text-zinc-50"
        >
          Doug Toomay
        </Link>
        <ul className="flex flex-wrap items-center gap-6 text-sm font-medium">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
