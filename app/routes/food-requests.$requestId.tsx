import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { FoodRequestDetailsCard } from "~/components/food-requests/food-request-details-card";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  return null;
};

export default function RouteComponent() {
  const data = useLoaderData<typeof loader>()
  return (
    <main className=" flex-1 bg-muted overflow-y-auto ">
      <div className="container mx-auto px-0 xl:px-8 xl:py-4">
        <FoodRequestDetailsCard />
      </div>
      <div className="bg-muted h-[30px]">

      </div>


    </main>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <div />
  }
  return <div />
}