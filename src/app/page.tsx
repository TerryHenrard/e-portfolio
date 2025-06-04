import React from 'react'
import { Timeline } from '@/components/timeline'
import { timelineData } from '@/data/timeline-data'
import HeroSection from '@/components/hero-section'

export default function Page() {
  return (
    <>
      <div className="min-h-screen w-full">
        <div className="absolute top-0 left-0 w-full">
          <HeroSection />
          <Timeline data={timelineData} />
        </div>
      </div>
    </>
  )
}
