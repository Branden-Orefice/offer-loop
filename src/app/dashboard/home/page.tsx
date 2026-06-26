"use client";

import StatCards from "@/components/stat-cards";
import AiAssistantCard from "@/components/ai-assistant-card";
import AnalyticsChart from "@/components/analytics-chart";
import WeeklyGoalCard from "@/components/weekly-goal-card";
import AiPracticeCard from "@/components/ai-practice-card";
import ApplicationsTable from "@/components/application-table";
import ApplicationTableColumns from "@/components/application-table-columns";
import AiResumeAnalysisCard from "@/components/ai-resume-analysis-card";

const DashboardHomePage = () => {
  return (
    <div className="mx-auto px-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
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
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_375px]">
        <div className="flex flex-col gap-6">
          <AnalyticsChart />
          <ApplicationsTable
            columns={ApplicationTableColumns}
            data={[]}
            loading={false}
            onSelectApplication={() => null}
            selectedApplicationId={null}
          />
        </div>
        <div className="flex flex-col gap-6">
          <AiAssistantCard />
          <AiPracticeCard />
          <AiResumeAnalysisCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardHomePage;
