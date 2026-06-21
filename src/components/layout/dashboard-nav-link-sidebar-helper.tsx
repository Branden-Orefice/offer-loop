"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type DashboardSidebarLinkProps = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const DashboardNavLinkSidebarHelper = ({
  href,
  label,
  icon: Icon,
}: DashboardSidebarLinkProps) => {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors ${
        isActive
          ? "bg-(--ink-text-dark) text-(--card-background)"
          : "text-(--ink-text-lighter) hover:bg-(--sidebar-background) hover:text-(--ink-text-lighter)"
      }`}
    >
      <Icon
        size={18}
        className={
          isActive ? "text-(--accent-text-medium)" : "text-(--ink-text-lighter)"
        }
      />
      <span>{label}</span>
    </Link>
  );
};
export default DashboardNavLinkSidebarHelper;
