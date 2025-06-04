import { timeline2025Data } from './timeline-2025'
import { timeline2024Data } from './timeline-2024'
import { createTimelineEntry } from '@/lib/timeline-helpers'
import { timeline2023Data } from './timeline-2023'

export const timelineData = [
  createTimelineEntry('2025', timeline2025Data),
  createTimelineEntry('2024', timeline2024Data, false),
  createTimelineEntry('2023', timeline2023Data, false),
]
