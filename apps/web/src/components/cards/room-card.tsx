import { Room } from "schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Icons } from "@/components/icons";

interface RoomCardProps {
  room: Room;
}

export function RoomCard({ room }: RoomCardProps) {
  return (
    <Card className={cn("h-full overflow-hidden rounded-sm")}>
      <Link aria-label={room.name} to={`${room._id}`}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
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
