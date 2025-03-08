import { useActionState } from "react";

export default function Example1() {
  const [message, handleSubmit, isPending] = useActionState(async (prev, formData) => {
    const name = formData.get("name");
    if (!name) return "Please enter your name!";
    return `Hello, ${name}!`;
  }, "");

  return (
    <form action={handleSubmit}>
      <input name="name" type="text" placeholder="Enter your name" required />
      <button type="submit" disabled={isPending}>
        {isPending ? "Submitting..." : "Submit"}
      </button>
      <p>{message}</p>
    </form>
  );
}

