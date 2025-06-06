import { AppleHelloEnglishEffect } from '../ui/apple-hello-effect'
import ScrollDown from '../ui/scroll-down'

export default function HeroSection() {
  return (
    <section className="flex h-screen w-full flex-col items-center justify-between">
      <div className="flex flex-1 flex-col items-center justify-center gap-16">
        <h1>
          <AppleHelloEnglishEffect
            speed={1.1}
            className={'sm:100 md:size-120 lg:size-200'}
          />
        </h1>
      </div>
      <ScrollDown />
    </section>
  )
}
