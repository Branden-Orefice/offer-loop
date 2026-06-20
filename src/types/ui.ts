import type { LucideIcon } from "lucide-react";

export type DashboardSidebarLinkProps = {
  href: string;
  label: string;
  icon: LucideIcon;
};

export interface StatCardsProps {
  title: string;
  value: number;
  loading: boolean;
  className?: string;
  titleClassName?: string;
  valueClassName?: string;
}
