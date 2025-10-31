import React from "react";
import { useQuery } from "@tanstack/react-query";

function fetchUsers() {
  return fetch("https://jsonplaceholder.typicode.com/users?_limit=10").then((res) => res.json());
}

export default function UserListB() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });

  // O QUE APARECE NO NETWORK?
  // COMO PODEMOS GARANTIR QUE VAMOS REUTILIZAR A MESMA QUERY SEM FAZER OUTRA CHAMADA NO NETWORK?
  

  if (isLoading) return <div>Loading B...</div>;
  if (error) return <div>Error loading users B</div>;

  return (
    <div>
      <h2>UserListB</h2>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}
