import { useDashboardUser } from "@/components/hooks/useDashboardUser";
import UsersLoading from "@/components/loaders/user-loader";
import { useGetUsers, usersLoader } from "@/services/user.service";
import { useLoaderData } from "react-router-dom";

function UsersPage() {
  const user = useDashboardUser();
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof usersLoader>>
  >;

  const { data, isLoading } = useGetUsers({
    initialData,
  });

  if (isLoading) {
    return <UsersLoading />;
  }
  console.log(user, data);
  return <div>UsersPage</div>;
}

export default UsersPage;
