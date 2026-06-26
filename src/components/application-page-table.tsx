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
import TablePagination from "@/components/table-pagination";

export type ApplicationPageTable = {
  id: string;
  company: string;
  role: string;
  stage: string;
  last_activity: string;
  next_action: string;
  match: number;
};

interface Props {
  columns: ColumnDef<ApplicationPageTable>[];
  data: ApplicationPageTable[];
  loading: boolean;
  selectedApplicationId: string | null;
  onSelectApplication: (id: string) => void;
}

const ApplicationPageTable = ({
  columns,
  data,
  loading,
  selectedApplicationId,
  onSelectApplication,
}: Props) => {
  const [rowSelection, setRowSelection] = useState({});
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [sorting, setSorting] = useState<SortingState>([]);

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
        <Table>
          <TableHeader className="rounded-2xl bg-(--sidebar-background)">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="hover:bg-card/30 border-(--accent-text-lightest)"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      key={header.id}
                      colSpan={header.colSpan}
                      className="px-4 text-[11px] font-light tracking-wide text-(--ink-text-lighter) uppercase"
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
                  onClick={() => onSelectApplication(row.original.id)}
                  data-state={
                    row.original.id === selectedApplicationId && "selected"
                  }
                  className="hover:bg-muted/80 data-[state=selected]:bg-primary/5 cursor-pointer transition-all duration-200"
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
              <TableRow className="hover:bg-transparent">
                <TableCell
                  colSpan={columns.length}
                  className="h-100 text-center text-sm"
                >
                  <Empty>
                    <EmptyHeader>
                      <EmptyTitle>No Applications Found</EmptyTitle>
                      <EmptyDescription className="max-w-xs text-pretty">
                        Once you click the add application button, we will
                        update this automatically with new applications in
                        realtime.
                      </EmptyDescription>
                    </EmptyHeader>
                  </Empty>
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="p-4">
          <TablePagination table={table} />
        </div>
      </div>
    </div>
  );
};

export default ApplicationPageTable;
