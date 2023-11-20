import * as React from 'react';
import { SignOutButton } from '@clerk/clerk-react';

import { Button } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { useNavigate } from 'react-router-dom';

export function LogOutButton() {
  const navigate = useNavigate();
  const [isLoading, setLoading] = React.useState(false);

  return (
    <SignOutButton
      signOutCallback={() => {
        navigate('/', { replace: true });
      }}
    >
      <Button
        aria-label="Log out"
        size="sm"
        className="w-full"
        disabled={isLoading}
        onClick={() => setLoading(true)}
      >
        {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
        Log out
      </Button>
    </SignOutButton>
  );
}
