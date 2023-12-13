import { Outlet } from "@remix-run/react";
import { StaffShell } from "~/components/layout/shells";

export default function RouteComponent() {
  return (
    <StaffShell>
      <Outlet />
    </StaffShell>
  );
}