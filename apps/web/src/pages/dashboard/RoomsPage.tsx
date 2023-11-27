import RoomsLoading from "@/components/loaders/room-loader";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { RoomsSection } from "@/components/rooms";
import { Shell } from "@/components/shells/shell";
import { roomsLoader, useGetRooms } from "@/services/room.service";
import { useLoaderData } from "react-router-dom";

function DashboardPage() {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof roomsLoader>>
  >;

  const { data, isLoading } = useGetRooms({
    initialData,
  });

  if (isLoading) {
    return <RoomsLoading />;
  }

  return (
    <Shell variant="sidebar">
      <PageHeader
        id="rooms-header"
        aria-labelledby="rooms-header-heading"
        separated
      >
        <PageHeaderHeading size="sm">Rooms</PageHeaderHeading>
        <PageHeaderDescription size="sm">Manage rooms</PageHeaderDescription>
      </PageHeader>
      <RoomsSection rooms={data ?? []} />
    </Shell>
  );
}

export default DashboardPage;
