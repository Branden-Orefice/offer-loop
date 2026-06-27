"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { MockApplication } from "@/components/landing-page/landing-page-table";

const LandingPageTableColumns: ColumnDef<MockApplication>[] = [
  {
    accessorKey: "company_role",
    header: "company / role",
    cell: ({ row }) => {
      const companyAndRole = row.original;
      return (
        <div className="flex flex-col">
          <span className="font-semibold text-(--ink-text-dark) capitalize">
            {companyAndRole.company}
          </span>
          <span className="font-light text-(--ink-text-lighter) capitalize">
            {companyAndRole.role}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "stage",
    header: "Stage",
    cell: ({ row }) => {
      const stage = row.original.stage;
      return (
        <div className="text-xs font-light text-(--ink-text-lighter)">
          {stage ?? "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "last_activity",
    header: "Last Activity",
    cell: ({ row }) => {
      const lastActivity = row.original.last_activity;
      return (
        <div className="text-xs font-light text-(--ink-text-lighter)">
          {lastActivity ?? "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "source",
    header: "Source",
    cell: ({ row }) => {
      const source = row.original.source;
      return (
        <span className="text-xs font-light text-(--ink-text-lighter)">
          {source ?? "-"}
        </span>
      );
    },
  },
  {
    accessorKey: "score",
    header: "Score",
    cell: ({ row }) => {
      const score = row.original.score;
      return (
        <span className="text-xs font-bold text-(--ink-text-dark)">
          {score ?? "-"}
        </span>
      );
    },
  },
];

export default LandingPageTableColumns;
