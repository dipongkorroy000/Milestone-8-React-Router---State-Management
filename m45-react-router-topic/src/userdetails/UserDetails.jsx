import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  //   console.log(user);
  const { website, name } = user;
  return (
    <div
      style={{
        border: "2px solid yellowgreen",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px"
      }}
    >
      <p>Name : {name}</p>
      <p>{website}</p>
    </div>
  );
};

export default UserDetails;
