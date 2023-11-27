import { type SidebarNavItem } from "@/types";

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[];
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: "terminal",
      items: [],
      audience: ["admin", "super_admin"],
    },
    {
      title: "Rooms",
      href: "/dashboard/rooms",
      icon: "box",
      items: [],
    },
    {
      title: "Users",
      href: "/dashboard/users",
      icon: "users",
      items: [],
      audience: ["super_admin"],
    },
    // {
    //   title: "Account",
    //   href: "/dashboard/account",
    //   icon: "avatar",
    //   items: [],
    // },
  ],
};
