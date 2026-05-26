export interface GalleryImage {
  src: string;
  alt: string;
}

export interface GalleryCategory {
  id: string;
  title: string;
  description: string;
  images: GalleryImage[];
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'patios',
    title: 'Patios',
    description: 'Custom paver and natural stone patios built for outdoor living and entertaining.',
    images: [
      {
        src: '/img/gallery/patio-stone-wall-green-house.jpg',
        alt: 'Paver patio with natural stone retaining wall',
      },
      {
        src: '/img/gallery/patio-bluestone-bench.jpg',
        alt: 'Multi-level paver patio with stone seating wall and bluestone caps',
      },
      {
        src: '/img/gallery/patio-paver-fountain.jpg',
        alt: 'Paver patio with center fountain and stone border',
      },
    ],
  },
  {
    id: 'walkways',
    title: 'Walkways',
    description: 'Paver and cobblestone walkways that guide guests and elevate curb appeal.',
    images: [
      {
        src: '/img/gallery/walkway-paver-curved.jpg',
        alt: 'Curved paver walkway leading to driveway, illuminated at dusk',
      },
      {
        src: '/img/gallery/walkway-cobblestone-driveway.jpg',
        alt: 'Granite cobblestone walkway crossing an asphalt driveway',
      },
    ],
  },
  {
    id: 'fireplaces',
    title: 'Fireplaces & Chimneys',
    description: 'Stone fireplaces, chimney rebuilds, and masonry repairs done right.',
    images: [
      {
        src: '/img/gallery/fireplace-river-stone.jpg',
        alt: 'Floor-to-ceiling river stone fireplace with reclaimed wood mantel',
      },
      {
        src: '/img/gallery/chimney-stone-repair.jpg',
        alt: 'Restored stone chimney with new crown and flashing',
      },
    ],
  },
  {
    id: 'walls',
    title: 'Retaining Walls',
    description: 'Engineered for strength, designed for beauty — built to hold for decades.',
    images: [
      {
        src: '/img/gallery/retaining-wall-construction.jpg',
        alt: 'Concrete block retaining wall under construction with proper drainage',
      },
    ],
  },
];

export const allGalleryImages: GalleryImage[] = galleryCategories.flatMap((c) => c.images);
