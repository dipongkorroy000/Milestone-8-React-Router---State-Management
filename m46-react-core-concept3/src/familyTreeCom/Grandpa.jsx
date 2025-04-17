import React from "react";
import Father from "./father/Father";
import Aunt from "./aunt/Aunt";

const Grandpa = ({asset}) => {
  return (
    <div>
      <h3>Grandpa</h3>
      <section className="flex">
        <Father asset={asset}></Father>
        <Aunt asset={asset}></Aunt>
      </section>
    </div>
  );
};

export default Grandpa;
