import GoInDepth from '@/components/go-in-depth'
import { Dot, ExternalLink } from 'lucide-react'
import Image from 'next/image'
import type {
  Link,
  Technology,
  TimelineItem,
  GalleryImage,
} from '@/types/timeline'

// Styles
const styles = {
  paragraph:
    'mb-4 text-justify text-sm text-neutral-800 lg:text-base dark:text-neutral-200',
  link: 'text-blue-500 hover:text-blue-600',
  underline: 'underline',
  image:
    'h-20 w-full rounded-lg shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-65',
}

// Components
const ExternalLinkComponent = ({ url, text }: Link) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className={styles.link}
  >
    <span className="mr-1">{text}</span>
    <ExternalLink className="inline -translate-y-1/3" size={12} />
  </a>
)

const TechnologyList = ({ technologies }: { technologies: Technology[] }) => (
  <>
    {technologies.map((tech, index) => (
      <span key={tech.name}>
        <span className={styles.underline}>{tech.name}</span>
        {index < technologies.length - 1 && (
          <span>{index === technologies.length - 2 ? ' and ' : ', '}</span>
        )}
      </span>
    ))}
  </>
)

const TimelineItemComponent = ({ item }: { item: TimelineItem }) => {
  const renderContent = () => {
    if (!item.link) {
      return item.text
    }

    // For items with links, split the text and insert the link
    const linkText = item.link.text
    const parts = item.text.split(linkText)

    return (
      <>
        {parts[0]}
        <ExternalLinkComponent url={item.link.url} text={linkText} />
        {parts[1]}
        {item.technologies && (
          <>
            {' using '}
            <TechnologyList technologies={item.technologies} />
          </>
        )}
      </>
    )
  }

  return (
    <p className={styles.paragraph}>
      <Dot className="inline" /> {renderContent()}
    </p>
  )
}

const GalleryImageComponent = ({ image }: { image: GalleryImage }) => (
  <Image
    src={image.src}
    alt={image.alt}
    width={500}
    height={500}
    className={`${styles.image} object-${image.objectFit || 'cover'}`}
  />
)

interface TimelineGeneratorProps {
  timelineItems: TimelineItem[]
  galleryImages: GalleryImage[]
  showGoInDepth?: boolean
}

export const TimelineGenerator = ({
  timelineItems,
  galleryImages,
  showGoInDepth = true,
}: TimelineGeneratorProps) => {
  return (
    <div>
      {timelineItems.map((item, index) => (
        <TimelineItemComponent key={index} item={item} />
      ))}

      {showGoInDepth && (
        <div className="mb-8">
          <GoInDepth />
        </div>
      )}

      <div className="grid grid-cols-2 gap-4">
        {galleryImages.map((image, index) => (
          <GalleryImageComponent key={index} image={image} />
        ))}
      </div>
    </div>
  )
}
