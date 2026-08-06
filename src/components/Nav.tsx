"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/clients", label: "Clients" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const closeMenu = () => {
    setIsOpen(false);
    triggerButtonRef.current?.focus();
  };

  useEffect(() => {
    if (!isOpen) return;

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const desktopQuery = window.matchMedia("(min-width: 1080px)");
    const handleDesktopChange = (event: MediaQueryListEvent) => {
      if (event.matches) setIsOpen(false);
    };

    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isOpen]);

  return (
    <>
      <header className="sticky top-0 z-50 bg-zinc-900/90 backdrop-blur-sm nav:relative nav:bg-transparent nav:backdrop-blur-none">
        <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-8 py-8 md:px-12">
          <button
            ref={triggerButtonRef}
            type="button"
            onClick={() => setIsOpen(true)}
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label="Open menu"
            className="-ml-2 p-2 text-white nav:hidden"
          >
            <FaBars className="h-6 w-6" aria-hidden="true" />
          </button>

          <Link
            href="/"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-lg font-semibold tracking-wide text-white nav:static nav:left-auto nav:top-auto nav:translate-x-0 nav:translate-y-0"
          >
            Doug Toomay
          </Link>

          <ul className="hidden nav:flex flex-wrap items-center gap-8 text-xs font-semibold tracking-widest text-white/90">
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

      <div
        onClick={closeMenu}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-black/60 transition-opacity duration-300 ease-in-out nav:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-nav"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        inert={!isOpen}
        className={`fixed inset-y-0 left-0 z-50 flex h-full w-72 max-w-[80vw] flex-col overflow-y-auto bg-zinc-900 shadow-2xl transition-transform duration-300 ease-in-out nav:hidden ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-8 py-8">
          <span className="text-lg font-semibold tracking-wide text-white">Menu</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeMenu}
            aria-label="Close menu"
            className="-mr-2 p-2 text-white"
          >
            <FaXmark className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <ul className="flex flex-col gap-1 px-8 pb-8 text-xs font-semibold tracking-widest text-white/90">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={closeMenu}
                className="block py-3 transition-colors hover:text-white"
              >
                {link.label.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
