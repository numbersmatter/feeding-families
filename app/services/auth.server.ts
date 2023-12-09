import { Authenticator } from "remix-auth";
import { sessionStorage } from "~/services/session.server";
import { AuthStrategies } from "~/services/auth_strategies";
import { formStrategy } from "./auth_strategies/form.strategy";
import { googleStrategy } from "./auth_strategies/google.strategy";
import { discordStrategy } from "./auth_strategies/discord.strategy";

export interface User {
  // Add your own user properties here or extend with a type from your database
  uid: string;
}

export type AuthStrategy = (typeof AuthStrategies)[keyof typeof AuthStrategies];

// Create an instance of the authenticator, pass a generic with what
// strategies will return and will store in the session
export const authenticator = new Authenticator<User>(sessionStorage);

// Register your strategies below
authenticator.use(formStrategy, AuthStrategies.FORM);
authenticator.use(googleStrategy, AuthStrategies.GOOGLE);
// authenticator.use(discordStrategy, AuthStrategies.DISCORD);
