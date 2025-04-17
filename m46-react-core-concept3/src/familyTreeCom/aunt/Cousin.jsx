import React from "react";
import Special from "../Special";
import Friend from "../Friend";

const Cousin = ({ name, asset }) => {
  return (
    <div>
      <h3>Cs: {name}</h3>
      {name === "Toma" && <Special asset={asset}></Special>}
      {name === "Jojo" && <Friend></Friend>}
    </div>
  );
};

export default Cousin;
