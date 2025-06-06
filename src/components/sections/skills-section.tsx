import HardSkillsBarChartHorizontal from '../charts/hard-skills-bar-chart-horizontal'
import { SoftSkillsRadarChart } from '../charts/soft-skills-radar-chart'

export default function SkillsSections() {
  return (
    <section className="container mx-auto my-8 px-4 sm:my-16 sm:px-6 lg:my-30 lg:px-8">
      <h3 className="mb-30 text-center text-3xl">Skills & Expertise</h3>
      <div className="grid grid-cols-2 place-items-center">
        <SoftSkillsRadarChart />
        <HardSkillsBarChartHorizontal />
      </div>
    </section>
  )
}
