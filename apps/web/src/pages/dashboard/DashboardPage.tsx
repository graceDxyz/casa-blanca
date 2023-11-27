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
    return "Loading...";
  }

  return (
    <Shell variant="sidebar">
      <PageHeader
        id="account-header"
        aria-labelledby="account-header-heading"
        separated
      >
        <PageHeaderHeading size="sm">Dashboard</PageHeaderHeading>
        <PageHeaderDescription size="sm">Manage rooms</PageHeaderDescription>
      </PageHeader>
      <RoomsSection rooms={data ?? []} />
    </Shell>
  );
}

export default DashboardPage;
