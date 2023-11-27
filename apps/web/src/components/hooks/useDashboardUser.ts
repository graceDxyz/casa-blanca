import { DashboardContextType } from "@/types";
import { useOutletContext } from "react-router-dom";

export function useDashboardUser() {
  return useOutletContext<DashboardContextType>();
}
