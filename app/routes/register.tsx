import { Form, useActionData, useNavigation  } from "@remix-run/react";
import type { ActionFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { json, redirect } from "@remix-run/node"; // or cloudflare/deno

export default function Signup() {

  const actionData = useActionData<typeof action>();
  const navigation = useNavigation();
  return (
    <Form method="post">
      <p>
        <label>Email</label>
        <input type="email" name="email" />
        {actionData?.errors?.email ? (
          <em>{actionData?.errors.email}</em>
        ) : null}
      </p>

      <p>
      <label>Password</label>
        <input type="password" name="password" />
        {actionData?.errors?.password ? (
          <em>{actionData?.errors.password}</em>
        ) : null}
      </p>

      <button type="submit">Sign Up
      
      {navigation.state === "submitting"
          ? "Creating invoice..."
          : "Create invoice"}</button>
    </Form>
  );
}

// Define a type for your form data
interface FormData {
  email: string;
  password: string;
}

export async function action({
  request,
}: ActionFunctionArgs) {
  const formData = await request.formData();
  
  // Use the defined type for formData
  const formDataTyped = {
    email: String(formData.get("email")),
    password: String(formData.get("password")),
  } as FormData;

  const errors: Partial<FormData> = {};

  if (!formDataTyped.email.includes("@")) {
    errors.email = "Invalid email address";
  }

  if (formDataTyped.password.length < 12) {
    errors.password = "Password should be at least 12 characters";
  }

  if (Object.keys(errors).length > 0) {
    return json({ errors });
  }

  // Redirect to dashboard if validation is successful
  return redirect("/dashboard");
}



