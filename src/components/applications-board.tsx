"use client";

import { CircleQuestionMark } from "lucide-react";
import { useState } from "react";
import ApplicationSheet from "@/components/application-sheet";
import type { Application } from "@/components/application-table";

const mockApplicationBoardData = [
  {
    id: 1,
    stage: "applied",
    company: "Stripe",
    match: 76,
    role: "Software Engineer L4",
    updatedAt: "inbox • 2d ago",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Remote",
    applied: "2 days ago",
    compensation: "$80,000",
    source: "LinkedIn",
  },
  {
    id: 2,
    stage: "applied",
    company: "Linear",
    match: 72,
    role: "Frontend Engineer",
    updatedAt: "inbox • 3d ago",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Remote",
    applied: "3 days ago",
    compensation: "$75,000",
    source: "Indeed",
  },
  {
    id: 3,
    stage: "applied",
    company: "Vercel",
    match: 68,
    role: "Senior Frontend Engineer",
    updatedAt: "inbox • 4d ago",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Miami, FL",
    applied: "4 days ago",
    compensation: "$70,000",
    source: "LinkedIn",
  },
  {
    id: 4,
    stage: "phone-screen",
    company: "Notion",
    match: 81,
    role: "Mid-Level Frontend Engineer",
    updatedAt: "inbox • 2d ago",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Remote",
    applied: "2 days ago",
    compensation: "$85,000",
    source: "Dice",
  },
  {
    id: 5,
    stage: "phone-screen",
    company: "Ramp",
    match: 79,
    role: "Senior Engineer",
    updatedAt: "inbox • 2d ago",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "SF, Cali",
    applied: "2 days ago",
    compensation: "$85,000",
    source: "LinkedIn referral",
  },
  {
    id: 6,
    stage: "phone-screen",
    company: "Airtable",
    match: 74,
    role: "FullStack Engineer",
    updatedAt: "inbox • 3d ago",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Remote",
    applied: "3 days ago",
    compensation: "$74,000",
    source: "GlassDoor",
  },
  {
    id: 7,
    stage: "on-site",
    company: "Retool",
    match: 88,
    role: "Senior Engineer",
    updatedAt: "inbox • yesterday",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Denver, CO",
    applied: "yesterday",
    compensation: "$88,000",
    source: "Indeed",
  },
  {
    id: 8,
    stage: "on-site",
    company: "Google",
    match: 85,
    role: "Senior Frontend Engineer",
    updatedAt: "inbox • 4d ago",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Miami, FL",
    applied: "4 days ago",
    compensation: "$70,000",
    source: "LinkedIn",
  },
  {
    id: 9,
    stage: "offer",
    company: "Loom",
    match: 94,
    role: "Senior FullStack Engineer",
    updatedAt: "inbox • today 9:14am",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Washington, DC",
    applied: "today 9:14am",
    compensation: "$94,000",
    source: "Indeed",
  },
  {
    id: 10,
    stage: "offer",
    company: "Coda",
    match: 83,
    role: "Frontend Engineer",
    updatedAt: "inbox • 3d ago",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Remote",
    applied: "3 days ago",
    compensation: "$83,000",
    source: "Dice",
  },
  {
    id: 11,
    stage: "closed",
    company: "Datadog",
    match: 70,
    role: "Backend Engineer",
    updatedAt: "inbox • 2 wk ago",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Remote",
    applied: "2 wk ago",
    compensation: "$70,000",
    source: "LinkedIn",
  },
  {
    id: 12,
    stage: "closed",
    company: "Cloudflare",
    match: 65,
    role: "Senior Engineer",
    updatedAt: "inbox • 3 wk ago",
    recruiter: "Sarah Chen",
    last_activity: "",
    location: "Remote",
    applied: "3 wk ago",
    compensation: "$65,000",
    source: "LinkedIn",
  },
];

const ApplicationsBoard = () => {
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);

  const stages = [
    { id: "applied", label: "Applied" },
    { id: "phone-screen", label: "Phone Screen" },
    { id: "on-site", label: "On-site" },
    { id: "offer", label: "Offer" },
    { id: "closed", label: "Closed" },
  ];

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setSelectedApplication(null);
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 rounded-lg border border-(--accent-text-light) bg-(--accent-text-light)/30 px-2 py-1.5">
        <CircleQuestionMark className="h-3 w-3 text-(--ink-text-lighter)" />
        <p className="text-xs text-(--ink-text-lighter)">
          Cards move automatically as OfferLoop reads your inbox. This is a
          read-only overview. Need to correct a stage? Open a card and use{" "}
          <span className="font-bold">Move Stage.</span>
        </p>
      </div>

      <div className="mt-4 grid grid-cols-5 gap-4">
        {stages.map((stage) => {
          const applications = mockApplicationBoardData.filter(
            (item) => item.stage === stage.id,
          );
          return (
            <div key={stage.id} className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="font-semibold text-(--ink-text-dark)">
                  {stage.label}
                </p>
                <p className="text-(--ink-text-lighter)">
                  {applications.length}
                </p>
              </div>

              {applications.map((application) => (
                <div
                  key={application.id}
                  className="border-border cursor-pointer rounded-lg border bg-(--card-background) p-6 transition-all duration-300 hover:border-(--accent-text-medium)"
                  onClick={() => setSelectedApplication(application)}
                >
                  <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-(--ink-text-dark)">
                      {application.company}
                    </h2>
                    <p className="text-(--ink-text-lighter)">
                      {application.match}
                    </p>
                  </div>

                  <p className="text-sm font-light text-(--ink-text-dark)">
                    {application.role}
                  </p>
                  <p className="text-xs text-(--ink-text-lighter)/80">
                    {application.updatedAt}
                  </p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
      <ApplicationSheet
        selectedApplication={selectedApplication}
        open={!!selectedApplication}
        onOpenChange={handleOpenChange}
      />
    </div>
  );
};

export default ApplicationsBoard;
