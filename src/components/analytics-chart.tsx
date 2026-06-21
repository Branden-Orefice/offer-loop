"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import AnalyticsConversionCard from "@/components/analytics-conversion-card";
import AnalyticsLineChart from "@/components/analytics-line-chart";

const AnalyticsChart = () => {
  return (
    <div className="mt-6 max-h-[325px] w-full rounded-2xl bg-(--card-background) p-4 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <p className="text-lg font-bold tracking-wide text-(--ink-text-dark)">
            Analytics
          </p>
          <p className="text-xs text-(--ink-text-lighter)">last 30 days</p>
        </div>

        <div className="ml-auto flex">
          <Link href="/dashboard/analytics">
            <Button
              variant="ghost"
              className="cursor-pointer text-sm text-(--accent-text-medium) hover:bg-(--card-background) hover:text-(--accent-text-medium)/80"
            >
              Full Report <ArrowRight size={12} />
            </Button>
          </Link>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-2">
          <p className="text-xs text-(--ink-text-lighter) uppercase">
            Conversion Funnel
          </p>
          <AnalyticsConversionCard />
        </div>
        <div className="space-y-2">
          <p className="text-xs text-(--ink-text-lighter) uppercase">
            Applications / Week
          </p>
          <AnalyticsLineChart />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsChart;
