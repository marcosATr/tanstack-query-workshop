import React from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

let postsDatabase = [
  { id: 1, title: "Post inicial 1", body: "Conteúdo do post 1", userId: 1 },
  { id: 2, title: "Post inicial 2", body: "Conteúdo do post 2", userId: 1 },
  { id: 3, title: "Post inicial 3", body: "Conteúdo do post 3", userId: 1 },
];

let nextId = 4;

function fetchPosts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([...postsDatabase]);
    }, 500);
  });
}

function createPost(newPost) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const post = { ...newPost, id: nextId++ };
      postsDatabase.push(post);
      resolve(post);
    }, 300);
  });
}

export default function InvalidateQuery() {
  const queryClient = useQueryClient();
  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
  });

  const mutation = useMutation({
    mutationKey: ["createPost"],
    mutationFn: createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  const addPost =  () =>
    mutation.mutate({
      title: `Novo Post ${new Date().toLocaleTimeString()}`,
      body: "Este post foi adicionado via mutation!",
      userId: Math.random(),
    });

  return (
    <div>
      <h2>Invalidate Query Example</h2>
      <p>
        <strong>Como funciona:</strong> Quando você adiciona um novo post, o
        `invalidateQueries` força o React Query a refazer a busca pelos posts,
        mostrando assim o novo post na lista.
      </p>
      <button onClick={addPost} disabled={mutation.isPending}>
        {mutation.isPending ? "Adicionando..." : "Adicionar Post"}
      </button>

      {isLoading ? (
        <div>Loading posts...</div>
      ) : (
        <ul>
          {posts?.map((post) => (
            <li key={post.id}>
              <strong>{post.title}</strong> - {post.body}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
