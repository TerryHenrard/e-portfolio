import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export default function AboutMeSection() {
  return (
    <section
      className="container mx-auto my-8 px-4 sm:my-16 sm:px-6 lg:my-30 lg:px-8"
      id="about-me"
      aria-labelledby="about-me-heading"
      role="region"
    >
      <h2
        id="about-me-heading"
        className="mb-8 text-center text-2xl sm:mb-16 sm:text-3xl lg:mb-30 lg:text-4xl"
      >
        About Me
      </h2>
      <div className="grid grid-cols-1 place-items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <Card
          className="w-full max-w-lg lg:w-150"
          role="article"
          aria-labelledby="intro-heading"
        >
          <CardHeader>
            <CardTitle
              id="intro-heading"
              className="text-xl sm:text-2xl"
              role="heading"
              aria-level={3}
            >
              Hello, I&apos;m Terry Henrard
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div
              role="text"
              aria-label="Terry Henrard's professional introduction"
              className="text-justify"
            >
              <p className="mb-4 text-sm sm:text-base">
                I&apos;m passionate about building tech solutions that solve
                real-world problems. I focus on deeply understanding user needs,
                delivering tangible results, and staying adaptable as
                technologies evolve.
              </p>
              <p className="mb-4 text-sm sm:text-base">
                My background blends technical expertise and strategic vision. I
                turn ambitious ideas into practical solutions, always centering
                the end user and balancing intuition with data-driven decisions.
              </p>
              <p className="mb-4 text-sm sm:text-base">
                I see entrepreneurship as a journey of continuous learning. I
                stay curious, calm under pressure, and committed to excellence.
                Outside of tech, I&apos;m probably pushing my limits in sports
                or diving into a great book.
              </p>
            </div>
          </CardContent>
        </Card>
        <div
          className="order-first lg:order-last"
          role="img"
          aria-labelledby="profile-image-caption"
        >
          <Avatar className="size-24 sm:size-32 md:size-40 lg:size-100">
            <AvatarImage
              src={'/photo-of-terry-henrard-about-me-section.jpg'}
              alt="Professional headshot of Terry Henrard, a technology entrepreneur with a friendly smile, wearing business attire"
              loading="lazy"
              decoding="async"
            />
            <AvatarFallback aria-label="Terry Henrard initials">
              TH
            </AvatarFallback>
          </Avatar>
          <span id="profile-image-caption" className="sr-only">
            Profile photo of Terry Henrard
          </span>
        </div>
      </div>
    </section>
  )
}
