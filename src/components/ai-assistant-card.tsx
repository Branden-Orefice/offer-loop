"use client";

import GlowOrb from "@/components/glow-orb";
import { Star } from "lucide-react";

const AiAssistantCard = () => {
  const actions = 3;
  return (
    <div className="relative mt-6 h-35 w-full overflow-hidden rounded-xl border-none bg-(--ink-text-dark) p-6">
      <GlowOrb className="absolute -top-50 -right-50 size-[400px]" />
      <div className="flex">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--accent-text-medium) bg-(--accent-text-medium)">
          <Star className="text-(--ink-text-dark)" size={24} />
        </div>
        <div className="ml-3 flex flex-col">
          <h2 className="font-bold text-(--card-background)">AI Assistant</h2>
          <p className="text-[10px] tracking-wide text-(--accent-text-medium) uppercase">
            {actions} actions ready
          </p>
        </div>
      </div>
      <p className="mt-3 text-xs text-white/80">
        Your Notion phone screen is Tuesday. I&apos;ve drafted prep questions
        and a tailored cover letter for Linear.
      </p>
    </div>
  );
};

export default AiAssistantCard;
