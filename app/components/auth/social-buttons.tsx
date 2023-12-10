import { Form } from "@remix-run/react"
import { AuthStrategies } from "~/services/auth_strategies";
import type { AuthStrategy } from "~/services/auth.server";
import { Button } from "~/components/ui/button";

interface SocialButtonProps {
  provider: AuthStrategy,
  label: string
}

export const SocialButton = ({ provider, label }: SocialButtonProps) => (
  <Form action={`/auth/${provider}`} method="post">
    <Button variant={"outline"} type="button">
      {label}
    </Button>
  </Form>
);