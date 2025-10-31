import React from "react";
import { useQuery } from "@tanstack/react-query";

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users?_limit=10").then((res) => res.json());
}

export default function UserListA() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  if (isLoading) return <div>Loading A...</div>;
  if (error) return <div>Error loading users A</div>;

  return (
    <div>
      <h2>UserListA</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
