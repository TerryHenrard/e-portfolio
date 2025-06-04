# Timeline System Usage Guide

This document explains how to use the improved timeline system that makes it easy to manage timeline content and data.

## Overview

The timeline system consists of:

- **Data files**: Store timeline content for specific years
- **Helper functions**: Create timeline entries easily
- **Reusable components**: Generate consistent timeline UI
- **Type definitions**: Ensure data consistency

## File Structure

```
src/
├── types/
│   └── timeline.ts          # Type definitions
├── components/
│   └── timeline-generator.tsx # Reusable timeline UI component
├── lib/
│   └── timeline-helpers.tsx  # Helper functions
└── data/
    ├── timeline-2025.ts     # 2025 timeline data
    ├── timeline-2024.ts     # 2024 timeline data
    └── timeline-data.tsx    # Main timeline configuration
```

## Adding a New Timeline Year

### 1. Create a data file

Create a new file `src/data/timeline-YEAR.ts`:

```typescript
import type { TimelineYear } from '@/types/timeline'

export const timelineYEARData: TimelineYear = {
  timelineItems: [
    {
      text: 'Your timeline item text here.',
    },
    {
      text: 'Timeline item with link and technologies.',
      link: {
        url: 'https://example.com',
        text: 'Project Name',
      },
      technologies: [{ name: 'React' }, { name: 'TypeScript' }],
    },
  ],
  galleryImages: [
    {
      src: '/your-image.png',
      alt: 'Description of your image',
      objectFit: 'cover', // or 'contain'
    },
  ],
}
```

### 2. Add to main timeline

In `src/data/timeline-data.tsx`, import your new data and add it:

```typescript
import { timelineYEARData } from './timeline-YEAR'

export const timelineData = [
  createTimelineEntry('YEAR', timelineYEARData),
  // ... other entries
]
```

## Creating Custom Timeline Entries

For non-standard timeline entries (like changelog), use `createCustomTimelineEntry`:

```typescript
createCustomTimelineEntry(
  'Custom Title',
  <div>
    {/* Your custom JSX content */}
  </div>
)
```

## Configuration Options

### Timeline Entry Options

- `showGoInDepth`: Boolean to show/hide the "Go in Depth" button (default: true)

```typescript
createTimelineEntry('2024', timeline2024Data, false) // Hide "Go in Depth"
```

### Image Options

- `objectFit`: 'cover' | 'contain' - How the image should fit in its container
- `src`: Image path (relative to /public)
- `alt`: Accessible description

### Timeline Item Options

- `text`: Main text content
- `link`: Optional external link with URL and display text
- `technologies`: Optional array of technologies used

## Type Safety

All data is type-checked using TypeScript interfaces:

- `TimelineYear`: Complete year data structure
- `TimelineItem`: Individual timeline item
- `GalleryImage`: Image with metadata
- `Link`: External link structure
- `Technology`: Technology name

## Benefits

1. **Easy to maintain**: Each year has its own data file
2. **Consistent UI**: Shared components ensure uniform appearance
3. **Type safety**: TypeScript prevents data structure errors
4. **Reusable**: Components can be used in different contexts
5. **Scalable**: Easy to add new years or modify existing ones

## Example: Adding 2023 Timeline

1. Create `src/data/timeline-2023.ts`
2. Add data following the `TimelineYear` interface
3. Import in `timeline-data.tsx`
4. Add `createTimelineEntry('2023', timeline2023Data)` to the array

That's it! The new timeline will automatically render with all the proper styling and functionality.
