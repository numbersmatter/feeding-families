import type { MetaFunction, ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { TitleHeader } from "~/components/layout/page-headers";
import { StandardShell } from "~/components/layout/shells";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { RequestVerificationForm } from "~/components/verification/request-verification-form";


export const meta: MetaFunction = () => {
  return [
    { title: "Feeding Families" },
    { name: "Support for families", content: "Supporting Communities in School Families" },
  ];
};

export default function Index() {
  return (
    <StandardShell>
      <div className="flex-1 overflow-y-auto">
        <TitleHeader title="Welcome to the Feeding Families App" >
          <Card>
            <CardHeader>
              <CardTitle>
                Important: Before you can use app
              </CardTitle>
            </CardHeader>
            <CardContent>
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
