/**
 * Call tracking.
 * CANONICAL = Gordie's real number. Used in initial HTML, SSR and all schema (NAP consistency).
 * TRACKING  = Twilio number. Swapped in client-side only, after mount. Never put this in schema.
 */
export const CANONICAL_PHONE = {
  display: '07768 243 728',
  tel: '07768243728',
  e164: '+447768243728',
} as const;

export const TRACKING_PHONE = {
  display: '07861 937 481',
  tel: '07861937481',
} as const;
