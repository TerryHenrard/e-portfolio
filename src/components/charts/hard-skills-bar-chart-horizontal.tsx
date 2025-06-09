'use client'

import { Bar, BarChart, XAxis, YAxis } from 'recharts'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'A horizontal bar chart that shows hard skills'

const chartData = [
  { skill: 'Project management', rating: 85 },
  { skill: 'DevOps', rating: 85 },
  { skill: 'Security', rating: 80 },
  { skill: 'Architecture', rating: 80 },
  { skill: 'SEO', rating: 70 },
  { skill: 'Test & Quality', rating: 70 },
]

const chartConfig = {
  rating: {
    label: 'Rating',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export default function HardSkillsBarChartHorizontal() {
  // Create accessible data summary for screen readers
  const skillsSummary = chartData
    .map((item) => `${item.skill}: ${item.rating}%`)
    .join(', ')

  return (
    <Card
      className="mx-auto w-full max-w-md md:max-w-lg lg:max-w-xl"
      role="img"
      aria-labelledby="hard-skills-title"
      aria-describedby="hard-skills-description"
      tabIndex={0}
    >
      <CardHeader className="items-center pb-4">
        <CardTitle id="hard-skills-title" className="text-lg sm:text-xl">
          Hard skills
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 sm:px-4">
        {' '}
        {/* Hidden description for screen readers */}
        <div
          id="hard-skills-description"
          className="sr-only"
          aria-live="polite"
        >
          Technical skills proficiency horizontal bar chart showing programming
          languages and technologies. Skills and ratings: {skillsSummary}
        </div>
        <ChartContainer
          config={chartConfig}
          className="aspect-[4/3] max-h-64 sm:aspect-[5/3] sm:max-h-75"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ left: 30 }}
            aria-label="Hard skills horizontal bar chart"
            role="img"
          >
            <XAxis
              type="number"
              dataKey="rating"
              hide
              aria-label="Proficiency rating scale from 0 to 100"
            />
            <YAxis
              dataKey="skill"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              aria-label="Technical skills categories"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
              accessibilityLayer
            />
            <Bar
              dataKey="rating"
              fill="var(--color-desktop)"
              radius={5}
              aria-label="Skill proficiency bars"
            />
          </BarChart>
        </ChartContainer>
        {/* Accessible table for screen readers */}
        <table className="sr-only" aria-label="Hard skills data table">
          <caption>Technical skills proficiency ratings</caption>
          <thead>
            <tr>
              <th scope="col">Technology/Language</th>
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
