"use client";

import { useState } from "react";
import {
  flexRender,
  getCoreRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export type MockApplication = {
  id: string;
  company: string;
  role: string;
  stage: string;
  last_activity: string;
  score: number;
  source: string;
};

interface Props {
  columns: ColumnDef<MockApplication>[];
  data: MockApplication[];
  loading: boolean;
}

const LandingPageTable = ({ columns, data, loading }: Props) => {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

  const companies = 12;
  const applications = 18;

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      columnVisibility,
      rowSelection,
      columnFilters,
    },
    enableRowSelection: true,
    onRowSelectionChange: setRowSelection,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  const visibleColumns = table.getVisibleLeafColumns();
  const skeletonRows = 8;

  return (
    <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-(--card-background)">
      <div className="h-full overflow-auto">
        <div className="border-b border-(--accent-text-lightest) p-4">
          <div className="flex items-baseline gap-2">
            <h3 className="text-md font-bold text-(--ink-text-dark)">
              Applications - recent activity{" "}
            </h3>
            <p className="text-xs font-light text-(--ink-text-lighter)">
              {companies} companies • {applications} applications
            </p>
            <div className="ml-auto">
              <Button
                variant="outline"
                size="sm"
                className="cursor-pointer bg-(--card-background) text-xs font-medium tracking-wider text-(--ink-text-dark) transition-all duration-300 hover:bg-(--card-background) hover:text-(--ink-text-dark)/80"
              >
                Stage
                <ChevronDown />
              </Button>
            </div>
          </div>
        </div>
        <Table>
          <TableHeader className="bg-(--card-background)">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="border-(--accent-text-lightest)"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-4 text-xs font-light tracking-wide text-(--ink-text-lighter) uppercase"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>

          <TableBody>
            {loading ? (
              Array.from({ length: skeletonRows }).map((_, rowIndex) => (
                <TableRow key={`sk-${rowIndex}`}>
                  {visibleColumns.map((col) => (
                    <TableCell key={`sk-${rowIndex}-${col.id}`}>
                      <Skeleton className="h-4 w-full" />
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : table.getRowModel().rows.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  className="data-[state=selected]:bg-primary/5 transition-all duration-200 hover:bg-(--ink-text-light)/20"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      className="px-4 py-3 font-medium text-(--ink-text-lighter)/90"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-100 text-center text-sm"
                >
                  <Empty>
                    <EmptyHeader>
                      <EmptyTitle>No MockApplications Found</EmptyTitle>
                      <EmptyDescription className="max-w-xs text-pretty">
                        No mock applications were found.
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LandingPageTable;
