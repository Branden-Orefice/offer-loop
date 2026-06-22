"use client";

import ApplicationPageTable from "@/components/application-page-table";
import ApplicationPageTableColumns from "@/components/application-page-table-columns";
import ApplicationsBoard from "@/components/applications-board";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, Play, RotateCw, Star, Undo2 } from "lucide-react";

const mockApplicationData = [
  {
    id: 1,
    stage: "offer",
    company: "Loom",
    icon: <Star className="h-4 w-4" />,
    description: "$218k offer, respond before it expires",
    action: "review offer",
    timeFrame: "in 2 days",
  },
  {
    id: 2,
    stage: "interview",
    company: "Notion",
    icon: <Play className="h-4 w-4" />,
    description: "EM phone screen, prep deck is ready",
    action: "Start prep",
    timeFrame: "Tue 2pm",
  },
  {
    id: 3,
    stage: "waiting on you",
    company: "Airtable",
    icon: <Undo2 className="h-4 w-4" />,
    description: "Recruiter needs your availability",
    action: "Send times",
    timeFrame: "2d idle",
  },
  {
    id: 4,
    stage: "interview",
    company: "Retool",
    icon: <Play className="h-4 w-4" />,
    description: "On-site Friday, system design focus",
    action: "Start prep",
    timeFrame: "Fri",
  },
];

const DashboardApplicationsPage = () => {
  return (
    <div className="mx-auto min-h-dvh px-6">
      <div className="rounded-xl border-none bg-(--ink-text-dark) p-6">
        <div className="flex">
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-(--card-background)">
              What needs you today
            </h2>
            <p className="text-xs tracking-wide text-(--accent-text-medium) uppercase">
              OfferLoop tracked the rest • 4 items need action
            </p>
          </div>
          <div className="ml-auto flex items-center gap-2 text-xs text-white/85">
            <RotateCw className="h-3 w-3 text-white/85" />
            <span>synced 2 min ago</span>
          </div>
        </div>

        <div className="flex gap-4">
          {mockApplicationData.map((application) => (
            <div
              key={application.id}
              className="border-border/15 card-glass-background mt-4 flex w-full flex-col rounded-xl p-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-wide text-(--accent-text-medium) uppercase">
                  {application.stage}
                </span>
                <div className="card-glass-background rounded-md p-1">
                  <span className="text-(--accent-text-medium)">
                    {application.icon}
                  </span>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-wide text-(--card-background)">
                  {application.company}
                </span>
                <span className="text-xs tracking-wide text-white/60">
                  {application.description}
                </span>
              </div>
              <div className="flex items-center justify-between pt-2">
                <Button
                  variant="ghost"
                  className="hover:bg-card-glass-background cursor-pointer p-0 transition-all duration-300 hover:text-white/40"
                >
                  <span className="text-xs tracking-wide text-(--accent-text-medium) capitalize">
                    {application.action}
                  </span>
                  <ArrowRight className="h-2 w-2 text-(--accent-text-medium)" />
                </Button>
                <span className="text-xs tracking-wide text-white/60">
                  {application.timeFrame}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <Tabs defaultValue="list" className="min-h-dvh w-full">
          <TabsList>
            <TabsTrigger value="list">List</TabsTrigger>
            <TabsTrigger value="board">Board</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>
          <TabsContent value="list">
            <div className="mt-6">
              <ApplicationPageTable
                columns={ApplicationPageTableColumns}
                data={[]}
              />
            </div>
          </TabsContent>
          <TabsContent value="board">
            <div className="mt-6">
              <ApplicationsBoard />
            </div>
          </TabsContent>
          <TabsContent value="calendar">
            <div>calendar</div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default DashboardApplicationsPage;
