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
    " Quanity impact on 2 bullet points. Add metrics like latency or revenue.";
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
          <div className="flex items-center gap-4">
            <div className="border-border flex h-12 w-10 flex-col justify-end gap-1 rounded-md border bg-(--card-background) p-1.5">
              <span className="h-0.5 w-full rounded bg-(--ink-text-medium)/80" />
              <span className="h-0.5 w-3/4 rounded bg-(--ink-text-medium)/80" />
              <span className="h-0.5 w-full rounded bg-(--accent-text-medium)/80" />
            </div>
            <div className="flex flex-col">
              <p className="text-xs font-bold text-(--ink-text-dark)">
                {uploadedResume}
              </p>
              <p className="text-[11px] font-extralight text-(--ink-text-lighter)">
                Updated 5 days ago • 1 page
              </p>
            </div>
            <div className="ml-auto flex flex-col items-center">
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
        <Empty className="max-h-30 cursor-pointer border border-dashed border-(--accent-text-light) bg-(--accent-background)">
          <EmptyHeader>
            <Button
              variant="outline"
              size="icon"
              className="bg-(--card-background) transition-all duration-300 hover:bg-(--card-background)/80"
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
