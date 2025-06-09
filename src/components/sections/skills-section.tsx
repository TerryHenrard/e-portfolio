import HardSkillsBarChartHorizontal from '../charts/hard-skills-bar-chart-horizontal'
import { SoftSkillsRadarChart } from '../charts/soft-skills-radar-chart'

export default function SkillsSections() {
  return (
    <section
      className="container mx-auto my-8 px-4 sm:my-16 sm:px-6 lg:my-30 lg:px-8"
      aria-labelledby="skills-heading"
      role="region"
    >
      <h3
        id="skills-heading"
        className="mb-8 text-center text-2xl font-semibold sm:mb-12 sm:text-3xl lg:mb-16"
      >
        Skills & Expertise
      </h3>
      <div
        className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2 md:gap-8 lg:gap-12"
        role="group"
        aria-label="Professional skills visualization charts"
      >
        <SoftSkillsRadarChart />
        <HardSkillsBarChartHorizontal />
      </div>
    </section>
  )
}
