import React, { use } from "react";

const Users2 = ({ user2Promise }) => {
    const users = use(user2Promise);
  // console.log("user2",users);
  return (
    <div>
      <h2>Users Alternative data fetch</h2>
      <p>Users Length : {users.length}</p>
    </div>
  );
};

export default Users2;
