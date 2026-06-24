import type { Application } from "@/components/application-table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import MatchBar from "@/components/matchbar";

const ApplicationSheet = ({
  selectedApplication,
  open,
  onOpenChange,
}: {
  selectedApplication: Application | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) => {
  if (!selectedApplication) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent className="border-border w-full border bg-(--sidebar-background) p-0">
        <div className="flex h-full flex-col">
          <SheetHeader className="border-border border-b px-6 py-5">
            <SheetTitle className="text-xl font-bold text-(--ink-text-dark)">
              {selectedApplication.company}
            </SheetTitle>

            <SheetDescription className="text-(--ink-text-light)">
              {selectedApplication.role}

              <div className="mt-3 flex flex-wrap items-center gap-2">
                <Badge className="bg-(--success-text)/20 px-3 py-2 font-bold text-(--success-text-dark) capitalize">
                  {selectedApplication.stage}
                </Badge>
                <Badge className="bg-(--success-text)/20 px-3 py-2 font-bold text-(--success-text-dark)">
                  Match {selectedApplication.match}
                </Badge>
                <Badge className="bg-(--card-background) px-3 py-2 font-bold text-(--ink-text-light)">
                  {selectedApplication.location}
                </Badge>
              </div>
            </SheetDescription>
          </SheetHeader>

          <div className="flex-1 space-y-7 overflow-y-auto px-6 py-5">
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-[10px] tracking-widest text-(--ink-text-light) uppercase">
                  Applied
                </p>
                <p className="text-sm font-semibold text-(--ink-text-dark)">
                  {selectedApplication.applied}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-(--ink-text-light) uppercase">
                  Source
                </p>
                <p className="text-sm font-semibold text-(--ink-text-dark)">
                  {selectedApplication.source}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-(--ink-text-light) uppercase">
                  Recruiter
                </p>
                <p className="text-sm font-semibold text-(--ink-text-dark)">
                  {selectedApplication.recruiter}
                </p>
              </div>
              <div>
                <p className="text-[10px] tracking-widest text-(--ink-text-light) uppercase">
                  Compensation
                </p>
                <p className="text-sm font-semibold text-(--ink-text-dark)">
                  {selectedApplication.compensation}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-bold text-(--ink-text-dark)">
                AI match breakdown
              </p>
              <p className="text-xs text-(--ink-text-light)">
                vs job description
              </p>
            </div>

            <div className="space-y-3">
              <MatchBar
                label="Payments/ API depth"
                value={selectedApplication.match}
                className="bg-(--success-text)"
              />
              <MatchBar
                label="React / TypeScript"
                value={selectedApplication.match}
                className="bg-(--success-text)"
              />
              <MatchBar
                label="Distributed systems"
                value={selectedApplication.match}
                className="bg-(--accent-text-medium)"
                valueClassName="text-(--accent-text-medium)"
              />
            </div>

            <div className="space-y-3">
              <p className="font-bold text-(--ink-text-dark)">AI Assistant</p>

              <div className="border-border rounded-lg border bg-(--card-background) p-4 transition-all duration-300 hover:border-(--accent-text-medium)">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="mb-1 text-xs font-semibold tracking-wide text-(--accent-text-medium) uppercase">
                      Interview Prep
                    </h2>

                    <p className="font-bold text-(--ink-text-dark)">
                      Phone-screen warmup
                    </p>

                    <p className="text-xs text-(--ink-text-light)">
                      Role-specific question set
                    </p>
                  </div>

                  <Button className="bg-(--ink-text-dark) text-(--card-background)">
                    Start
                  </Button>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="font-bold text-(--ink-text-dark)">Activity</p>
                <p className="text-xs text-(--success-text)">• from inbox</p>
              </div>

              <div className="border-border relative space-y-6 border-l pl-4">
                <div className="relative">
                  <span className="absolute top-1.5 -left-[21px] h-2.5 w-2.5 rounded-full bg-(--accent-text-medium)" />
                  <p className="text-sm font-bold text-(--ink-text-dark)">
                    Phone screen scheduled
                  </p>
                  <p className="text-xs text-(--ink-text-light)">
                    Thu 10:00 AM
                  </p>
                  <p className="text-xs text-(--ink-text-light)">1d ago</p>
                </div>

                <div className="relative">
                  <span className="absolute top-1.5 -left-[21px] h-2.5 w-2.5 rounded-full bg-(--ink-text-light)" />
                  <p className="text-sm font-bold text-(--ink-text-dark)">
                    Application submitted
                  </p>
                  <p className="text-xs text-(--ink-text-light)">
                    via LinkedIn
                  </p>
                  <p className="text-xs text-(--ink-text-light)">5d ago</p>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold text-(--ink-text-dark)">Notes</p>

              <div className="border-border rounded-xl border bg-(--card-background) p-4">
                <p className="text-sm text-(--ink-text-light)">
                  Thursday phone screen. Brush up on coding fundamentals.
                </p>
              </div>
            </div>
          </div>

          <SheetFooter className="border-border border-t px-6 py-4">
            <Button className="flex-1 bg-(--accent-text-medium) font-semibold text-(--ink-text-dark) hover:bg-(--accent-text-medium)/80 hover:text-(--ink-text-dark)/80">
              Move Stage
            </Button>

            <SheetClose
              render={
                <Button
                  variant="outline"
                  className="w-25 bg-(--sidebar-background) text-(--ink-text-light) hover:bg-(--sidebar-background) hover:text-(--ink-text-light)/80"
                >
                  Close
                </Button>
              }
            />
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default ApplicationSheet;
