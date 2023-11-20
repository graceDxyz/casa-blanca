import { Outlet } from "react-router-dom";

import { SiteHeader } from "@/components/layouts/site-header";
import { ScrollArea } from "@/components/ui/scroll-area";

export function DashboardLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10">
        <aside className="fixed top-14 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 overflow-y-auto border-r md:sticky md:block">
          <ScrollArea className="py-6 pr-6 lg:py-8">
            {/* <SidebarNav items={dashboardConfig.sidebarNav} className="p-1" /> */}
            <div className="w-full h-full bg-blue-200"></div>
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <Outlet />
        </main>
      </div>
      {/* <SiteFooter /> */}
    </div>
  );
}
