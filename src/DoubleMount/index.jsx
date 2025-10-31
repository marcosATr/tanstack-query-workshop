import React from "react";
import UserListA from "./UserListA.jsx";
import UserListB from "./UserListB.jsx";

export default function DoubleMount() {
  return (
    <div>
      <h2>Double Mount</h2>
      <UserListA />
      <UserListB />
    </div>
  );
}
