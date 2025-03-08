import { useActionState } from "react";

export default function Example5() {
  const [count, updateCount, isPending] = useActionState((prev, action) => {
    return action.type === "increment" ? prev + 1 : prev - 1;
  }, 0);

  return (
    <div>
      <h3>Counter: {count}</h3>
      <button onClick={() => updateCount({ type: "increment" })} disabled={isPending}>
        {isPending ? "Incrementing..." : "Increment"}
      </button>
      <button onClick={() => updateCount({ type: "decrement" })} disabled={isPending}>
        {isPending ? "Decrementing..." : "Decrement"}
      </button>
    </div>
  );
}



