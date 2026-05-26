export type ServiceIconName =
  | 'wall'
  | 'walkway'
  | 'steps'
  | 'masonry'
  | 'paver'
  | 'patio'
  | 'fire'
  | 'cleanup';

export interface Service {
  title: string;
  short: string;
  long: string;
  icon: ServiceIconName;
  image?: string;
  imageAlt?: string;
}

export const services: Service[] = [
  {
    title: 'Stone & Retaining Walls',
    short: 'Custom-built stone and retaining walls designed to hold, protect, and beautify your property for decades.',
    long: 'Our stone and retaining walls are engineered for strength and designed for beauty. Whether you need to manage a slope, define property boundaries, or create a stunning landscape feature, we build walls that last. We work with natural stone, manufactured block, and custom combinations to match your home and landscape perfectly.',
    icon: 'wall',
    image: '/img/gallery/retaining-wall-construction.jpg',
    imageAlt: 'Concrete block retaining wall under construction with proper drainage',
  },
  {
    title: 'Walkways',
    short: 'Elegant paver and natural stone walkways that welcome guests and connect your outdoor spaces.',
    long: 'A well-designed walkway transforms the entire look and feel of your property. We install paver, flagstone, and cobblestone walkways that guide visitors to your door with style. From straight paths to winding garden trails, every walkway we build combines function with curb appeal.',
    icon: 'walkway',
    image: '/img/gallery/walkway-paver-curved.jpg',
    imageAlt: 'Curved paver walkway leading to driveway, illuminated at dusk',
  },
  {
    title: 'Steps & Stoops',
    short: 'Durable, safe, and attractive steps and stoops crafted from premium stone and concrete materials.',
    long: 'Safe, sturdy, and attractive — our steps and stoops are built to handle heavy foot traffic and harsh New England winters. We construct granite, bluestone, and paver steps for front entries, backyards, and multi-level landscapes. Every step is leveled, set on a proper base, and finished to perfection.',
    icon: 'steps',
    image: '/img/gallery/patio-bluestone-bench.jpg',
    imageAlt: 'Multi-level paver patio with stone seating wall and bluestone steps',
  },
  {
    title: 'Masonry Services',
    short: 'Expert brick, block, and stone masonry — from repairs to full new construction projects.',
    long: 'From brick repair to full chimney rebuilds, our masonry expertise covers it all. We work with brick, block, and natural stone for both residential and commercial projects. Whether it is tuckpointing, veneer installation, or a complete foundation repair, we bring precision and durability to every job.',
    icon: 'masonry',
    image: '/img/gallery/chimney-stone-repair.jpg',
    imageAlt: 'Restored stone chimney with new crown and flashing',
  },
  {
    title: 'Paver Installation',
    short: 'Professional paver installation for driveways, walkways, and patios using top-grade materials.',
    long: 'Professional paver installation for driveways, walkways, pool decks, and more. We prep the base properly, lay each paver with care, and finish with joint sand and sealant for a lasting result. We work with leading brands like Techo-Bloc, Belgard, and Unilock to ensure premium quality.',
    icon: 'paver',
    image: '/img/gallery/walkway-cobblestone-driveway.jpg',
    imageAlt: 'Granite cobblestone walkway crossing an asphalt driveway',
  },
  {
    title: 'Patios',
    short: 'Beautiful outdoor patios built for relaxation and entertaining, designed to complement your home.',
    long: 'Your patio should be the heart of your outdoor living space. We design and build custom patios using pavers, natural stone, and stamped concrete — complete with seating walls, fire features, and integrated lighting. From intimate spaces to large entertaining areas, we make your vision a reality.',
    icon: 'patio',
    image: '/img/gallery/patio-stone-wall-green-house.jpg',
    imageAlt: 'Paver patio with natural stone retaining wall',
  },
  {
    title: 'Outdoor Fireplaces & Fire Pits',
    short: 'Gather around a custom-built fireplace or fire pit — the perfect centerpiece for your backyard.',
    long: 'Extend your outdoor season with a custom-built fireplace or fire pit. We construct wood-burning and gas fire features using natural stone, brick, and manufactured materials. Each project is designed to be a focal point — a place where family and friends gather year-round.',
    icon: 'fire',
    image: '/img/gallery/fireplace-river-stone.jpg',
    imageAlt: 'Floor-to-ceiling river stone fireplace with reclaimed wood mantel',
  },
  {
    title: 'Property Cleanup',
    short: 'Complete property cleanup and preparation services to keep your landscape looking its best.',
    long: 'Before a new project or after a long season, we offer complete property cleanup services. This includes debris removal, grading, brush clearing, and site preparation. We make sure your property is clean, level, and ready for whatever comes next.',
    icon: 'cleanup',
  },
];
