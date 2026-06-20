import StatCards from "@/components/stat-cards";
import AiAssistantCard from "@/features/home-page/ai-assistant-card";
import AnalyticsChart from "@/features/home-page/analytics-chart";
import WeeklyGoalCard from "@/features/home-page/weekly-goal-card";

const DashboardHomePage = () => {
  return (
    <div className="mx-auto px-6">
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
      <div className="flex gap-4">
        <AnalyticsChart />
        <AiAssistantCard />
      </div>
    </div>
  );
};

export default DashboardHomePage;
