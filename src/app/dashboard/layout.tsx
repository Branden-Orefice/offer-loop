import DashboardHeader from "@/components/layout/dashboard-header";
import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import { AuthProvider } from "@/context/AuthContext";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <div className="grid h-screen grid-cols-[15rem_1fr] grid-rows-[auto_1fr]">
        <DashboardSidebar />
        <DashboardHeader />
        <main className="min-w-0 overflow-y-auto">{children}</main>
      </div>
    </AuthProvider>
  );
}
