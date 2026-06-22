"use client";

import { CircleQuestionMark } from "lucide-react";

const mockApplicationBoardData = [
  {
    id: 1,
    stage: "applied",
    company: "Stripe",
    match: 76,
    role: "Software Engineer L4",
    updatedAt: "inbox • 2d ago",
  },
  {
    id: 2,
    stage: "applied",
    company: "Linear",
    match: 72,
    role: "Frontend Engineer",
    updatedAt: "inbox • 3d ago",
  },
  {
    id: 3,
    stage: "applied",
    company: "Vercel",
    match: 68,
    role: "Senior Frontend Engineer",
    updatedAt: "inbox • 4d ago",
  },
  {
    id: 4,
    stage: "phone-screen",
    company: "Notion",
    match: 81,
    role: "Mid-Level Frontend Engineer",
    updatedAt: "inbox • 2d ago",
  },
  {
    id: 5,
    stage: "phone-screen",
    company: "Ramp",
    match: 79,
    role: "Senior Engineer",
    updatedAt: "inbox • 2d ago",
  },
  {
    id: 6,
    stage: "phone-screen",
    company: "Airtable",
    match: 74,
    role: "FullStack Engineer",
    updatedAt: "inbox • 3d ago",
  },
  {
    id: 7,
    stage: "on-site",
    company: "Retool",
    match: 88,
    role: "Senior Engineer",
    updatedAt: "inbox • yesterday",
  },
  {
    id: 8,
    stage: "on-site",
    company: "Google",
    match: 85,
    role: "Senior Frontend Engineer",
    updatedAt: "inbox • 4d ago",
  },
  {
    id: 9,
    stage: "offer",
    company: "Loom",
    match: 94,
    role: "Senior FullStack Engineer",
    updatedAt: "inbox • today 9:14am",
  },
  {
    id: 10,
    stage: "offer",
    company: "Coda",
    match: 83,
    role: "Frontend Engineer",
    updatedAt: "inbox • 3d ago",
  },
  {
    id: 11,
    stage: "closed",
    company: "Datadog",
    match: 70,
    role: "Backend Engineer",
    updatedAt: "inbox • 2 wk ago",
  },
  {
    id: 12,
    stage: "closed",
    company: "Cloudflare",
    match: 65,
    role: "Senior Engineer",
    updatedAt: "inbox • 3 wk ago",
  },
];

const ApplicationsBoard = () => {
  const stages = [
    { id: "applied", label: "Applied" },
    { id: "phone-screen", label: "Phone Screen" },
    { id: "on-site", label: "On-site" },
    { id: "offer", label: "Offer" },
    { id: "closed", label: "Closed" },
  ];

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
                  className="rounded-lg bg-(--card-background) p-6"
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
    </div>
  );
};

export default ApplicationsBoard;
