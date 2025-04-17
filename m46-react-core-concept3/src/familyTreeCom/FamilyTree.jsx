import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";
import "./familyTree.css";

export const MoneyContext = createContext(0);
export const AssetContext = createContext("");

const FamilyTree = () => {
  const [money, setMoney] = useState(0);

  const newAsset = "gold";
  const asset = "diamond";

  return (
    <div className="family_tree">
      <h2>Family Tree</h2>
      <h4>Total family Money: {money}</h4>
      <MoneyContext value={[money, setMoney]}>
        <AssetContext.Provider value={newAsset}>
          <Grandpa asset={asset}></Grandpa>
        </AssetContext.Provider>
      </MoneyContext>
    </div>
  );
};

export default FamilyTree;
