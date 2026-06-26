"use client";

import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Plus, Search } from "lucide-react";

const DashboardHeader = () => {
  const currentDate = new Date();
  const date = currentDate.toLocaleDateString("en-US", { weekday: "long" });
  const month = currentDate.toLocaleDateString("en-US", { month: "long" });
  const dayNumber = currentDate.getDate();

  const handleEmailSync = async () => {
    const response = await fetch("/api/gmail/sync", {
      method: "POST",
    });

    const data = await response.json();

    if (!response.ok) {
      console.error(data.error);
      return;
    }

    console.log("Gmail sync result:", data);
  };

  return (
    <header>
      <div className="mx-auto flex flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center">
        <div>
          <h3 className="mb-2 text-[12px] tracking-widest text-(--accent-text-medium) uppercase">
            {date} • {month} {dayNumber}
          </h3>
          <h1 className="text-3xl font-bold text-(--ink-text-dark)">
            Welcome back, Branden.
          </h1>
        </div>
        <div className="flex w-full items-center gap-4 sm:w-auto">
          <InputGroup className="w-full bg-(--card-background) sm:w-[250px]">
            <InputGroupInput
              className="text-xs"
              id="input-group-search"
              placeholder="Search companies, roles..."
            />
            <InputGroupAddon align="inline-start">
              <Search size={10} />
            </InputGroupAddon>
          </InputGroup>
          <Button
            onClick={handleEmailSync}
            variant="default"
            size="default"
            className="cursor-pointer bg-(--ink-text-dark) p-4 text-sm text-(--card-background) transition-all duration-300 hover:bg-(--ink-text-dark)/80"
          >
            <Plus className="text-(--card-background)" size={10} /> Sync Email
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
