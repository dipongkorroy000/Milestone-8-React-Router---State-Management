import React from "react";
import { Link, useNavigate } from "react-router";

const Post = ({ post }) => {
  const { id, title } = post;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/posts/${id}`);
  };
  return (
    <div
      style={{
        border: "1px solid green",
      }}
    >
      <p>Title : {title}</p>
      <Link to={`/posts/${id}`}>
        <button>Show Details</button>
      </Link>
      <button onClick={handleClick}>Details of : {id}</button>
    </div>
  );
};

export default Post;
