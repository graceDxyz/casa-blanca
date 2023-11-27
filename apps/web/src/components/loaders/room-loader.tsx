import { Skeleton } from "@/components/ui/skeleton";
import { Shell } from "@/components/shells/shell";
import { RoomCardSkeleton } from "@/components/skeletons/room-card-skeleton";
import { PageHeader } from "../page-header";

export default function RoomsLoading() {
  return (
    <Shell variant="sidebar">
      <PageHeader separated>
        <Skeleton className="h-10 w-28" />
        <Skeleton className="h-4 w-48" />
      </PageHeader>
      <section className="flex flex-col space-y-6">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <RoomCardSkeleton key={i} />
          ))}
        </div>
      </section>
    </Shell>
  );
}
