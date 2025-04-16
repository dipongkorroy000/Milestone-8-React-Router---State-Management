import React from "react";
import { useLoaderData } from "react-router";
import Post from "./Post";

const Posts = () => {
  const posts = useLoaderData();
  // console.log(posts);
  return (
    <div>
      <h3>these are my posts {posts.length}</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,0.3fr)",
          textAlign: "left",
        }}
      >
        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Posts;
