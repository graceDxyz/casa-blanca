import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { roomLoader, useGetRoom } from "@/services/room.service";
import { useLoaderData } from "react-router-dom";

function RoomPage() {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof roomLoader>>
  >;

  const { data, isLoading } = useGetRoom(initialData?._id ?? "", {
    initialData,
  });

  if (isLoading) {
    return "Loading...";
  }

  console.log(data);
  return (
    <Shell variant="sidebar">
      <PageHeader
        id="room-header"
        aria-labelledby="room-header-heading"
        separated
      >
        <PageHeaderHeading size="sm">{data?.name}</PageHeaderHeading>
        <PageHeaderDescription size="sm">
          Manage room <span className="lowercase">{data?.name}</span>{" "}
        </PageHeaderDescription>
      </PageHeader>
      <div>{data?.description}</div>
    </Shell>
  );
}

export default RoomPage;
