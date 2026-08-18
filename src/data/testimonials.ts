export interface Testimonial {
  /** The review text, as the customer wrote it. Keep it verbatim. */
  quote: string;
  /** Customer name — first name + last initial is enough ("John S."). */
  author: string;
  /** Town, e.g. "Rockland, MA". Optional. */
  location?: string;
  /** Job it refers to, e.g. "Paver patio". Optional. */
  service?: string;
  /** 1–5 stars. Omit if the review came without a rating. */
  rating?: number;
}

/**
 * Real customer reviews only — this is a live business site.
 *
 * The homepage section is hidden while this list is empty and appears on its
 * own as soon as entries are added, so no markup changes are needed later.
 * Pending: 2–3 testimonials from the client (Month 3 deliverable). Once the
 * Google Business Profile is verified, Google reviews can be copied in here.
 */
export const testimonials: Testimonial[] = [];
