import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { EmailAddress, User } from "@clerk/backend/dist/types/api/resources";
import { DataTableColumnHeader } from "../data-table-column-header";

export const userColumns: ColumnDef<User>[] = [
  // {
  //   accessorKey: "id",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="User" />
  //   ),
  //   cell: ({ row }) => <div className="w-[150px]">{row.getValue("id")}</div>,
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "lastName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Lastname" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("lastName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Firstname" />
    ),
    cell: ({ row }) => (
      <div className="w-[80px]">{row.getValue("firstName")}</div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "emailAddresses",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Email" />
    ),
    cell: ({ row }) => {
      const emails = row.getValue<Array<EmailAddress>>("emailAddresses");
      return (
        <div className="flex flex-col space-x-2">
          {emails.map((email) => {
            return (
              <span key={email.id} className="truncate font-medium">
                {email.emailAddress}
              </span>
            );
          })}
        </div>
      );
    },
  },
  {
    accessorKey: "publicMetadata",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Metadata" />
    ),
    cell: ({ row }) => {
      const data = row.getValue<Array<UserPublicMetadata>>("publicMetadata");

      const metaData = Object.entries(data).map(([key, value]) => {
        const item = value as unknown as string;
        return (
          <div key={key} className="flex space-x-2">
            <span className="">{key}</span>
            <Badge variant="outline">{item}</Badge>
          </div>
        );
      });

      return <div className="flex space-x-2">{metaData}</div>;
    },
  },

  //   {
  //     id: "actions",
  //     cell: ({ row }) => <DataTableRowActions row={row} />,
  //   },
];
