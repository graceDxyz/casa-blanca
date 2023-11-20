import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthLayout } from "@/components/layouts/auth-layout";
import { Toaster } from "@/components/ui/toaster";
import { TailwindIndicator } from "./components/tailwind-indicator";

const SignInPage = lazy(() => import("@/pages/auth/SignInPage"));
const SignUpPage = lazy(() => import("@/pages/auth/SignUpPage"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={"loading..."}>
              <SignInPage />
            </Suspense>
          ),
        },
        {
          path: "signup",
          element: (
            <Suspense fallback={"loading..."}>
              <SignUpPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <React.Fragment>
      <RouterProvider router={router} />
      <Toaster />
      <TailwindIndicator />
    </React.Fragment>
  );
}

export default App;
