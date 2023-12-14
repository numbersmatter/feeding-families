import { type LoaderFunctionArgs, type ActionFunctionArgs, json } from "@remix-run/node";
import { useLoaderData, isRouteErrorResponse, useRouteError, NavLink } from "@remix-run/react";
import { StaffShell } from "~/components/layout/shells";
import { ReviewListCard } from "~/components/review-list-card";

export const loader = async ({ request }: LoaderFunctionArgs) => {


  const requests = [
    {
      id: "1",
      title: "Jane Smith",

    }
  ];

  return json({ requests });
};

export const action = async ({ request }: ActionFunctionArgs) => {
  return null;
};





export default function RouteComponent() {
  const data = useLoaderData<typeof loader>()
  return (
    <StaffShell>
      <nav id="request-list" className="h-full w-full  border-muted-foreground   overflow-y-auto bg-muted md:border-r-4  md:w-[300px] xl:w-[350px]">
        <div className="relative ">
          <div className="pb-1 pt-2 bg-muted text-xl text-center sticky top-0 border-y border-b-muted-foreground border-2  font-semibold leading-6">
            <h3>Requests</h3>
          </div>
          <div className="flex flex-col px-4 gap-3 md:gap-0 md:px-0" >
            {
              data.requests.map((request) => (
                <NavLink to={`/review/${request.id}`} key={request.id}>
                  <ReviewListCard
                    id={request.id}
                    title={request.title}
                    current={false}
                    footer="middle schooler caregiver"
                  />
                </NavLink>
              ))}
          </div>
        </div>
      </nav>
      <main className="hidden flex-1 bg-muted md:block ">
        <div className="container h-full mx-auto sm:p-6 lg:px-8">
          <div className="flex justify-center items-center h-full w-full rounded-xl border-4 border-dashed border-muted-foreground">
            <h3 className="text-xl leading-6">
              Select a request to review.
            </h3>
          </div>
        </div>
      </main>
    </StaffShell>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();
  if (isRouteErrorResponse(error)) {
    return <div />
  }
  return <div />
}