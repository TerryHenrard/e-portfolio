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
  { skill: 'Next.js', rating: 85 },
  { skill: 'React', rating: 85 },
  { skill: 'TypeScript', rating: 80 },
  { skill: 'IA', rating: 80 },
  { skill: 'C#', rating: 70 },
  { skill: 'Java', rating: 70 },
  { skill: 'SQL', rating: 65 },
]

const chartConfig = {
  rating: {
    label: 'Rating',
    color: 'var(--chart-1)',
  },
} satisfies ChartConfig

export default function HardSkillsBarChartHorizontal() {
  return (
    <Card className="w-150">
      <CardHeader className="items-center pb-4">
        <CardTitle>Hard skills</CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <ChartContainer config={chartConfig} className="max-h-75">
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{ left: 15 }}
          >
            <XAxis type="number" dataKey="rating" hide />
            <YAxis
              dataKey="skill"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="rating" fill="var(--color-desktop)" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
