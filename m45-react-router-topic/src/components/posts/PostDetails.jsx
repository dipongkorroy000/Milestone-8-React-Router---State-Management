import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router";

const PostDetails = () => {
  //   const userId = useParams();
  //   console.log(userId);
  // alternative --
  // const { userId } = useParams();
  // // console.log(userId);

  const PostDetail = useLoaderData();
  //   console.log(PostDetail);
  const navigate = useNavigate();
  return (
    <div style={{ width: "500px", border: "1px solid red" }}>
      <p>Post Details : {PostDetail.body}</p>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
  );
};

export default PostDetails;
