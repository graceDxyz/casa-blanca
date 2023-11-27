import { Link, Navigate, Outlet } from "react-router-dom";

import { Icons } from "@/components/icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useUser } from "@clerk/clerk-react";
import { siteConfig } from "@/config/site";

export function AuthLayout() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) {
    return "Loading...";
  }

  if (isSignedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="grid min-h-screen grid-cols-1 overflow-hidden md:grid-cols-3 lg:grid-cols-2">
      <AspectRatio ratio={16 / 9}>
        <img
          src="https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="A casa blanca doing a high drop"
          className="absolute inset-0 object-cover h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40" />
        <Link
          to="/"
          className="absolute left-8 top-6 z-20 flex items-center text-lg font-bold tracking-tight"
        >
          <Icons.logo className="mr-2 h-6 w-6" aria-hidden="true" />
          <span>{siteConfig.name}</span>
        </Link>
        <div className="absolute bottom-6 left-8 z-20 line-clamp-1 text-base"></div>
      </AspectRatio>
      <main className="container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1">
        <Outlet />
      </main>
    </div>
  );
}
