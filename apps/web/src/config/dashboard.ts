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
    },
    {
      title: "Rooms",
      href: "/dashboard/rooms",
      icon: "box",
      items: [],
    },
    {
      title: "Account",
      href: "/dashboard/account",
      icon: "avatar",
      items: [],
    },
  ],
};
