import type { ActionFunctionArgs } from "@remix-run/node"
import { Form, useSubmit } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { authenticator } from "~/services/auth.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  await authenticator.logout(request, { redirectTo: "/" });
};

export default function Logout() {
  let submit = useSubmit();
  let formRef = useRef(null);

  useEffect(() => {

    submit(formRef.current, { method: 'post' })
  }, []);


  return (
    <div>
      <h1>Logout</h1>
      <p>Press the button below to log out.</p>
      <Form ref={formRef} method="post">
        <button name="logout" type="submit">Logout</button>
      </Form>
    </div>
  );
}