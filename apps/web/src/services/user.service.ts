import { QUERY_KEY_USERS } from "@/constant/query.constant";
import apiClient from "@/lib/apiClient";
import { UserResource } from "@clerk/types";
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
  options?: Partial<UseQueryOptions<Array<UserResource>, AxiosError>>,
) =>
  useQuery({
    ...getUsersQuery(),
    ...options,
  });

export const usersLoader = (queryClient: QueryClient) => async () => {
  const query = getUsersQuery();
  return (
    queryClient.getQueryData<Array<UserResource>>(query.queryKey) ??
    (await queryClient.fetchQuery(query))
  );
};
