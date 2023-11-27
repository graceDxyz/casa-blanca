import { QUERY_KEY_ROOMS } from "@/constant/query.constant";
import apiClient from "@/lib/apiClient";
import { QueryClient, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { Rooms, roomsSchema } from "schema";

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

export const roomsLoader = (queryClient: QueryClient) => async () => {
  const query = getRoomsQuery();
  return (
    queryClient.getQueryData<Rooms>(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
