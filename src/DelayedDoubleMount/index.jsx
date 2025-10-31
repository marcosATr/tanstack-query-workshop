import React from "react";
import UserListA from "./UserListA.jsx";
import UserListB from "./UserListB.jsx";

export default function DelayedDoubleMount() {
  const [show, setShow] = React.useState(false);
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <h2>Delayed Double Mount</h2>
      <UserListA />

      {show && <UserListB />}
    </div>
  );
}
