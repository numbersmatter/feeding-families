import { Outlet } from "@remix-run/react";
import { StandardShell } from "~/components/layout/shells";

export default function RouteComponent() {
  return (
    <StandardShell>
      <Outlet />
    </StandardShell>
  );
}