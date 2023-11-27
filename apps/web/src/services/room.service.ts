import { QUERY_KEY_ROOMS } from "@/constant/query.constant";
import apiClient from "@/lib/apiClient";
import { QueryClient, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { LoaderFunctionArgs } from "react-router-dom";
import { Room, Rooms, roomSchema, roomsSchema } from "schema";

export const getRoomsQuery = () => ({
  queryKey: [QUERY_KEY_ROOMS],
  queryFn: async () => {
    const res = await apiClient.get("/rooms");
    const rooms = await roomsSchema.parseAsync(res.data);
    return rooms;
  },
});

export const useGetRooms = (
  options?: Partial<UseQueryOptions<Rooms, AxiosError>>,
) =>
  useQuery({
    ...getRoomsQuery(),
    ...options,
  });

export const getRoomQuery = ({ roomId }: { roomId: string }) => ({
  queryKey: [QUERY_KEY_ROOMS, roomId],
  queryFn: async () => {
    const res = await apiClient.get(`/rooms/${roomId}`);

    return roomSchema.parse(res.data);
  },
});

export function useGetRoom(
  roomId: string,
  options?: Partial<UseQueryOptions<Room, AxiosError>>,
) {
  return useQuery({
    ...getRoomQuery({ roomId }),
    ...options,
  });
}

export const roomsLoader = (queryClient: QueryClient) => async () => {
  const query = getRoomsQuery();
  return (
    queryClient.getQueryData<Rooms>(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};

export const roomLoader =
  (queryClient: QueryClient) =>
  async ({ params }: LoaderFunctionArgs) => {
    const roomId = params.roomId ?? "";
    const query = getRoomQuery({ roomId });
    const room =
      queryClient.getQueryData<Room>(query.queryKey) ??
      (await queryClient.fetchQuery(query));
    return room;
  };
