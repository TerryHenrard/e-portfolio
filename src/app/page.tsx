import React from 'react'
import { timelineData } from '@/data/timeline-data'
import HeroSection from '@/components/sections/hero-section'
import AboutMeSection from '@/components/sections/about-me-section'
import { TimelineSection } from '@/components/sections/timeline-section'
import SkillsSections from '@/components/sections/skills-section'

export default function Page() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="absolute top-0 left-0 w-full">
          <HeroSection />
          <AboutMeSection />
          <TimelineSection data={timelineData} />
          <SkillsSections />
        </div>
      </div>
    </>
  )
}
