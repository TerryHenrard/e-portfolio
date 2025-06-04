import type { TimelineYear } from '@/types/timeline'

export const timeline2025Data: TimelineYear = {
  timelineItems: [
    {
      text: "I completed my bachelor's degree in software development and graduated with honors.",
    },
    {
      text: 'I built an AI call center for Thomas & Piron as an intern at the Microsoft Innovation Center in Mons.',
      link: {
        url: 'https://github.com/TerryHenrard/Thomas-Piron-Stage2025',
        text: 'AI call center',
      },
      technologies: [
        { name: '.NET' },
        { name: 'Semantic Kernel' },
        { name: 'Azure OpenAI' },
      ],
    },
    {
      text: "I'm rebuilding the Car Wash From Home website from scratch with new branding, including a user dashboard and an admin panel to manage the business online.",
      link: {
        url: 'https://github.com/TerryHenrard/car-wash-from-home',
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
      height: 456,
      width: 640,
    },
    {
      src: '/car-wash-from-home-new-website-2025-dekstop-plans.png',
      alt: 'Car Wash From Home new website 2025 desktop plans',
      objectFit: 'cover',
      height: 480,
      width: 640,
    },
    {
      src: '/car-wash-from-home-new-website-2025-hero-section.png',
      alt: 'Car Wash From Home new website 2025 hero section',
      objectFit: 'cover',
      height: 480,
      width: 640,
    },
    {
      src: '/car-wash-from-home-new-website-2025-mobile-plans.png',
      alt: 'Car Wash From Home new website 2025 mobile plans',
      objectFit: 'cover',
      height: 480,
      width: 640,
    },
  ],
}
