import { Shell } from "@/components/shells/shell";
import { Skeleton } from "@/components/ui/skeleton";
import { PageHeader } from "../page-header";

export default function UsersLoading() {
  return (
    <Shell variant="sidebar">
      <PageHeader separated>
        <Skeleton className="h-10 w-28" />
        <Skeleton className="h-4 w-48" />
      </PageHeader>
      <section className="flex flex-col space-y-6 px-2">
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full" />
        ))}
      </section>
    </Shell>
  );
}
