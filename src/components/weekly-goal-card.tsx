"use client";

import WeeklyGoalChart from "@/components/weekly-goal-chart";
import { Diamond, Star } from "lucide-react";

const WeeklyGoalCard = () => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString("en-US", { weekday: "long" });

  const weeklyGoalDaysLeft = () => {
    if (date === "Sunday") {
      return 7;
    } else {
      return 7 - currentDate.getDay();
    }
  };

  return (
    <div className="mt-6 w-full rounded-2xl bg-(--card-background) p-4 sm:p-6">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <p className="text-lg font-bold tracking-wide text-(--ink-text-dark)">
            This week&apos;s goals
          </p>

          <p className="text-xs text-(--ink-text-lighter)">
            resets Sunday • {weeklyGoalDaysLeft()} days left
          </p>
        </div>

        <button className="text-left text-sm text-(--accent-text-medium) sm:ml-auto">
          Adjust goals
        </button>
      </div>

      <div className="mt-6 grid w-full grid-cols-1 gap-6 text-(--ink-text-lighter) sm:grid-cols-2 xl:grid-cols-4">
        <div className="flex min-w-0 items-center rounded-xl border border-white/15">
          <div className="shrink-0">
            <WeeklyGoalChart />
          </div>

          <div className="ml-4 min-w-0">
            <p className="font-semibold text-(--ink-text-dark)">
              Applications sent
            </p>
            <p className="text-sm">
              3 more to hit your weekly target. You&apos;re{" "}
              <span className="font-bold text-(--success-text)">on track.</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="text-left">
            <p className="text-xs font-light tracking-wide text-(--ink-text-lighter) uppercase">
              Current Streak
            </p>
            <p className="text-sm text-(--ink-text-lighter)">
              <span className="text-3xl font-bold text-(--ink-text-dark)">
                12
              </span>{" "}
              days
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-(--accent-text-medium) bg-(--accent-text-medium)/15">
            <Star className="text-(--ink-text-dark)" size={16} />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <p className="font-bold text-(--ink-text-dark)">First offer</p>
            <p className="text-sm text-(--ink-text-lighter)">
              Unlocked 2 days ago
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-(--ink-text-medium) bg-(--ink-text-medium)/15">
            <Diamond className="text-(--ink-text-medium)/60" size={16} />
          </div>
          <div className="ml-4 flex flex-col justify-center">
            <p className="font-bold text-(--ink-text-dark)">100 applications</p>
            <p className="text-sm text-(--ink-text-lighter)">20 to go</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeeklyGoalCard;
