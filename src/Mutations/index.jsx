import React from "react";
import { useMutation } from "@tanstack/react-query";
import MutationResult from "./MutationResult";

function createPost(newPost) {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: { "Content-type": "application/json; charset=UTF-8" },
  }).then((res) => res.json());
}




export default function Mutations() {
  const mutation = useMutation({
    mutationKey: ["createPost"],
    mutationFn: createPost,
  });

  return (
    <div>
      <h2>Mutation Example</h2>
      <button
        onClick={() =>
          mutation.mutate({ title: "foo", body: "bar", userId: Math.random() })
        }
        disabled={mutation.isPending}
      >
        Create Post
      </button>
      <MutationResult />
    </div>
  );
}
