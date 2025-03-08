import { useActionState } from "react";

export default function Example2() {
  const [status, login, isPending] = useActionState(async (prev, formData) => {
    const username = formData.get("username");
    const password = formData.get("password");

    if (username !== "admin" || password !== "1234") return "Invalid credentials!";
    return "Login successful ✅";
  }, "");

  return (
    <form action={login}>
      <input name="username" type="text" placeholder="Username" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit" disabled={isPending}>
        {isPending ? "Logging in..." : "Login"}
      </button>
      <p>{status}</p>
    </form>
  );
}

