import { FaInstagram, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FULL_NAME, SITE_NAME, SOCIAL_LINKS } from "@/lib/site";

const icons = {
  LinkedIn: FaLinkedin,
  YouTube: FaYoutube,
  X: FaXTwitter,
  Instagram: FaInstagram,
  TikTok: FaTiktok,
} as const;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-8 py-8 text-center md:grid md:grid-cols-3 md:px-12">
        <div className="hidden md:block" aria-hidden="true" />
        <p className="text-xs text-white/70">
          <span itemProp="copyrightHolder">&copy; {year} {SITE_NAME}</span>
          <span className="sr-only"> ({FULL_NAME})</span>. All rights reserved.
        </p>
        <ul className="flex items-center gap-5 md:justify-self-end">
          {SOCIAL_LINKS.map((link) => {
            const Icon = icons[link.name];
            return (
              <li key={link.name}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="me noopener noreferrer"
                  title={`${SITE_NAME} on ${link.name}`}
                  aria-label={`${SITE_NAME} on ${link.name} (opens in a new tab)`}
                  className="text-white/70 transition-colors hover:text-white"
                >
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
}
