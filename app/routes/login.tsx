import { Form } from "@remix-run/react"
import { AuthStrategies } from "~/services/auth_strategies";
import type { AuthStrategy } from "~/services/auth.server";

interface SocialButtonProps {
  provider: AuthStrategy,
  label: string
}

const SocialButton = ({ provider, label }: SocialButtonProps) => (
  <Form action={`/auth/${provider}`} method="post">
    <button>{label}</button>
  </Form>
);

export default function LoginRoute() {
  return (
    <>
      <SocialButton provider={AuthStrategies.FORM} label="Login with form" />
      <SocialButton provider={AuthStrategies.GOOGLE} label="Login with google" />
      <SocialButton provider={AuthStrategies.DISCORD} label="Login with discord" />
    </>
  );
}