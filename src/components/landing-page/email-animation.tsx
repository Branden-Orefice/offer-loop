"use client";

import { MailIcon } from "lucide-react";

const EmailAnimation = () => {
  return (
    <div className="relative container">
      <div className="rounded-2xl bg-(--card-background)">
        <div className="border-border flex items-center justify-between rounded-t-2xl border-b bg-(--sidebar-background) p-4">
          <div className="flex gap-2">
            <div className="h-2 w-2 rounded-xl bg-(--ink-text-light)" />
            <div className="h-2 w-2 rounded-xl bg-(--ink-text-light)" />
            <div className="h-2 w-2 rounded-xl bg-(--ink-text-light)" />
          </div>
          <p className="text-xs text-(--ink-text-light)">
            branden@gmail.com • OfferLoop
          </p>
        </div>
        <div className="p-6">
          <p className="text-xs text-(--ink-text-light)">
            New Email Detected
          </p>
          <div className="email-animation relative mt-2 w-full rounded-xl border-none bg-(--sidebar-background) p-6">
            <div className="relative flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-(--ink-text-dark) bg-(--ink-text-dark)">
                <MailIcon
                  className="text-(--accent-text-medium)"
                  size={24}
                />
              </div>
              <div className="ml-3 flex flex-col">
                <h2 className="font-bold text-(--ink-text-dark)">
                  Google Recruiting
                </h2>
                <p className="text-[10px] tracking-wide text-(--ink-text-light) uppercase">
                  Your offer from Google - $218k base + equity
                </p>
              </div>
            </div>
            <div
              className="absolute top-14 left-6 z-50"
              style={{
                animation:
                  "trail-glow 8s ease-in-out infinite, email-pop-out 8s ease-in-out infinite",
              }}
            >
              <div className="flex flex-col rounded-lg border border-(--accent-text-medium) bg-(--card-background) p-2 sm:w-40 md:w-50">
                <p className="text-sm font-semibold text-(--ink-text-dark)">
                  Google
                </p>
                <p className="text-sm text-(--ink-text-light)">$218k</p>
              </div>
            </div>
          </div>
          <div className="mt-8 sm:mt-70">
            <p className="mb-2 text-xs text-(--ink-text-light)">
              Tracked Automatically
            </p>
            <div className="flex gap-2">
              <div className="flex w-full flex-col rounded-xl bg-(--sidebar-background) p-2">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-(--ink-text-dark)">
                    Applied
                  </p>
                  <p className="text-sm text-(--ink-text-light)">42</p>
                </div>
                <div className="flex w-full flex-col rounded-lg bg-(--card-background) p-2">
                  <p className="text-sm font-semibold text-(--ink-text-dark)">
                    Notion
                  </p>
                  <p className="text-sm text-(--ink-text-light)">2d</p>
                </div>
              </div>
              <div className="flex w-full flex-col rounded-xl bg-(--sidebar-background) p-2">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-(--ink-text-dark)">
                    Interview
                  </p>
                  <p className="text-sm text-(--ink-text-light)">3</p>
                </div>
                <div className="flex w-full flex-col rounded-lg bg-(--card-background) p-2">
                  <p className="text-sm font-semibold text-(--ink-text-dark)">
                    Vercel
                  </p>
                  <p className="text-sm text-(--ink-text-light)">Fri</p>
                </div>
              </div>
              <div className="flex w-full flex-col rounded-xl bg-(--sidebar-background) p-2">
                <div className="mb-2 flex items-center justify-between">
                  <p className="text-sm font-semibold text-(--accent-text-medium)">
                    Offer
                  </p>
                  <p className="text-sm text-(--accent-text-medium)">1</p>
                </div>
                <div className="email-pop-in-animation flex w-full flex-col rounded-lg border border-(--accent-text-medium) bg-(--card-background) p-2">
                  <p className="text-sm font-semibold text-(--ink-text-dark)">
                    Google
                  </p>
                  <p className="text-sm text-(--ink-text-light)">$218k</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailAnimation;
