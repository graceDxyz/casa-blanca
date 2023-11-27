import type { SidebarNavItem } from "@/types";

import { cn } from "@/lib/utils";

import { useUser } from "@clerk/clerk-react";
import { ChevronLeftIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Icons } from "../icons";

export interface SidebarNavProps extends React.HTMLAttributes<HTMLDivElement> {
  items: SidebarNavItem[];
}

export function SidebarNav({ items, className, ...props }: SidebarNavProps) {
  const { user } = useUser();
  const location = useLocation();

  if (!items?.length) return null;
  const role = user?.publicMetadata.role ?? "user";

  return (
    <div className={cn("flex w-full flex-col gap-2", className)} {...props}>
      {items
        .filter((item) => {
          if (item.audience && item.audience.length > 0) {
            return item.audience.includes(role);
          }
          return true;
        })
        .map((item, index) => {
          const Icon = item.icon ? Icons[item.icon] : ChevronLeftIcon;

          const isActive = item.href === location.pathname;
          return item.href ? (
            <Link
              aria-label={item.title}
              key={index}
              to={item.href}
              target={item.external ? "_blank" : ""}
              rel={item.external ? "noreferrer" : ""}
            >
              <span
                className={cn(
                  "group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:bg-muted hover:text-foreground",
                  isActive
                    ? "bg-muted font-medium text-foreground"
                    : "text-muted-foreground",
                  item.disabled && "pointer-events-none opacity-60",
                )}
              >
                <Icon className="mr-2 h-4 w-4" aria-hidden="true" />
                <span>{item.title}</span>
              </span>
            </Link>
          ) : (
            <span
              key={index}
              className="flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline"
            >
              {item.title}
            </span>
          );
        })}
    </div>
  );
}
