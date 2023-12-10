import type { LoaderFunctionArgs, ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData, isRouteErrorResponse, useRouteError } from "@remix-run/react";
import { StandardDataTable } from "~/components/common/standard-data-table";
import { foodRequestColumnsLong, foodRequestTestData } from "~/components/food-requests/food-requests-columns";

export const loader = async ({ request }: LoaderFunctionArgs) => {
  return null;
};

export const action = async ({ request }: ActionFunctionArgs) => {
  return null;
};

export default function FoodRequestIndexRoute() {
  const data = useLoaderData<typeof loader>()

  const pageTitle = "Food Box Request History";
  const pageDescription = "Your past requests and statuses.";

  return (
    <main className="flex h-full flex-1 flex-col space-y-8 overflow-y-auto">
      <div className="flex items-center justify-between space-y-2 p-8">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            {pageTitle}
          </h2>
          <p className="text-muted-foreground">
            {pageDescription}
          </p>
        </div>
        <div className="flex items-center space-x-2">
        </div>
      </div>
      <div className="hidden px-0 sm:block lg:px-4">
        <div className="border-0  border-muted-foreground bg-muted lg:border-2 lg:rounded-md lg:p-4 ">
          <StandardDataTable
            columns={foodRequestColumnsLong}
            data={foodRequestTestData}
          />
        </div>
      </div>
      <div className="px-0  sm:hidden">
        <div className="">
          <StandardDataTable
            columns={foodRequestColumnsLong}
            data={foodRequestTestData}
          />
        </div>
      </div>
      <div className="h-8" />
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