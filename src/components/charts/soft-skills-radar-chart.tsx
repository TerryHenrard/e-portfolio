'use client'

import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'A radar chart'

const chartData = [
  { skill: 'Business Development', rating: 92 },
  { skill: 'Strategic Thinking', rating: 88 },
  { skill: 'Innovation', rating: 90 },
  { skill: 'Leadership', rating: 90 },
  { skill: 'Market Analysis', rating: 84 },
]

const chartConfig = {
  rating: {
    label: 'rating',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export function SoftSkillsRadarChart() {
  // Create accessible data summary for screen readers
  const skillsSummary = chartData
    .map((item) => `${item.skill}: ${item.rating}%`)
    .join(', ')

  // Enhanced accessibility announcement
  const handleChartFocus = () => {
    const announcement = `Soft skills radar chart focused. Interpersonal abilities shown in circular format. Skills include: ${skillsSummary}`
    const announcementElement = document.getElementById(
      'soft-skills-description'
    )
    if (announcementElement) {
      announcementElement.setAttribute('aria-live', 'assertive')
      announcementElement.textContent = announcement
      setTimeout(() => {
        announcementElement.setAttribute('aria-live', 'polite')
        announcementElement.textContent = `Soft skills proficiency radar chart showing interpersonal and leadership abilities. Skills and ratings: ${skillsSummary}`
      }, 3000)
    }
  }

  return (
    <Card
      className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl"
      role="img"
      aria-labelledby="soft-skills-title"
      aria-describedby="soft-skills-description"
      tabIndex={0}
      onFocus={handleChartFocus}
    >
      <CardHeader className="items-center pb-4">
        <CardTitle id="soft-skills-title" className="text-lg sm:text-xl">
          Soft skills
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 sm:px-4">
        {/* Hidden description for screen readers */}
        <div
          id="soft-skills-description"
          className="sr-only"
          aria-live="polite"
        >
          Soft skills proficiency radar chart showing interpersonal and
          leadership abilities. Skills and ratings: {skillsSummary}
        </div>{' '}
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-[4/3] max-h-64 sm:aspect-[5/3] sm:max-h-75"
        >
          <RadarChart
            data={chartData}
            aria-label="Soft skills radar chart"
            role="img"
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent />}
              accessibilityLayer
            />
            <PolarAngleAxis
              dataKey="skill"
              aria-label="Soft skills categories around radar perimeter"
            />
            <PolarGrid aria-hidden="true" />
            <Radar
              dataKey="rating"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              aria-label="Interpersonal skills proficiency area"
            />
          </RadarChart>
        </ChartContainer>
        {/* Accessible table for screen readers */}
        <table className="sr-only" aria-label="Soft skills data table">
          <caption>
            Interpersonal and leadership skills proficiency ratings
          </caption>
          <thead>
            <tr>
              <th scope="col">Interpersonal Skill</th>
              <th scope="col">Proficiency Rating (%)</th>
            </tr>
          </thead>
          <tbody>
            {chartData.map((item, index) => (
              <tr key={index}>
                <td>{item.skill}</td>
                <td>{item.rating}%</td>
              </tr>
            ))}
          </tbody>
        </table>
      </CardContent>
    </Card>
  )
}
