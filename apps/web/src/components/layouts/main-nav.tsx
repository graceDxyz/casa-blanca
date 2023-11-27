import { Link } from "react-router-dom";
import { Icons } from "@/components/icons";
import { siteConfig } from "@/config/site";

export function MainNav() {
  return (
    <div className="hidden gap-6 lg:flex">
      <Link to="/" className="hidden items-center space-x-2 lg:flex">
        <Icons.logo className="h-6 w-6" aria-hidden="true" />
        <span className="hidden font-bold lg:inline-block">
          {siteConfig.name}
        </span>
        <span className="sr-only">Home</span>
      </Link>
    </div>
  );
}
