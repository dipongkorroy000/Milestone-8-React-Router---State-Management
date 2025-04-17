import React from "react";
import MySelf from "./MySelf";
import Brother from "./Brother";
import Sister from "./Sister";

const Father = ({ asset }) => {
  return (
    <div>
      <h3>Father</h3>
      <section className="flex">
        <MySelf asset={asset}></MySelf>
        <Brother></Brother>
        <Sister></Sister>
      </section>
    </div>
  );
};

export default Father;
