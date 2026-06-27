"use client";

import { ArrowUp, FileUser } from "lucide-react";
import {
  Empty,
  EmptyDescription,
  EmptyHeader,
  EmptyTitle,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";

const AiResumeAnalysisCard = () => {
  const aiResumeFix =
    " Quantity impact on 2 bullet points. Add metrics like latency or revenue.";
  const uploadedResume = "Branden_Orefice_SWE.pdf";
  const aiResumeAnalysisScore = 86;
  return (
    <div className="w-full flex-1 overflow-hidden rounded-xl border-none bg-(--card-background) p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-(--accent-text-medium) bg-(--accent-text-medium)/15">
          <FileUser className="text-(--accent-text-medium)" size={16} />
        </div>
        <p className="font-bold text-(--ink-text-dark)">Resume analysis</p>
      </div>
      <div className="mt-4 space-y-4">
        <div className="border-border rounded-lg border bg-(--accent-background) p-4">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="border-border flex h-12 w-10 shrink-0 flex-col justify-end gap-1 rounded-md border bg-(--card-background) p-1.5">
                <span className="h-0.5 w-full rounded bg-(--ink-text-medium)/80" />
                <span className="h-0.5 w-3/4 rounded bg-(--ink-text-medium)/80" />
                <span className="h-0.5 w-full rounded bg-(--accent-text-medium)/80" />
              </div>
              <div className="flex flex-col overflow-hidden">
                <p className="truncate text-xs font-bold text-(--ink-text-dark)">
                  {uploadedResume}
                </p>
                <p className="text-[11px] font-extralight text-(--ink-text-lighter)">
                  Updated 5 days ago • 1 page
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-row items-center gap-2 sm:ml-auto sm:flex-col sm:gap-0">
              <p className="text-lg font-bold text-(--success-text)">
                {aiResumeAnalysisScore}
              </p>
              <span className="text-xs font-extralight text-(--ink-text-lighter)">
                score
              </span>
            </div>
          </div>
        </div>
        <p className="text-xs text-(--ink-text-lighter)">
          <span className="text-xs font-bold text-(--accent-text-medium)">
            Top fix:
          </span>
          {aiResumeFix}
        </p>
        <Empty className="max-h-48 cursor-pointer border border-dashed border-(--accent-text-light) bg-(--accent-background) py-6 sm:max-h-30">
          <EmptyHeader className="px-4 text-center">
            <Button
              variant="outline"
              size="icon"
              className="mx-auto bg-(--card-background) transition-all duration-300 hover:bg-(--card-background)/80 sm:mx-0"
            >
              <ArrowUp className="text-(--accent-text-medium)" size={16} />
            </Button>
            <EmptyTitle className="text-sm text-(--ink-text-dark)">
              Drop a new resume to re-analyze
            </EmptyTitle>
            <EmptyDescription className="text-xs text-(--ink-text-lighter)/80">
              PDF or DOCX - max 5MB
            </EmptyDescription>
          </EmptyHeader>
        </Empty>
      </div>
    </div>
  );
};

export default AiResumeAnalysisCard;
