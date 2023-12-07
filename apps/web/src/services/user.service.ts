import { QUERY_KEY_USERS } from "@/constant/query.constant";
import apiClient from "@/lib/apiClient";
import { User } from "@clerk/backend/dist/types/api/resources/User";
import { QueryClient, UseQueryOptions, useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const getUsersQuery = () => ({
  queryKey: [QUERY_KEY_USERS],
  queryFn: async () => {
    const res = await apiClient.get("/users");
    return res.data;
  },
});

export const useGetUsers = (
  options?: Partial<UseQueryOptions<Array<User>, AxiosError>>,
) =>
  useQuery({
    ...getUsersQuery(),
    ...options,
  });

export const usersLoader = (queryClient: QueryClient) => async () => {
  const query = getUsersQuery();
  return (
    queryClient.getQueryData<Array<User>>(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
