import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { Plus, Search } from "lucide-react";

const DashboardHeader = () => {
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="p-6">
      <div className="mx-auto flex max-w-[1600px] items-center justify-between">
        <div>
          <h3 className="mb-2 text-sm tracking-widest text-(--accent-text-medium)">
            {formattedDate}
          </h3>
          <h1 className="text-3xl font-bold text-(--ink-text-dark)">
            Welcome back, Branden.
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <InputGroup className="bg-secondary w-[250px] text-xs">
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
            variant="default"
            size="default"
            className="cursor-pointer bg-(--ink-text-dark) p-4 text-sm text-(--card-background) transition-all duration-300 hover:bg-(--ink-text-dark)/80"
          >
            <Plus className="text-(--card-background)" size={10} /> Add
            applications
          </Button>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;
