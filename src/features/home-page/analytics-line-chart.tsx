"use client";

import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "An area chart with gradient fill";

const chartData = [
  { week: "wk1", applications: 12 },
  { week: "wk2", applications: 5 },
  { week: "wk3", applications: 18 },
  { week: "wk4", applications: 9 },
  { week: "wk5", applications: 21 },
  { week: "wk6", applications: 15 },
];

const chartConfig = {
  applications: {
    label: "Applications",
    color: "var(--accent-text-medium)",
  },
} satisfies ChartConfig;

const AnalyticsLineChart = () => {
  return (
    <ChartContainer config={chartConfig}>
      <AreaChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 12,
          right: 12,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="week"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
        <defs>
          <linearGradient id="applications" x1="0" y1="0" x2="0" y2="1">
            <stop
              offset="5%"
              stopColor="var(--accent-text-medium)"
              stopOpacity={0.8}
            />
            <stop
              offset="95%"
              stopColor="var(--accent-text-medium)"
              stopOpacity={0.1}
            />
          </linearGradient>
        </defs>
        <Area
          dataKey="applications"
          type="natural"
          fill="url(#applications)"
          fillOpacity={0.4}
          stroke="var(--accent-text-medium)"
          stackId="a"
        />
      </AreaChart>
    </ChartContainer>
  );
};

export default AnalyticsLineChart;
