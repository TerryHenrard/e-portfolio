import type { TimelineYear } from '@/types/timeline'

export const timeline2024Data: TimelineYear = {
  timelineItems: [
    {
      text: "I started my final year of bachelor's degree in software development.",
    },
    {
      text: 'I completed several major projects as part of my curriculum.',
    },
    {
      text: 'I began working on the original Car Wash From Home website using traditional web technologies.',
      link: {
        url: 'https://carwashfromhome.com',
        text: 'Car Wash From Home',
      },
      technologies: [
        { name: 'HTML' },
        { name: 'CSS' },
        { name: 'JavaScript' },
        { name: 'PHP' },
      ],
    },
  ],
  galleryImages: [
    {
      src: '/timeline-2024-project-1.png',
      alt: '2024 project screenshot 1',
      objectFit: 'cover',
    },
    {
      src: '/timeline-2024-project-2.png',
      alt: '2024 project screenshot 2',
      objectFit: 'cover',
    },
  ],
}
