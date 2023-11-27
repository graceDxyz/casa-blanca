import { useQueryClient } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { SSOCallback } from "@/components/auth/sso-callback";
import ErrorElement from "@/components/elements/ErrorElement";
import { AuthLayout } from "@/components/layouts/auth-layout";
import { DashboardLayout } from "@/components/layouts/dashboard-layout";
import DashboardLoading from "@/components/loaders/dashboard-loader";
import RoomsLoading from "@/components/loaders/room-loader";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { Toaster } from "@/components/ui/toaster";
import { roomLoader } from "@/services/room.service";

const SignInPage = lazy(() => import("@/pages/auth/SignInPage"));
const ResetPasswordPage = lazy(() => import("@/pages/auth/ResetPasswordPage"));
const ResetPasswordStep2Page = lazy(
  () => import("@/pages/auth/ResetPasswordStep2Page"),
);
const SignUpPage = lazy(() => import("@/pages/auth/SignUpPage"));
const VerifyEmailPage = lazy(() => import("@/pages/auth/VerifyEmailPage"));
// const DashboardPage = lazy(() => import("@/pages/dashboard/DashboardPage"));
const PayrollPage = lazy(() => import("@/pages/dashboard/PayrollPage"));
const PosPage = lazy(() => import("@/pages/dashboard/PosPage"));
const AccountPage = lazy(() => import("@/pages/dashboard/AccountPage"));
const RoomPage = lazy(() => import("@/pages/dashboard/RoomPage"));
const RoomsPage = lazy(() => import("@/pages/dashboard/RoomsPage"));
const UsersPage = lazy(() => import("@/pages/dashboard/UsersPage"));

function App() {
  const queryClient = useQueryClient();
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthLayout />,
      children: [
        { index: true, element: <Navigate to="/signin" /> },
        {
          path: "signin",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback="loading...">
                  <SignInPage />
                </Suspense>
              ),
            },
            {
              path: "reset-password",
              children: [
                {
                  index: true,
                  element: (
                    <Suspense fallback="loading...">
                      <ResetPasswordPage />
                    </Suspense>
                  ),
                },
                {
                  path: "step2",
                  element: (
                    <Suspense fallback="loading...">
                      <ResetPasswordStep2Page />
                    </Suspense>
                  ),
                },
              ],
            },
          ],
        },
        {
          path: "signup",
          children: [
            {
              index: true,
              element: (
                <Suspense fallback="loading...">
                  <SignUpPage />
                </Suspense>
              ),
            },
            {
              path: "verify-email",
              element: (
                <Suspense fallback="loading...">
                  <VerifyEmailPage />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
    {
      path: "/sso-callback",
      element: <SSOCallback searchParams={{}} />,
    },
    {
      path: "/dashboard",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="rooms" />,
        },
        {
          path: "rooms",
          children: [
            {
              index: true,
              // loader: roomsLoader(queryClient),
              errorElement: <ErrorElement />,
              element: (
                <Suspense fallback={<RoomsLoading />}>
                  <RoomsPage />
                </Suspense>
              ),
            },
            {
              path: ":roomId",
              loader: roomLoader(queryClient),
              errorElement: <ErrorElement />,
              element: (
                <Suspense fallback="loading...">
                  <RoomPage />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: "payroll",
          element: (
            <Suspense fallback="loading...">
              <PayrollPage />
            </Suspense>
          ),
        },
        {
          path: "pos",
          element: (
            <Suspense fallback="loading...">
              <PosPage />
            </Suspense>
          ),
        },
        {
          path: "users",
          // loader: usersLoader(queryClient),
          errorElement: <ErrorElement />,
          element: (
            <Suspense fallback="loading...">
              <UsersPage />
            </Suspense>
          ),
        },
        {
          path: "account",
          element: (
            <Suspense fallback="loading...">
              <AccountPage />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} fallbackElement={<DashboardLoading />} />
      <Toaster />
      <TailwindIndicator />
    </>
  );
}

export default App;
