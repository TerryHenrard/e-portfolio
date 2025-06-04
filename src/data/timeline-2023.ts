import type { TimelineYear } from '@/types/timeline'

export const timeline2023Data: TimelineYear = {
  timelineItems: [
    {
      text: 'I founded Car Wash From Home, a professional vehicle cleaning business that operates from home.',
      link: {
        url: 'https://carwashfromhome.com/',
        text: 'Car Wash From Home',
      },
    },
    {
      text: 'I co-founded Visit-Me, a company that creates 3D tours of properties for the real estate sector.',
      link: {
        url: 'https://visit-me.co/',
        text: 'Visit-Me',
      },
    },
  ],
  galleryImages: [
    {
      src: '/car-wash-from-home-website-hero-section-2023.png',
      alt: 'Car Wash From Home website hero section 2023.png',
      objectFit: 'cover',
      height: 333,
      width: 640,
    },
    {
      src: '/visit-me-hero-section-2023.png',
      alt: 'Pente game',
      objectFit: 'cover',
      height: 0,
      width: 0,
    },
  ],
}
