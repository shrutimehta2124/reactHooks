import { useActionState } from "react";

export default function Example4() {
  const [message, sendMessage, isPending] = useActionState(async (prev, formData) => {
    const email = formData.get("email");
    const message = formData.get("message");

    if (!email || !message) return "All fields are required!";
    await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate sending message
    return "Message sent successfully ✅";
  }, "");

  return (
    <form action={sendMessage}>
      <input name="email" type="email" placeholder="Your Email" required />
      <textarea name="message" placeholder="Your Message" required></textarea>
      <button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send"}
      </button>
      <p>{message}</p>
    </form>
  );
}


