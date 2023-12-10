import type { MetaFunction, ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { TitleHeader } from "~/components/layout/page-headers";
import { StandardShell } from "~/components/layout/shells";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { RequestVerificationForm } from "~/components/verification/request-verification-form";
import { authenticator } from "~/services/auth.server";


export const meta: MetaFunction = () => {
  return [
    { title: "Feeding Families" },
    { name: "Support for families", content: "Supporting Communities in School Families" },
  ];
};

export const loader = async ({ request }: LoaderFunctionArgs) => {
  let user = await authenticator.isAuthenticated(request);

  if (user) {
    // here the user is authenticated
    return json({ user })
  } else {
    // here the user is not authenticated
    return redirect("/login");
  }
};



export default function Index() {
  const data = useLoaderData<typeof loader>();
  return (
    <StandardShell>
      <div className="flex-1 overflow-y-auto bg-secondary">
        <TitleHeader title="Welcome to the Feeding Families App" >
          <Card>
            <CardHeader>
              <CardTitle>
                Important: Before you can use app
              </CardTitle>
            </CardHeader>
            <CardContent>
              <pre>
                {JSON.stringify(data, null, 2)}
              </pre>
              You must verify with Communities in school. Please fill out the form below and we will contact you. You must speak with a school staff member to verify your identity and child in the school.
            </CardContent>
          </Card>
        </TitleHeader>
        <main>

        </main>
      </div>
    </StandardShell>

  );
}
