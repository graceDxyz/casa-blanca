import { UserProfile as ClerkUserProfile } from "@clerk/clerk-react";
import { type Theme } from "@clerk/types";

const appearance: Theme = {
  baseTheme: undefined,
  variables: {
    borderRadius: "0.25rem",
  },
  elements: {
    card: "shadow-none",
    navbar: "hidden",
    navbarMobileMenuButton: "hidden",
    headerTitle: "hidden",
    headerSubtitle: "hidden",
  },
};

export function UserProfile() {
  return (
    <ClerkUserProfile
      appearance={{
        ...appearance,
        baseTheme: appearance.baseTheme,
        variables: {
          ...appearance.variables,
          // colorBackground: theme === "light" ? "#fafafa" : undefined,
        },
      }}
    />
  );
}
