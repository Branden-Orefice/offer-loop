"use client";

import {
  Label,
  PolarRadiusAxis,
  PolarAngleAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

export const description = "A radial chart with text";

const applicationsSent = 9;
const weeklyGoal = 12;
const percent = (applicationsSent / weeklyGoal) * 100;

const chartData = [
  {
    name: "Applications sent",
    value: percent,
    fill: "var(--accent-text-medium)",
  },
];

const chartConfig = {
  applicationsSent: {
    label: "Applications sent",
  },
} satisfies ChartConfig;

const WeeklyGoalChart = () => {
  return (
    <div className="mt-2 flex flex-col">
      <ChartContainer config={chartConfig} className="h-[82px] w-[82px]">
        <RadialBarChart
          data={chartData}
          startAngle={90}
          endAngle={90 - 360}
          innerRadius={30}
          outerRadius={42}
        >
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar
            dataKey="value"
            background={{ fill: "var(--muted)" }}
            cornerRadius={999}
          />

          <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
            <Label
              content={({ viewBox }) => {
                if (!viewBox || !("cx" in viewBox) || !("cy" in viewBox))
                  return null;

                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan className="fill-foreground text-lg font-bold">
                      {applicationsSent}
                    </tspan>
                    <tspan className="fill-muted-foreground text-sm font-bold">
                      /{weeklyGoal}
                    </tspan>
                  </text>
                );
              }}
            />
          </PolarRadiusAxis>
        </RadialBarChart>
      </ChartContainer>
    </div>
  );
};

export default WeeklyGoalChart;
