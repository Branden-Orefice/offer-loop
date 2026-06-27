"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import LandingPageTable from "./landing-page-table";
import LandingPageTableColumns from "./landing-page-table-columns";
import mockData from "./mock-data";
import { Button } from "@/components/ui/button";

const LivePreview = () => {
  return (
    <div className="container mt-24 space-y-6">
      <p className="font-semibold text-(--accent-text-medium)">
        Live Preview
      </p>
      <Tabs defaultValue="pipeline" className="w-full">
        <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
          <h2 className="text-3xl font-bold text-(--ink-text-dark) md:text-4xl lg:text-5xl">
            A system that already knows where you stand.
          </h2>
          <TabsList className="pointer-events-none hidden sm:flex">
            <TabsTrigger value="pipeline">Pipeline</TabsTrigger>
            <TabsTrigger value="insights">Insights</TabsTrigger>
            <TabsTrigger value="AI Assist">AI Assist</TabsTrigger>
          </TabsList>
        </div>
        <TabsContent value="pipeline">
          <div className="border-border mt-6 flex flex-col gap-4 rounded-2xl border lg:flex-row">
            <div className="w-full overflow-x-auto lg:w-3/4">
              <LandingPageTable
                columns={LandingPageTableColumns}
                data={mockData}
                loading={false}
              />
            </div>
            <div className="space-y-4 p-4 lg:w-1/4">
              <div className="flex items-center justify-between">
                <p className="font-bold text-(--ink-text-dark)">
                  Inbox Activity
                </p>
                <p className="text-xs text-(--success-text)">• Live</p>
              </div>

              <div className="border-border relative space-y-6 border-l pl-4">
                <div className="relative">
                  <span className="absolute top-1.5 -left-[21px] h-2.5 w-2.5 rounded-full bg-(--accent-text-medium)" />
                  <p className="text-sm font-bold text-(--ink-text-dark)">
                    Google - offer letter received
                  </p>
                  <p className="text-xs text-(--ink-text-light)">
                    $218k base + equity
                  </p>
                  <p className="text-xs text-(--ink-text-light)">
                    Today • 9:14am
                  </p>
                </div>

                <div className="relative">
                  <span className="absolute top-1.5 -left-[21px] h-2.5 w-2.5 rounded-full bg-(--success-text)" />
                  <p className="text-sm font-bold text-(--ink-text-dark)">
                    Notion - on-site scheduled
                  </p>
                  <p className="text-xs text-(--ink-text-light)">
                    AI prep ready
                  </p>
                  <p className="text-xs text-(--ink-text-light)">2d ago</p>
                </div>

                <div className="relative">
                  <span className="absolute top-1.5 -left-[21px] h-2.5 w-2.5 rounded-full bg-(--ink-text-light)" />
                  <p className="text-sm font-bold text-(--ink-text-dark)">
                    Vercel
                  </p>
                  <p className="text-xs text-(--ink-text-light)">
                    via Careers Page
                  </p>
                  <p className="text-xs text-(--ink-text-light)">2d ago</p>
                </div>

                <div className="relative">
                  <span className="absolute top-1.5 -left-[21px] h-2.5 w-2.5 rounded-full bg-(--ink-text-light)" />
                  <p className="text-sm font-bold text-(--ink-text-dark)">
                    Linear
                  </p>
                  <p className="text-xs text-(--ink-text-light)">
                    via Recruiting
                  </p>
                  <p className="text-xs text-(--ink-text-light)">3d ago</p>
                </div>
              </div>
              <div className="rounded-xl bg-(--ink-text-dark) p-4">
                <div className="space-y-2">
                  <p className="text-xs tracking-wide text-(--accent-text-medium) uppercase">
                    AI Nudge
                  </p>
                  <p className="text-xs text-(--card-background)">
                    3 recruiters are waiting on follow-ups older than 5 days.
                  </p>
                </div>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Button className="bg-(--accent-text-medium) font-semibold text-(--ink-text-dark) transition-all duration-300 hover:bg-(--accent-text-medium)/80 hover:text-(--ink-text-dark)/80">
                    Draft all
                  </Button>
                  <Button
                    variant="ghost"
                    className="hover:bg-(--ink-text-dark)/80 border border-(--ink-text-medium) bg-(--ink-text-dark) font-semibold text-(--card-background) transition-all duration-300 hover:text-(--card-background)/80"
                  >
                    Review
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="insights">
          <div className="mt-6">insights</div>
        </TabsContent>
        <TabsContent value="AI Assist">
          <div className="mt-6">AI Assist</div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LivePreview;
