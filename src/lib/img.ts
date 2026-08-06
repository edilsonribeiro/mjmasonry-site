import { link } from './url';

/** Sibling .webp path for a raster image (same name, same folder). */
export const webpFor = (src: string) => src.replace(/\.(jpe?g|png)$/i, '.webp');

/**
 * Attributes that turn an element into a lightbox trigger. Spread them onto a
 * <button> that wraps the thumbnail; the page must also render <Lightbox />.
 */
export function lightboxAttrs(img: { src: string; alt: string }, caption?: string) {
  return {
    'data-lightbox': '',
    'data-lb-src': link(img.src),
    'data-lb-webp': link(webpFor(img.src)),
    'data-lb-alt': img.alt,
    'data-lb-caption': caption ?? img.alt,
  };
}
