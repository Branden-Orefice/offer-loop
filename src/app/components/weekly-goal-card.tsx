import WeeklyGoalChart from "@/app/components/weekly-goal-chart";

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
    <div className="container mt-6 rounded-2xl bg-(--card-background) p-6">
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold tracking-wide text-(--ink-text-dark)">
          This week&apos;s goals
        </p>
        <p className="text-xs text-(--ink-text-lighter)">
          resets Sunday • {weeklyGoalDaysLeft()} days left
        </p>
        <div className="ml-auto flex">
          <p className="text-sm text-(--accent-text-medium)">Adjust goals</p>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 text-(--ink-text-lighter) md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col justify-center border-white/15 md:border-l md:pt-2 md:pl-2">
          <WeeklyGoalChart />
        </div>
      </div>
    </div>
  );
};

export default WeeklyGoalCard;
