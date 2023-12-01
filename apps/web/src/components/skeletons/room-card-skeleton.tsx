import { PlaceholderImage } from "@/components/placeholder-image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export function RoomCardSkeleton() {
  return (
    <Card className="h-full overflow-hidden rounded-sm">
      <CardHeader className="border-b p-0">
        <AspectRatio ratio={4 / 3}>
          <PlaceholderImage asChild className="rounded-none" />
        </AspectRatio>
      </CardHeader>
      <CardContent className="grid gap-2.5 p-4">
        <Skeleton className="h-8 w-1/2" />
        {/* <Skeleton className="h-4 w-1/4" /> */}
      </CardContent>
    </Card>
  );
}
