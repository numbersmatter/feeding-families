import { ActionFunctionArgs, LoaderFunctionArgs, json, redirect, } from "@remix-run/node";
import {
  Link,
  useActionData,
  useLoaderData,
  useSubmit
} from "@remix-run/react";
import { UserAuthForm } from "~/components/auth/user-auth-form";
import { buttonVariants } from "~/components/ui/button";
import { cn } from "~/lib/utils";
import sideImage from "~/images/food-pantry.png"
import { useCallback, useState } from "react";
import { commitSession, getSession } from "~/services/session.server";
import { checkSessionCookie, signIn, signInWithToken } from "~/services/auth-firebase.server";
import { getRestConfig } from "~/services/firebase/firebase.server";
import * as firebaseRest from "~/services/firebase/firebase-rest";
import { authenticator } from "~/services/auth.server";
import { AuthStrategies } from "~/services/auth_strategies";

// import { checkSessionCookie, signIn, signInWithToken } from "~/server/auth/auth.server";
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

  return await authenticator.authenticate(AuthStrategies.FORM, request, {
    successRedirect: "/",
    failureRedirect: "/login",
  });

}



export async function loader({ params, request }: LoaderFunctionArgs) {
  await authenticator.isAuthenticated(request, {
    successRedirect: "/",
  }
  )
  // const session = await getSession(request.headers.get("cookie"));
  // const { uid } = await checkSessionCookie(session);
  // const headers = {
  //   "Set-Cookie": await commitSession(session),
  // };
  // if (uid) {
  //   return redirect("/", { headers });
  // }
  const { apiKey, domain } = getRestConfig();
  return json({ apiKey, domain })

}

type ActionData = {
  error?: string;
};


export default function LoginPage() {
  const [clientAction, setClientAction] = useState<ActionData>()
  const restConfig = useLoaderData<typeof loader>();
  const submit = useSubmit();

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      // To avoid rate limiting, we sign in client side if we can.
      const login = await firebaseRest.signInWithPassword(
        {
          email: event.currentTarget.email.value,
          password: event.currentTarget.password.value,
          returnSecureToken: true,
        },
        restConfig
      );
      if (firebaseRest.isError(login)) {
        setClientAction({ error: login.error.message });
        return;
      }
      submit({ idToken: login.idToken }, { method: "post" });
    },
    [submit, restConfig]
  );


  return (
    <div className="container h-full flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
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
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={sideImage}
          alt=""
        />
        {/* <div className="absolute inset-0 bg-zinc-900" /> */}
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
          Feeding Families
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;They were there for me and my children needed them.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Login
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email password to sign in.
            </p>
          </div>
          <UserAuthForm handleSubmit={handleSubmit} />
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
