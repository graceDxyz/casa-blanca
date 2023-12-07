import { Icons } from "@/components/icons";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Link } from "react-router-dom";
import { Room } from "schema";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className={cn("h-full overflow-hidden rounded-sm")}>
      <Link aria-label={room.name} to={`${room._id}`}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {room.imageUrl ? (
              <img
                src={room.imageUrl}
                alt={room.name}
                className="object-cover h-full"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                loading="lazy"
              />
            ) : (
              <div
                aria-label="Placeholder"
                role="img"
                aria-roledescription="placeholder"
                className="flex h-full w-full items-center justify-center bg-secondary"
              >
                <Icons.placeholder
                  className="h-9 w-9 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            )}
          </AspectRatio>
        </CardHeader>

        <span className="sr-only">{room.name}</span>
      </Link>
      <Link to={`${room._id}`} tabIndex={-1}>
        <CardContent className="grid gap-2.5 p-4">
          <CardTitle className="line-clamp-1">{room.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {/* {room.description} */}
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
}
