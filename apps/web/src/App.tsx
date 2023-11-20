import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { AuthLayout } from "@/components/layouts/auth-layout";
import { Toaster } from "@/components/ui/toaster";
import { DashboardLayout } from "./components/layouts/dashboard-layout";
import { TailwindIndicator } from "./components/tailwind-indicator";

const SignInPage = lazy(() => import("@/pages/auth/SignInPage"));
const SignUpPage = lazy(() => import("@/pages/auth/SignUpPage"));
const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"));
const PayrollPage = lazy(() => import("@/pages/dashboard/PayrollPage"));
const PosPage = lazy(() => import("@/pages/dashboard/PosPage"));

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
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: (
            <Suspense fallback={"loading..."}>
              <DashboardPage />
            </Suspense>
          ),
        },
        {
          path: "payroll",
          element: (
            <Suspense fallback={"loading..."}>
              <PayrollPage />
            </Suspense>
          ),
        },
        {
          path: "pos",
          element: (
            <Suspense fallback={"loading..."}>
              <PosPage />
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
