import React, { Suspense, useState } from "react";
import { Link, Navigate, useLocation } from "react-router";
import UserDetail2 from "../../userdetails/UserDetail2";

const User = ({ user }) => {
  const location = useLocation();
  // console.log(location);

  const [visitHome, setVisitHome] = useState(false);

  const [info, setInfo] = useState(false);
  const { id, name, email, phone } = user;

  const userPromise = fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  ).then((res) => res.json());

  const userStyle = {
    border: "2px solid red",
    borderRadius: "20px",
    padding: "10px",
    margin: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
  };

  if (visitHome) {
    return <Navigate to="/"></Navigate>;
  }
  return (
    <div style={userStyle}>
      <h3>{name}</h3>
      <p>Email : {email}</p>
      <p>
        <small>Phone : {phone}</small>
      </p>
      <Link to={`/users/${id}`}>Show Details</Link>
      <button onClick={() => setInfo(!info)}>
        {info ? "Hide" : "Detail"} info
      </button>
      {info && (
        <Suspense fallback={<span>Loading data...</span>}>
          <UserDetail2 userPromise={userPromise}></UserDetail2>
        </Suspense>
      )}
      <button onClick={() => setVisitHome(true)}>Visit Home</button>
    </div>
  );
};

export default User;
