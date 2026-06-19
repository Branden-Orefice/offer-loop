import StatCards from "@/app/components/stat-cards";
import WeeklyGoalCard from "@/app/components/weekly-goal-card";

const DashboardHomePage = () => {
  return (
    <div className="px-6">
      <div className="flex gap-3">
        <StatCards title="Applications" value={80} loading={false} />
        <StatCards title="Interviews" value={14} loading={false} />
        <StatCards title="Offers" value={3} loading={false} />
        <StatCards
          title="Response Rate"
          titleClassName="text-(--accent-text-medium)"
          className="bg-(--ink-text-dark) text-(--card-background)"
          value={16}
          loading={false}
        />
      </div>
      <WeeklyGoalCard />
    </div>
  );
};

export default DashboardHomePage;
