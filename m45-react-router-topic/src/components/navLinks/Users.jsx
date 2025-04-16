import React from "react";
import { useLoaderData } from "react-router";
import User from "../user/User";

const Users = () => {
  const users = useLoaderData();
  // console.log(users);
  return (
    <div>
      <div style={{display:"grid",gridTemplateColumns: "repeat(3,0.5fr)"}}>
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
