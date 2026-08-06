import { SITE_URL } from "@/lib/site";

// JSON.stringify does not escape "<", which can break out of the <script>
// tag if user-controlled strings ever reach this data. Sanitize defensively.
export function toJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

// Pass the full breadcrumb trail, e.g. [{ name: "Home", path: "/" }, { name: "About", path: "/about" }].
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
