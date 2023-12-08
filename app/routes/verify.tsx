// Purpose of this page is to verify user's program acceptance
// users are redirected here if not verified for current program
// If user is verified, they are redirected to request history page

// Import dependencies
import type { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { TitleHeader } from "~/components/layout/page-headers";
import { StandardShell } from "~/components/layout/shells";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { RequestVerificationForm } from "~/components/verification/request-verification-form";

// Import components




// loader function
export const loader = async ({ request }: LoaderFunctionArgs) => {
  return null;
};



// action function
export const action = async ({ request }: ActionFunctionArgs) => {
  return null;
};


// Display to user

export default function VerifyUserPage() {
  return (
    <StandardShell>
      <div className="flex-1 overflow-y-auto bg-secondary">
        <TitleHeader title="Verify User" >
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
        <main className="px-5 py-2">
          <Card className="">
            <CardHeader>
              <CardTitle>
                Request Verification
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RequestVerificationForm />

            </CardContent>
          </Card>

        </main>
      </div>
    </StandardShell>
  )
}






