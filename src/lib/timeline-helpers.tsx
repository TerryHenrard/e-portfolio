import React from 'react'
import { TimelineGenerator } from '@/components/timeline-generator'
import type { TimelineEntry, TimelineYear } from '@/types/timeline'

/**
 * Creates a timeline entry with the specified year and data
 */
export const createTimelineEntry = (
  year: string,
  data: TimelineYear,
  showGoInDepth: boolean = true
): TimelineEntry => ({
  title: year,
  content: (
    <TimelineGenerator
      timelineItems={data.timelineItems}
      galleryImages={data.galleryImages}
      showGoInDepth={showGoInDepth}
    />
  ),
})

/**
 * Creates a simple timeline entry with custom content
 */
export const createCustomTimelineEntry = (
  title: string,
  content: React.ReactNode
): TimelineEntry => ({
  title,
  content,
})
