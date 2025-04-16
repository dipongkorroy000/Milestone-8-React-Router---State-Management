import React, { use } from "react";

const UserDetail2 = ({ userPromise }) => {
  const { name, username } = use(userPromise);
  // const user = use(userPromise);
  // console.log(user);
  return (
    <div>
      <p>
        <small>user Name : {username}</small>
      </p>
      <p>Name : {name}</p>
    </div>
  );
};

export default UserDetail2;
