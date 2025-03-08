import { useActionState } from "react";

export default function Example3() {
  const [data, fetchData, isPending] = useActionState(async (prev, formData) => {
    const id = formData.get("id");
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    const result = await response.json();
    return result.title || "No data found!";
  }, "Enter an ID and submit");

  return (
    <form action={fetchData}>
      <input name="id" type="number" placeholder="Enter ID (1-200)" required />
      <button type="submit" disabled={isPending}>
        {isPending ? "Fetching..." : "Fetch Data"}
      </button>
      <p>{data}</p>
    </form>
  );
}
