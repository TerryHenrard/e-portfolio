// Timeline-related type definitions

export interface Link {
  url: string
  text: string
}

export interface Technology {
  name: string
}

export interface TimelineItem {
  text: string
  link?: Link
  technologies?: Technology[]
}

export interface GalleryImage {
  src: string
  alt: string
  objectFit?: 'cover' | 'contain'
}

export interface TimelineEntry {
  title: string
  content: React.ReactNode
}

export interface TimelineYear {
  timelineItems: TimelineItem[]
  galleryImages: GalleryImage[]
}
