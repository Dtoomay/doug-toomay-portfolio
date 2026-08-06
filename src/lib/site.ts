export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.dougtoomay.com";

export const SITE_NAME = "Doug Toomay";
export const FULL_NAME = "Douglas Toomay";
export const JOB_TITLE = "Vice President, Group Account Director";

export const SOCIAL_LINKS = [
  { name: "LinkedIn", url: "https://www.linkedin.com/in/dougtoomay" },
  { name: "YouTube", url: "https://www.youtube.com/@DougToomay" },
  { name: "X", url: "https://x.com/doug2may" },
  { name: "Instagram", url: "https://www.instagram.com/dougtoomay" },
  { name: "TikTok", url: "https://www.tiktok.com/@d_toomay" },
] as const;
