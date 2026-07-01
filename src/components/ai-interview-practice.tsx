"use client";

import { RotateCw } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Button } from "./ui/button";
import { useState } from "react";

const AiInterviewPractice = () => {
  const [practiceStarted, setPracticeStarted] = useState(false);
  const [applicationRole, setApplicationRole] = useState("frontend developer");
  const [practiceType, setPracticeType] = useState("system-design");

  const handleStart = async () => {
    setPracticeStarted(true);

    const response = await fetch("/api/openai/coding-practice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        practiceType,
        codingLanguage: "javascript",
        applicationRole,
      }),
    });

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="border-border mt-6 flex w-3/4 items-baseline gap-4 rounded-lg bg-(--card-background)/40 p-3">
      <div className="w-55 rounded-lg bg-(--accent-text-medium) p-2 text-(--ink-text-dark)">
        <p className="font-bold">Google • Frontend Engineer</p>
      </div>

      <div className="flex flex-1 items-baseline justify-between">
        <Tabs
          defaultValue="system-design"
          value={practiceType}
          onValueChange={setPracticeType}
        >
          <TabsList>
            <TabsTrigger value="system-design">System Design</TabsTrigger>
            <TabsTrigger value="Coding">Coding</TabsTrigger>
          </TabsList>
          <TabsContent value="system-design"></TabsContent>
          <TabsContent value="Coding"></TabsContent>
        </Tabs>
        <Tabs defaultValue="junior">
          <TabsList>
            <TabsTrigger value="junior">Junior</TabsTrigger>
            <TabsTrigger value="mid">Mid</TabsTrigger>
            <TabsTrigger value="senior">Senior</TabsTrigger>
          </TabsList>
          <TabsContent value="junior"></TabsContent>
          <TabsContent value="mid"></TabsContent>
          <TabsContent value="senior"></TabsContent>
        </Tabs>

        <div className="flex items-center gap-2">
          <p className="text-sm text-(--ink-text-lighter)">Q1 / 3</p>
          {practiceStarted ? (
            <Button
              variant="ghost"
              className="text-sm text-(--accent-text-medium)"
            >
              <RotateCw className="mr-1 h-4 w-4" />
              Restart
            </Button>
          ) : (
            <Button
              variant="ghost"
              className="text-sm text-(--accent-text-medium)"
              onClick={handleStart}
            >
              <RotateCw className="mr-1 h-4 w-4" />
              Start
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AiInterviewPractice;
