import { Rooms } from "schema";
import { RoomCard } from "@/components/cards/room-card";

interface RoomsSectionProps {
  rooms: Rooms;
}

export function RoomsSection({ rooms }: RoomsSectionProps) {
  return (
    <section className="flex flex-col space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {rooms.map((room) => (
          <RoomCard key={room._id} room={room} />
        ))}
      </div>
    </section>
  );
}
