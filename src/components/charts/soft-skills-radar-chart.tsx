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
  { skill: 'Start-up', rating: 95 },
  { skill: 'Leadership', rating: 90 },
  { skill: 'Problem Solving', rating: 88 },
  { skill: 'Adaptability', rating: 82 },
  { skill: 'Project management', rating: 90 },
]

const chartConfig = {
  rating: {
    label: 'rating',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export function SoftSkillsRadarChart() {
  return (
    <Card className="w-150">
      <CardHeader className="items-center pb-4">
        <CardTitle>Soft skills</CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-[4/3] max-h-75"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="skill" />
            <PolarGrid />
            <Radar
              dataKey="rating"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
