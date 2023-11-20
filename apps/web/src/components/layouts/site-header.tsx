import { UserResource } from '@clerk/types';
import { Link } from 'react-router-dom';

import { Button, buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LogOutButton } from '@/components/auth/logout-buttons';
import { getUserEmail } from '@/lib/utils';
import { MainNav } from '@/components/layouts/main-nav';
import { MobileNav } from '@/components/layouts/mobile-nav';

interface SiteHeaderProps {
  user?: UserResource | null;
}

export function SiteHeader({ user }: SiteHeaderProps) {
  const initials = `${user?.firstName?.charAt(0) ?? ''} ${
    user?.lastName?.charAt(0) ?? ''
  }`;

  const email = getUserEmail(user);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    className="relative h-8 w-8 rounded-full"
                  >
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src={user.imageUrl}
                        alt={user.username ?? ''}
                      />
                      <AvatarFallback>{initials}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.firstName} {user.lastName}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/account">
                        {/* <AvatarIcon */}
                        {/*   className="mr-2 h-4 w-4" */}
                        {/*   aria-hidden="true" */}
                        {/* /> */}
                        Account
                        <DropdownMenuShortcut>⇧⌘A</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard/stores">
                        {/* <DashboardIcon */}
                        {/*   className="mr-2 h-4 w-4" */}
                        {/*   aria-hidden="true" */}
                        {/* /> */}
                        Dashboard
                        <DropdownMenuShortcut>⌘D</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild disabled>
                      <Link to="/dashboard/settings">
                        {/* <GearIcon className="mr-2 h-4 w-4" aria-hidden="true" /> */}
                        Settings
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <LogOutButton />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                to="/signin"
                className={buttonVariants({
                  size: 'sm',
                })}
              >
                Sign In
                <span className="sr-only">Sign In</span>
              </Link>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
