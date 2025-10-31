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
 //criar a mutation

 //enviar na mutaton { title: "foo", body: "bar", userId: Math.random() }
  const post = () => {}

  return (
    <div>
      <h2>Mutation Example</h2>
      <button onClick={post} disabled={mutation.isPending}>
        Create Post
      </button>
      <MutationResult />
    </div>
  );
}
