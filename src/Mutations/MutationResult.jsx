import React from "react";
import { useMutationState } from "@tanstack/react-query";

export default function MutationResult() {
  const mutations = useMutationState({
    filters: { mutationKey: ["createPost"] },
  });

  if (!mutations || mutations.length === 0) return <p>No mutation yet.</p>;

  const { data, status, error } = mutations.at(-1);

  if (status === "pending") return <p>Sending...</p>;
  if (status === "error") return <p>Error: {error.message}</p>;
  if (status === "success")
    return (
      <div>
        <h4>Mutation Result:</h4>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
}
