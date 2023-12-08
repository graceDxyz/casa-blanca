import { userColumns } from "@/components/data-table/columns/user-columns";
import { DataTable } from "@/components/data-table/data-table";
import UsersLoading from "@/components/loaders/user-loader";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Shell } from "@/components/shells/shell";
import { useGetUsers, usersLoader } from "@/services/user.service";
import { useLoaderData } from "react-router-dom";

function UsersPage() {
  const initialData = useLoaderData() as Awaited<
    ReturnType<ReturnType<typeof usersLoader>>
  >;

  const { data, isLoading } = useGetUsers({
    initialData,
  });

  if (isLoading) {
    return <UsersLoading />;
  }

  return (
    <Shell variant="sidebar">
      <PageHeader
        id="users-header"
        aria-labelledby="users-header-heading"
        separated
      >
        <PageHeaderHeading size="sm">Users</PageHeaderHeading>
        <PageHeaderDescription size="sm">Manage users</PageHeaderDescription>
      </PageHeader>

      <section className="flex flex-col space-y-6 px-2">
        <DataTable data={data ?? []} columns={userColumns} />
      </section>
    </Shell>
  );
}

export default UsersPage;
