"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { ApplicationPageTable } from "./application-page-table";

const ApplicationPageTableColumns: ColumnDef<ApplicationPageTable>[] = [
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
          <span className="font-semibold text-(--ink-text-lighter) capitalize">
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
      return <div className="text-(--ink-text-lighter)">{stage ?? "-"}</div>;
    },
  },
  {
    accessorKey: "last_activity",
    header: "Last Activity",
    cell: ({ row }) => {
      const lastActivity = row.original.last_activity;
      return (
        <div className="rounded-sm p-1 text-sm text-(--ink-text-lighter)">
          {lastActivity ?? "-"}
        </div>
      );
    },
  },
  {
    accessorKey: "next_action",
    header: "Next Action",
    cell: ({ row }) => {
      const nextAction = row.original.next_action;
      return (
        <div className="flex space-x-2">
          <span className="text-(--ink-text-dark)/90 capitalize">
            {nextAction ?? "-"}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "match",
    header: "Match",
    cell: ({ row }) => (
      <span className="font-semibold text-(--ink-text-lighter)/90">
        {row.getValue("match")}
      </span>
    ),
  },
];

export default ApplicationPageTableColumns;
