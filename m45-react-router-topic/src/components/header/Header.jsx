import React from "react";
import { Link, NavLink } from "react-router";
import "./header.css";

const Header = () => {
  return (
    <div style={{border: " 2px solid yellowgreen",margin: "5px",padding: "5px"}}>
      <h1>All Header Options</h1>
      <nav
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          margin: "20px",
        }}
      >
        {/* <a href="/">Home</a>
        <a href="/mobiles">Mobiles</a>
        <a href="/laptops">Laptops</a> */}

        {/* react router best way for  */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/mobiles">Mobiles</NavLink>
        <NavLink to="/laptops">Laptops</NavLink>
        <NavLink to="/users">Users</NavLink>
        <NavLink to="/users2">Users2</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </div>
  );
};

export default Header;
