import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (!res.ok) throw new Error("Erro ao buscar usuários");
  return res.json();
};

const fetchPosts = async ({ queryKey }) => {
  const [, userId] = queryKey;
  if (!userId) throw new Error("No userId");
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
  );
  if (!res.ok) throw new Error("Erro ao buscar posts");
  return res.json();
};

export default function DependentQueriesExercise() {
  const [selectedUserId, setSelectedUserId] = useState("");
  const {
    data: users,
    isLoading: loadingUsers,
    error: errorUsers,
  } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });


  const {
    data: posts,
    isLoading: loadingPosts,
    error: errorPosts,
    refetch: refetchPosts,
  } = useQuery({
    queryKey: ["posts", selectedUserId],
    queryFn: fetchPosts,
    enabled: !!selectedUserId,
  });

  return (
    <div style={{ padding: 24 }}>
      <h2>Exercício: Dependent Queries com jsonplaceholder</h2>
      <p>
        1. Primeiro, busque a lista de usuários.<br />
        2. Depois, selecione um usuário para buscar os posts dele.<br />
      </p>
      <div>
        <label>
          <b>Selecione um usuário:</b>
          <br />
          {loadingUsers && <span>Carregando usuários...</span>}
          {errorUsers && <span>Erro ao buscar usuários</span>}
          {users && (
            <select
              value={selectedUserId}
              onChange={(e) => setSelectedUserId(e.target.value)}
              style={{ marginTop: 8, marginBottom: 16 }}
            >
              <option value="">-- Escolha --</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name} ({user.username})
                </option>
              ))}
            </select>
          )}
        </label>
      </div>
      <div>
        <button
          onClick={refetchPosts}
          disabled={!selectedUserId || loadingPosts}
          style={{ marginBottom: 16 }}
        >
          Buscar posts do usuário
        </button>
        {loadingPosts && <span>Carregando posts...</span>}
        {errorPosts && <span>Erro ao buscar posts</span>}
        {posts && (
          <ul>
            {posts.map((post) => (
              <li key={post.id}>
                <b>{post.title}</b>: {post.body}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
