import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

import { SidebarNav } from "@/components/layouts/sidebar-nav";
import { SiteHeader } from "@/components/layouts/site-header";
import { Shell } from "@/components/shells/shell";
import { RoomCardSkeleton } from "@/components/skeletons/room-card-skeleton";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Skeleton } from "@/components/ui/skeleton";
import { dashboardConfig } from "@/config/dashboard";
import { cn } from "@/lib/utils";

export default function DashboardLoading() {
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
            <div className={cn("flex w-full flex-col gap-2")}>
              {dashboardConfig.sidebarNav.map(() => (
                <Skeleton className="h-8 w-full" />
              ))}
            </div>
          </ScrollArea>
        </aside>
        <main className="flex w-full flex-col overflow-hidden">
          <Shell>
            <div className="space-y-2">
              <Skeleton className="h-10 w-28" />
              <Skeleton className="h-4 w-48" />
            </div>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center gap-2">
                <Skeleton className="h-8 w-14" />
                <Skeleton className="h-8 w-20" />
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {Array.from({ length: 8 }).map((_, i) => (
                  <RoomCardSkeleton key={i} />
                ))}
              </div>
            </div>
          </Shell>
        </main>
      </div>
    </div>
  );
}
