// First-touch lead attribution for the current visit.
// Stored in sessionStorage only (no cookies, no localStorage), so it works
// whether or not the visitor has accepted analytics cookies.

export const ATTRIBUTION_KEY = "dd-attribution";

const AI_DOMAINS = [
  "chatgpt.com",
  "openai.com",
  "perplexity.ai",
  "copilot.microsoft.com",
  "gemini.google.com",
  "claude.ai",
  "you.com",
];

export interface Attribution {
  landing_page: string;
  referrer: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  source: string;
}

const normaliseDomain = (value: string): string =>
  value.trim().toLowerCase().replace(/^www\./, "");

// Returns the AI domain from the list that `value` is, or is a subdomain of.
const matchAiDomain = (value: string | undefined): string | null => {
  if (!value) return null;
  const v = normaliseDomain(value);
  return AI_DOMAINS.find((d) => v === d || v.endsWith("." + d)) ?? null;
};

const referrerDomain = (): string => {
  try {
    if (!document.referrer) return "direct";
    return normaliseDomain(new URL(document.referrer).hostname) || "direct";
  } catch (e) {
    return "direct";
  }
};

const captureAttribution = (): void => {
  try {
    if (sessionStorage.getItem(ATTRIBUTION_KEY)) return;
  } catch (e) {
    return; // sessionStorage unavailable; nothing to do
  }

  const params = new URLSearchParams(window.location.search);
  const utm_source = params.get("utm_source")?.trim() || undefined;
  const utm_medium = params.get("utm_medium")?.trim() || undefined;
  const utm_campaign = params.get("utm_campaign")?.trim() || undefined;
  const referrer = referrerDomain();

  const aiDomain =
    matchAiDomain(utm_source) ??
    (referrer !== "direct" ? matchAiDomain(referrer) : null);

  const source = aiDomain
    ? `AI: ${aiDomain}`
    : utm_source || (referrer !== "direct" ? referrer : "direct");

  const data: Attribution = {
    landing_page: window.location.pathname,
    referrer,
    source,
  };
  if (utm_source) data.utm_source = utm_source;
  if (utm_medium) data.utm_medium = utm_medium;
  if (utm_campaign) data.utm_campaign = utm_campaign;

  try {
    sessionStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(data));
  } catch (e) {
    // Storage full or blocked; ignore
  }
};

captureAttribution();
