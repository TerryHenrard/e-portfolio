import type { TimelineYear } from '@/types/timeline'

export const timeline2024Data: TimelineYear = {
  timelineItems: [
    {
      text: "I started my final year of bachelor's degree in software development.",
    },
    {
      text: 'I kept working on the Visit-Me web app, improving it and adding new features.',
      link: {
        url: 'https://myvisitme.be',
        text: 'Visit-Me',
      },
    },
    {
      text: 'For a school project, I built a game Pente game.',
      technologies: [
        { name: 'Python' },
        { name: 'C' },
        { name: 'a Linux virtuel machine' },
      ],
      link: {
        url: 'https://github.com/TerryHenrard/Pente-game',
        text: 'Pente game',
      },
    },
  ],
  galleryImages: [
    {
      src: '/visit-me-3d-visit-2024.png',
      alt: 'Visit-Me 3D virtual tour interface showing immersive property visualization',
      height: 330,
      width: 640,
    },
    {
      src: '/pente-game-2024.png',
      alt: 'Pente strategy board game implementation with Python and C programming',
      height: 644,
      width: 640,
    },
  ],
}
