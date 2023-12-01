import { ActionFunctionArgs, LoaderFunctionArgs, json, } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { UserAuthForm } from "~/components/auth/user-auth-form";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
// import { Link, useActionData, useLoaderData, useSubmit } from "@remix-run/react";
// import { useCallback, useState } from "react";
// import { checkSessionCookie, signIn, signInWithToken } from "~/server/auth/auth.server";
// import * as firebaseRest from "~/server/auth/firebase-rest";
// import { getRestConfig } from "~/server/auth/firebase.server";
// import { commitSession, getSession } from "~/server/auth/sessions";


export async function action({ params, request }: ActionFunctionArgs) {
  // const form = await request.formData();
  // const idToken = form.get("idToken");
  // let sessionCookie;
  // try {
  //   if (typeof idToken === "string") {
  //     sessionCookie = await signInWithToken(idToken);
  //   } else {
  //     const email = form.get("email");
  //     const password = form.get("password");
  //     const formError = json(
  //       { error: "Please fill all fields!" },
  //       { status: 400 }
  //     );
  //     if (typeof email !== "string") return formError;
  //     if (typeof password !== "string") return formError;
  //     sessionCookie = await signIn(email, password);
  //   }
  //   const session = await getSession(request.headers.get("cookie"));
  //   session.set("session", sessionCookie);
  //   return redirect("/", {
  //     headers: {
  //       "Set-Cookie": await commitSession(session),
  //     },
  //   });
  // } catch (error) {
  //   console.error(error);
  //   return json({ error: String(error) }, { status: 401 });
  // }

  return json({ error: "Please fill all fields!" }, { status: 400 });

}



export async function loader({ params, request }: LoaderFunctionArgs) {
  return json({})

}


export default function LoginPage() {



  return (

    <div className="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
      <Link
        to="/examples/authentication"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute right-4 top-4 md:right-8 md:top-8"
        )}
      >
        Login
      </Link>
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2 h-6 w-6"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          Acme Inc
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;This library has saved me countless hours of work and
              helped me deliver stunning designs to my clients faster than
              ever before.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{" "}
            <Link
              to="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link
              to="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </div>

  )

}




