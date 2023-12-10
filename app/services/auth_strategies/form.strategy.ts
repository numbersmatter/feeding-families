// Refer to https://github.com/sergiodxa/remix-auth-form for more information
import type { User } from "~/services/auth.server";
import { FormStrategy } from "remix-auth-form";
import { signIn, signInWithToken } from "../auth-firebase.server";
import { auth } from "../firebase/firebase.server";

export const formStrategy = new FormStrategy<User>(async ({ form }) => {
  // Do something with the tokens and profile
  const idToken = form.get("idToken");

  if (typeof idToken === "string") {
    let sessionCookie = await signInWithToken(idToken);
    const decodedIdToken = await auth.server.verifySessionCookie(
      sessionCookie || ""
    );
    const user: User = {
      uid: decodedIdToken.uid,
    };
    return user;
  } else {
    const email = form.get("email") as string;
    const password = form.get("password") as string;
    // const formError = { error: "Please fill all fields!" };
    // if (typeof email !== "string") return formError;
    // if (typeof password !== "string") return formError;
    let sessionCookie = await signIn(email, password);
    const decodedIdToken = await auth.server.verifySessionCookie(
      sessionCookie || ""
    );
    const user: User = {
      uid: decodedIdToken.uid,
    };
    return user;
  }
});
