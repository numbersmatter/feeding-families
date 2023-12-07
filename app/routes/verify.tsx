// Purpose of this page is to verify user's program acceptance
// users are redirected here if not verified for current program
// If user is verified, they are redirected to request history page

import { TitleHeader } from "~/components/layout/page-headers";
import { StandardShell } from "~/components/layout/shells";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { RequestVerificationForm } from "~/components/verification/request-verification-form";

// Import dependencies




// Import components




// loader function



// action function


// presentation layer

export default function VerifyUserPage() {
  return (
    <StandardShell>
      <div className="flex-1 overflow-y-auto">
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
        <main>
          <Card>
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






