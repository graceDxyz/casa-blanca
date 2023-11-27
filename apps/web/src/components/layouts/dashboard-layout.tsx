import { useUser } from "@clerk/clerk-react";
import { Navigate, Outlet } from "react-router-dom";

import { SidebarNav } from "@/components/layouts/sidebar-nav";
import { SiteHeader } from "@/components/layouts/site-header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { dashboardConfig } from "@/config/dashboard";
import { DashboardContextType } from "@/types";

export function DashboardLayout() {
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded) {
    return "Loading...";
  }

  if (!isSignedIn) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader user={user} />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            <SidebarNav className="p-1" items={dashboardConfig.sidebarNav} />
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <Outlet context={{ user } satisfies DashboardContextType} />
        </main>
      </div>
    </div>
  );
}
