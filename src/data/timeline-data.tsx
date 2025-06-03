import Image from 'next/image'
import { timeline2025Data } from './timeline-2025'
import { timeline2024Data } from './timeline-2024'
import {
  createTimelineEntry,
  createCustomTimelineEntry,
} from '@/lib/timeline-helpers'

export const timelineData = [
  createTimelineEntry('2025', timeline2025Data),
  createTimelineEntry('2024', timeline2024Data, false), // No "Go in Depth" button for 2024
  createCustomTimelineEntry(
    'Changelog',
    <div>
      <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
        Deployed 5 new components on Aceternity today
      </p>
      <div className="mb-8">
        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
          ✅ Card grid component
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
          ✅ Startup template Aceternity
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
          ✅ Random file upload lol
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
          ✅ Himesh Reshammiya Music CD
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
          ✅ Salman Bhai Fan Club registrations open
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <Image
          src="https://placehold.co/600x400"
          alt="hero template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <Image
          src="https://placehold.co/600x400"
          alt="feature template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <Image
          src="https://placehold.co/600x400"
          alt="bento template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
        <Image
          src="https://placehold.co/600x400"
          alt="cards template"
          width={500}
          height={500}
          className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
        />
      </div>
    </div>
  ),
]
