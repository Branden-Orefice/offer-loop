"use client";

import { SettingsIcon, Square } from "lucide-react";
import DashboardUser from "./dashboard-user";
import DashboardNavLinkSidebarHelper from "./dashboard-nav-link-sidebar-helper";
import Link from "next/link";

const DashboardSidebar = () => {
  const overviewLinks = [
    {
      label: "Home",
      icon: Square,
      href: "/dashboard/home",
    },
  ];

  const workspaceLinks = [
    {
      label: "Analytics",
      icon: Square,
      href: "/dashboard/analytics",
    },
    {
      label: "AI Assistant",
      icon: Square,
      href: "/dashboard/ai-assistant",
    },
  ];

  const automationLinks = [
    {
      label: "Applications",
      icon: Square,
      href: "/dashboard/applications",
    },
    {
      label: "Interviews",
      icon: Square,
      href: "/dashboard/interviews",
    },
  ];

  return (
    <aside className="relative row-span-full flex h-screen flex-col border-r border-(--accent-text-lightest) bg-(--sidebar-background)">
      <div className="border-border flex shrink-0 items-center p-6">
        <h4 className="text-xl font-bold text-(--ink-text-dark)">
          OfferLoop
          <span className="text-(--accent-text-medium)">.</span>
        </h4>
      </div>
      <h4 className="px-4 pt-4 text-[10px] tracking-wide text-(--ink-text-lighter) uppercase">
        overview
      </h4>
      <div className="flex flex-col gap-1 overflow-y-auto px-2 pt-2">
        {overviewLinks.map((link, index) => (
          <DashboardNavLinkSidebarHelper
            key={index}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
      <h4 className="px-4 pt-6 text-[10px] tracking-wide text-(--ink-text-lighter) uppercase">
        workspace
      </h4>
      <div className="flex flex-col gap-1 overflow-y-auto px-2 pt-2">
        {workspaceLinks.map((link, index) => (
          <DashboardNavLinkSidebarHelper
            key={index}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
      <h4 className="px-4 pt-6 text-[10px] tracking-wide text-(--ink-text-lighter) uppercase">
        Automation
      </h4>
      <div className="flex flex-col gap-1 overflow-y-auto px-2 pt-2">
        {automationLinks.map((link, index) => (
          <DashboardNavLinkSidebarHelper
            key={index}
            href={link.href}
            icon={link.icon}
            label={link.label}
          />
        ))}
      </div>
      <div className="mt-auto flex flex-col gap-1 pt-2">
        <div className="mt-2 border-t border-(--accent-text-lightest) p-4">
          <DashboardUser />
        </div>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
