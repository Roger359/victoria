export interface PostMeta {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  coverAlt: string;
  date: string;
  minutes: number;
}

export const posts: PostMeta[] = [
  {
    slug: 'superar-la-tristeza',
    title: 'Cuando estés triste: pasos para salir adelante',
    excerpt:
      'Enfrenta los problemas paso a paso, cambia los pensamientos negativos por positivos y recuerda: esto pasará también.',
    cover: '/images/IMG-20250927-WA0019.jpg',
    coverAlt: 'Fotografía de portada del primer artículo de Victoria',
    date: '2026-09-16',
    minutes: 12,
  },
];

export const gallery: { src: string; alt: string; span: 'tall' | 'wide' | 'std' }[] = [
  { src: '/images/20230305_140500.jpg', alt: 'Fotografía 1 de la galería Victoria', span: 'wide' },
  { src: '/images/IMG-20211231-WA0043.jpg', alt: 'Fotografía 2 de la galería Victoria', span: 'std' },
  { src: '/images/IMG-20220816-WA0034.jpg', alt: 'Fotografía 3 de la galería Victoria', span: 'tall' },
  { src: '/images/IMG-20221208-WA0005.jpg', alt: 'Fotografía 4 de la galería Victoria', span: 'std' },
  { src: '/images/IMG-20230411-WA0001.jpg', alt: 'Fotografía 5 de la galería Victoria', span: 'std' },
  { src: '/images/IMG-20230427-WA0016.jpg', alt: 'Fotografía 6 de la galería Victoria', span: 'wide' },
  { src: '/images/IMG-20230730-WA0011.jpeg', alt: 'Fotografía 7 de la galería Victoria', span: 'std' },
  { src: '/images/IMG-20230811-WA0004.jpg', alt: 'Fotografía 8 de la galería Victoria', span: 'tall' },
  { src: '/images/IMG-20231031-WA0001.jpg', alt: 'Fotografía 9 de la galería Victoria', span: 'std' },
  { src: '/images/IMG-20231111-WA0007.jpg', alt: 'Fotografía 10 de la galería Victoria', span: 'std' },
  { src: '/images/IMG-20231111-WA0032.jpg', alt: 'Fotografía 11 de la galería Victoria', span: 'wide' },
  { src: '/images/IMG-20231130-WA0007.jpg', alt: 'Fotografía 12 de la galería Victoria', span: 'std' },
  { src: '/images/IMG-20240329-WA0023.jpg', alt: 'Fotografía 13 de la galería Victoria', span: 'tall' },
  { src: '/images/IMG-20240329-WA0026.jpg', alt: 'Fotografía 14 de la galería Victoria', span: 'std' },
  { src: '/images/IMG-20250927-WA0019.jpg', alt: 'Fotografía 15 de la galería Victoria', span: 'std' },
  { src: '/images/IMG-20251031-WA0008.jpg', alt: 'Fotografía 16 de la galería Victoria', span: 'wide' },
  { src: '/images/IMG-20251224-WA0025.jpg', alt: 'Fotografía 17 de la galería Victoria', span: 'std' },
  { src: '/images/IMG-20260202-WA0003.jpg', alt: 'Fotografía 18 de la galería Victoria', span: 'std' },
];
