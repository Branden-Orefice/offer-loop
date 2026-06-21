"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const AiPracticeCard = () => {
  const company = "Retool";
  const interviewDay = "Friday";

  const systemDesignValue = 82;
  const behavioralValue = 91;
  const codingFluencyValue = 64;

  const systemDesignProgressValue = Math.trunc((systemDesignValue / 100) * 100);
  const behavioralProgressValue = Math.trunc((behavioralValue / 100) * 100);
  const codingProgressValue = Math.trunc((codingFluencyValue / 100) * 100);
  return (
    <div className="h-70 w-full flex-1 overflow-hidden rounded-xl border-none bg-(--card-background) p-6">
      <div className="flex items-center gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-md border border-(--accent-text-medium) bg-(--accent-text-medium)/15">
          <Play className="text-(--accent-text-medium)" size={16} />
        </div>
        <p className="font-bold text-(--ink-text-dark)">Interview practice</p>
        <p className="ml-auto text-xs text-(--ink-text-lighter)">
          {company} • {interviewDay}
        </p>
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-xs text-(--ink-text-lighter)">
          AI generates role-specific questions, scores your responses, and
          provides feedback on what to tighten.
        </p>
        <div className="flex items-center justify-between text-xs text-(--ink-text-dark)">
          <span>System design</span>
          <span className="text-(--success-text)">{systemDesignValue}</span>
        </div>
        <div
          className="relative flex h-2 w-full items-center overflow-x-hidden rounded-sm border-none bg-(--success-text)"
          style={{ width: `${systemDesignProgressValue}%` }}
        />
        <div className="flex items-center justify-between text-xs text-(--ink-text-dark)">
          <span>Behavioral</span>
          <span className="text-(--success-text)">{behavioralValue}</span>
        </div>
        <div
          className="relative flex h-2 items-center overflow-x-hidden rounded-sm border-none bg-(--success-text)"
          style={{ width: `${behavioralProgressValue}%` }}
        />
        <div className="flex items-center justify-between text-xs text-(--ink-text-dark)">
          <span>Coding fluency</span>
          <span className="text-(--accent-text-medium)">
            {codingFluencyValue}
          </span>
        </div>
        <div
          className="relative flex h-2 items-center overflow-x-hidden rounded-sm border-none bg-(--accent-text-medium)"
          style={{ width: `${codingProgressValue}%` }}
        />
        <Button className="mt-2 w-full bg-(--ink-text-dark) text-(--card-background) transition-all duration-300 hover:bg-(--ink-text-dark)/80">
          Start practice session{" "}
          <ArrowRight className="text-(--card-background)" size={16} />
        </Button>
      </div>
    </div>
  );
};

export default AiPracticeCard;
