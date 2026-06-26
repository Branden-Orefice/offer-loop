"use client";

import { PanelLeft, Square } from "lucide-react";
import DashboardUser from "@/components/layout/dashboard-user";
import DashboardNavLinkSidebarHelper from "@/components/layout/dashboard-nav-link-sidebar-helper";
import { useState } from "react";

import { useSidebar } from "@/context/SidebarContext";

const DashboardSidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();

  const handleIsSidebarOpen = () => {
    toggleSidebar();
  };

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
    <aside
      className={`relative row-span-2 flex h-screen flex-col border-r border-(--accent-text-lightest) bg-(--sidebar-background) transition-all duration-300 ease-in-out ${
        isSidebarOpen ? "hidden md:flex md:w-full" : "flex w-full"
      }`}
    >
      <div
        className={`border-border flex shrink-0 items-center p-6 ${
          isSidebarOpen ? "justify-between" : "justify-center"
        }`}
      >
        {isSidebarOpen && (
          <h4 className="text-xl font-bold text-(--ink-text-dark)">
            OfferLoop
            <span className="text-(--accent-text-medium)">.</span>
          </h4>
        )}

        <button
          onClick={handleIsSidebarOpen}
          className={`${isSidebarOpen ? "hidden md:inline-flex" : "sm:inline-flex"}`}
        >
          <PanelLeft className="h-5 w-5 text-(--ink-text-dark)" />
        </button>
      </div>
      {isSidebarOpen && (
        <h4 className="px-4 pt-4 text-[10px] tracking-wide text-(--ink-text-lighter) uppercase">
          overview
        </h4>
      )}
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
      {isSidebarOpen && (
        <h4 className="px-4 pt-6 text-[10px] tracking-wide text-(--ink-text-lighter) uppercase">
          workspace
        </h4>
      )}
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
      {isSidebarOpen && (
        <h4 className="px-4 pt-6 text-[10px] tracking-wide text-(--ink-text-lighter) uppercase">
          Automation
        </h4>
      )}
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
