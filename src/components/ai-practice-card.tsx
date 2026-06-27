"use client";

import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import MatchBar from "@/components/matchbar";

const AiPracticeCard = () => {
  const company = "Retool";
  const interviewDay = "Friday";

  const systemDesignValue = 82;
  const behavioralValue = 91;
  const codingFluencyValue = 64;

  return (
    <div className="h-75 w-full overflow-hidden rounded-xl border-none bg-(--card-background) p-6">
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
        <MatchBar
          label="System design"
          value={systemDesignValue}
          className="bg-(--success-text)"
          valueClassName="text-(--success-text)"
        />
        <MatchBar
          label="Behavioral"
          value={behavioralValue}
          className="bg-(--success-text)"
          valueClassName="text-(--success-text)"
        />
        <MatchBar
          label="Coding fluency"
          value={codingFluencyValue}
          className="bg-(--accent-text-medium)"
          valueClassName="text-(--accent-text-medium)"
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
