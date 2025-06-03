import type { TimelineYear } from '@/types/timeline'

export const timeline2025Data: TimelineYear = {
  timelineItems: [
    {
      text: "I completed my bachelor's degree in software development and graduated with honors.",
    },
    {
      text: 'I built an AI call center for Thomas & Piron as an intern at the Microsoft Innovation Center in Mons.',
    },
    {
      text: "I'm rebuilding the Car Wash From Home website from scratch. Including a user dashboard and an admin panel to run the company online.",
      link: {
        url: 'https://carwashfromhome.com',
        text: 'Car Wash From Home',
      },
      technologies: [
        { name: 'Next.js' },
        { name: 'AWS' },
        { name: 'Azure' },
        { name: 'AI features' },
      ],
    },
    {
      text: "I'm rebuilding the Visit-Me web app from scratch using the same technologies.",
      link: {
        url: 'https://www.myvisitme.be/',
        text: 'Visit-Me',
      },
    },
  ],
  galleryImages: [
    {
      src: '/software-development-bachelor-degree-2025.png',
      alt: "Bachelor's degree in software development certificate",
      objectFit: 'cover',
    },
    {
      src: '/car-wash-from-home-new-website-2025-dekstop-plans.png',
      alt: 'Car Wash From Home new website 2025 desktop plans',
      objectFit: 'cover',
    },
    {
      src: '/image.png',
      alt: 'Car Wash From Home new website 2025 desktop hero section',
      objectFit: 'contain',
    },
    {
      src: '/car-wash-from-home-new-website-2025-mobile-plans.png',
      alt: 'Car Wash From Home new website 2025 mobile plans',
      objectFit: 'cover',
    },
  ],
}
