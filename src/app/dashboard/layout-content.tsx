"use client";

import DashboardHeader from "@/components/layout/dashboard-header";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import { useSidebar } from "@/context/SidebarContext";

export default function DashboardLayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isSidebarOpen } = useSidebar();

  return (
    <div
      className={`grid h-screen transition-all duration-300 ease-in-out ${
        isSidebarOpen
          ? "grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-[15rem_1fr]"
          : "grid-cols-[4em_1fr] grid-rows-[auto_1fr]"
      }`}
    >
      <DashboardSidebar />
      <DashboardHeader />
      <main className="min-w-0 overflow-y-auto">{children}</main>
    </div>
  );
}
